
from rest_framework import serializers

# from page.models import Page
from rest_framework import status
from .models import User
from rest_framework.response import Response
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema, swagger_serializer_method

from rest_framework_jwt import serializers as jwt_serializers
from django.db import transaction
from api_error.system_exception import Error, SystemError, SystemErrorList, SystemException


class UserListSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    email = serializers.CharField(read_only=True)
    username = serializers.CharField(read_only=True)
    is_superuser = serializers.BooleanField(read_only=True)
    is_active = serializers.BooleanField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'is_superuser', 'is_active']


class UserCreateSerializer(serializers.ModelSerializer):

    email = serializers.CharField(required=True)
    username = serializers.CharField()
    is_superuser = serializers.BooleanField(required=True)
    is_active = serializers.BooleanField(required=False)
    password1 = serializers.RegexField(
        regex=r"^(?=.{8,15}$)(?=.*[A-Za-z])(?=.*[0-9])(?=.*\W).*$", write_only=True)
    password2 = serializers.RegexField(
        regex=r"^(?=.{8,15}$)(?=.*[A-Za-z])(?=.*[0-9])(?=.*\W).*$", write_only=True)
    token = serializers.CharField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'password1', 'password2',
                  'is_superuser', 'is_active', 'token']

    @transaction.atomic
    def create(self, validated_data):

        user = User(
            email=validated_data['email'],
            username=validated_data['username'],
            is_superuser=validated_data['is_superuser']
        )
        user.set_password(validated_data['password1'])

        try:
            tmp_user = User.objects.get(email=validated_data['email'])
            raise SystemException(
                SystemErrorList.errors[Error.USER_EMAIL_ALREADY_EXIST.value], validated_data['email'])
        except User.DoesNotExist:
            user.save()
        except SystemException as e:
            raise e

        user.save()

        return user


class UserSerializer(serializers.ModelSerializer):

    email = serializers.CharField(read_only=True)
    is_superuser = serializers.BooleanField(required=False)
    is_active = serializers.BooleanField(required=False)
    password1 = serializers.CharField(
        min_length=5, max_length=12, write_only=True, required=False)
    password2 = serializers.CharField(
        min_length=5, max_length=12, write_only=True, required=False)

    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'is_superuser', 'is_active',
                  'password1', 'password2']

    @transaction.atomic
    def update(self, instance, validated_data):
        if 'password1' in validated_data:
            instance.set_password(validated_data['password1'])

        instance.__dict__.update(**validated_data)
        instance.save()
        return instance
