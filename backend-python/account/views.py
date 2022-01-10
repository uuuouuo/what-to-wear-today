from django.shortcuts import render


import logging
import re
from rest_framework import permissions, serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.utils import serializer_helpers
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView, ListCreateAPIView
from django.shortcuts import get_object_or_404

from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema

from .models import User
from .account_serializer import UserListSerializer, UserCreateSerializer, UserSerializer
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.exceptions import ErrorDetail, ValidationError
from api_error.system_exception import Error, SystemError, SystemErrorList, SystemException
from rest_framework_jwt.settings import api_settings
# Create your views here.


def check_password_from_request(request):
    password1 = request.data.get('password1')
    password2 = request.data.get('password2')

    if password1 is None or password1 == "":
        raise SystemException(
            SystemErrorList.errors[Error.USER_TWO_PASSWORD_SHOULD_BE_SENT.value])

    if password2 is None or password2 == "":
        raise SystemException(
            SystemErrorList.errors[Error.USER_TWO_PASSWORD_SHOULD_BE_SENT.value])

    regex_string = r"^(?=.{8,15}$)(?=.*[A-Za-z])(?=.*[0-9])(?=.*\W).*$"

    password_regex = re.compile(regex_string)

    if password_regex.match(password1) is None:
        raise SystemException(
            SystemErrorList.errors[Error.BAD_PASSWORD.value], 'password1')
    if password_regex.match(password2) is None:
        raise SystemException(
            SystemErrorList.errors[Error.BAD_PASSWORD.value], 'password2')

    if password1 != password1:
        raise SystemException(
            SystemErrorList.errors[Error.USER_TWO_PASSWORD_DOES_NOT_EQUAL.value])


def is_include_password_for_update(password1, password2):
    if password1 is not None or password2 is not None:
        return True
    return False


def check_password_for_update_from_request(request):
    password1 = request.data.get('password1')
    password2 = request.data.get('password2')

    if is_include_password_for_update(password1, password2):
        if password1 is None or password1 == "":
            raise SystemException(
                SystemErrorList.errors[Error.USER_TWO_PASSWORD_SHOULD_BE_SENT.value])

        if password2 is None or password2 == "":
            raise SystemException(
                SystemErrorList.errors[Error.USER_TWO_PASSWORD_SHOULD_BE_SENT.value])

        regex_string = r"^(?=.{8,15}$)(?=.*[A-Za-z])(?=.*[0-9])(?=.*\W).*$"

        password_regex = re.compile(regex_string)

        if password_regex.match(password1) is None:
            raise SystemException(
                SystemErrorList.errors[Error.BAD_PASSWORD.value], 'password1')
        if password_regex.match(password2) is None:
            raise SystemException(
                SystemErrorList.errors[Error.BAD_PASSWORD.value], 'password2')

        if password1 != password1:
            raise SystemException(
                SystemErrorList.errors[Error.USER_TWO_PASSWORD_DOES_NOT_EQUAL.value])


class UserListView(ListCreateAPIView):
    serializer_class = UserListSerializer
    pagination_class = LimitOffsetPagination
    my_filter_fields = ['email', 'username']
    http_method_names = ['get', 'head', 'options']

    param_name_hint = openapi.Parameter(
        'username',
        openapi.IN_QUERY,
        description="user's name",
        type=openapi.TYPE_STRING,
        required=False
    )

    param_email_hint = openapi.Parameter(
        'email',
        openapi.IN_QUERY,
        description="user's email",
        type=openapi.TYPE_STRING,
        required=False
    )

    def get_queryset(self):
        filter_args = {}
        for field in self.my_filter_fields:
            field_value = self.request.query_params.get(field)
            if field_value:
                if field == 'email':
                    filter_args['email__contains'] = field_value
                if field == 'username':
                    filter_args['username__icontains'] = field_value

        if len(filter_args) == 0:
            return User.objects.all().order_by('-id')
        return User.objects.filter(**filter_args).order_by('-id')

    @swagger_auto_schema(
        manual_parameters=[param_name_hint, param_email_hint])
    def get(self, request, *args, **kwargs):
        response = super().get(request, args, kwargs)
        return response


class UserCreateView(GenericAPIView):
    serializer_class = UserCreateSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return

    def post(self, request, format=None):
        check_password_from_request(request)

        serializer = UserCreateSerializer(data=request.data)

        try:
            serializer.is_valid(raise_exception=True)
        except ValidationError as e:
            raise SystemException(
                SystemErrorList.errors[Error.INVALID_PARAMETER.value], e)

        serializer.save()

        user = User.objects.get(email=request.data.get('email'))

        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(user)
        token = jwt_encode_handler(payload)

        response = {
            'user': serializer.data,
            'token': token
        }
        return Response(response)


class UserDetailView(GenericAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        return

    def get_user(self, user_id):
        try:
            user = User.objects.get(pk=user_id)
        except User.DoesNotExist:
            raise SystemException(
                SystemErrorList.errors[Error.USER_NOT_FOUND.value], user_id)
        return user

    def get(self, request, pk, format=None):
        user = self.get_user(pk)
        serializer = UserSerializer(user)

        return Response(serializer.data)

    def put(self, request, pk):
        user = self.get_user(pk)

        caller = User.objects.get(email=request.user)

        if caller.is_superuser is not True:
            raise SystemException(SystemErrorList.errors[Error.API_FORBIDDEN.value],
                                  request.method + " " + request.path)

        check_password_for_update_from_request(request)

        serializer = UserSerializer(user, data=request.data)

        try:
            serializer.is_valid(raise_exception=True)
        except ValidationError as e:

            raise SystemException(
                SystemErrorList.errors[Error.INVALID_PARAMETER.value], e)

        serializer.save()
        return Response(serializer.data)
