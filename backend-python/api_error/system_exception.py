from rest_framework.views import exception_handler
from rest_framework import status
from enum import Enum
from rest_framework.exceptions import APIException
from django.utils.translation import gettext_lazy as _
from account.models import User


class SystemError():
    def __init__(self, errorCode, errorMessage, httpStatus):
        self.errorCode = errorCode
        self.errorMessage = errorMessage
        self.status = httpStatus


class Error(Enum):
    USER_NOT_FOUND = "10001"
    USER_EMAIL_ALREADY_EXIST = "10002"
    USER_TWO_PASSWORD_DOES_NOT_EQUAL = "10003"
    USER_TWO_PASSWORD_SHOULD_BE_SENT = "10004"
    BAD_PASSWORD = "10005"
    GROUP_NOT_FOUND = "20001"
    AUTHORIZATION_NOT_FOUND = "30001"
    COMPONENT_NOT_FOUND = "40001"
    VALIDATION_NOT_FOUND = "50001"
    SERVICE_NOT_FOUND = "60001"
    SERVICE_UNIQ_PATH_EXIST = "60002"
    PAGE_NOT_FOUND = "70001"
    PAGE_URL_EXIST = "70002"
    PAGE_FORBIDDEN = "70003"
    API_FORBIDDEN = "80001"
    AUTH_CREDENTIAL_REQUIRED = "80002"
    AUTH_SIGNATURE_EXPIRED = "80003"
    AUTH_DECODING_SIGNATURE = "80004"
    LOGIN_FAIL = "80005"
    INVALID_PARAMETER = "90001"
    JSON_PARSE_ERROR = "90002"
    METHOD_NOT_ALLOWED = "90003"
    DATA_BASE_ERROR = "90004"
    UNDEFINED_ERROR = "90005"
    CAN_NOT_CREATE_TABLE = "110001"
    TABLE_NOT_FOUND = "11002,"
    QUERY_NOT_FOUND = '120001'
    FILE_DOES_NOT_EXIST = '130001'
    CAN_NOT_DROP_TABLE = '130002'


class SystemErrorList():
    errors = {}
    errors[Error.USER_NOT_FOUND.value] = SystemError(
        Error.USER_NOT_FOUND.value, "UserId [%s] does not exist", status.HTTP_400_BAD_REQUEST)
    errors[Error.USER_EMAIL_ALREADY_EXIST.value] = SystemError(
        Error.USER_EMAIL_ALREADY_EXIST.value, "Email [%s] already exist", status.HTTP_400_BAD_REQUEST)
    errors[Error.USER_TWO_PASSWORD_DOES_NOT_EQUAL.value] = SystemError(
        Error.USER_TWO_PASSWORD_DOES_NOT_EQUAL.value, "Password1 and password2 does not matched", status.HTTP_400_BAD_REQUEST)
    errors[Error.GROUP_NOT_FOUND.value] = SystemError(
        Error.GROUP_NOT_FOUND.value, "GroupId [%s] does not exist", status.HTTP_400_BAD_REQUEST)
    errors[Error.AUTHORIZATION_NOT_FOUND.value] = SystemError(
        Error.AUTHORIZATION_NOT_FOUND.value, "AuthorizationId [%s] does not exist", status.HTTP_400_BAD_REQUEST)
    errors[Error.INVALID_PARAMETER.value] = SystemError(
        Error.INVALID_PARAMETER.value, "%s", status.HTTP_400_BAD_REQUEST)
    errors[Error.API_FORBIDDEN.value] = SystemError(
        Error.API_FORBIDDEN.value, "API [%s] is forbidden", status.HTTP_403_FORBIDDEN)
    errors[Error.USER_TWO_PASSWORD_SHOULD_BE_SENT.value] = SystemError(
        Error.USER_TWO_PASSWORD_SHOULD_BE_SENT.value, "NEED TWO PASSWORD", status.HTTP_403_FORBIDDEN)
    errors[Error.JSON_PARSE_ERROR.value] = SystemError(
        Error.JSON_PARSE_ERROR.value, "Json Parse Error", status.HTTP_400_BAD_REQUEST)
    errors[Error.AUTH_CREDENTIAL_REQUIRED.value] = SystemError(
        Error.AUTH_CREDENTIAL_REQUIRED.value, "Authentication credentials were not provided", status.HTTP_401_UNAUTHORIZED)
    errors[Error.AUTH_SIGNATURE_EXPIRED.value] = SystemError(
        Error.AUTH_SIGNATURE_EXPIRED.value, "Signature has expired", status.HTTP_401_UNAUTHORIZED)
    errors[Error.AUTH_DECODING_SIGNATURE.value] = SystemError(
        Error.AUTH_DECODING_SIGNATURE.value, "Error decoding signature", status.HTTP_401_UNAUTHORIZED)
    errors[Error.METHOD_NOT_ALLOWED.value] = SystemError(
        Error.METHOD_NOT_ALLOWED.value, "Method Not allowed", status.HTTP_405_METHOD_NOT_ALLOWED)
    errors[Error.COMPONENT_NOT_FOUND.value] = SystemError(
        Error.COMPONENT_NOT_FOUND.value, "Component [%s] does not exist", status.HTTP_400_BAD_REQUEST)
    errors[Error.VALIDATION_NOT_FOUND.value] = SystemError(
        Error.VALIDATION_NOT_FOUND.value, "Validation [%s] does not exist", status.HTTP_400_BAD_REQUEST)
    errors[Error.LOGIN_FAIL.value] = SystemError(
        Error.LOGIN_FAIL.value, "Cannot login with credential", status.HTTP_400_BAD_REQUEST)
    errors[Error.SERVICE_NOT_FOUND.value] = SystemError(
        Error.SERVICE_NOT_FOUND.value, "Service [%s] does not exist", status.HTTP_400_BAD_REQUEST)
    errors[Error.SERVICE_UNIQ_PATH_EXIST.value] = SystemError(
        Error.SERVICE_UNIQ_PATH_EXIST.value, "Service uniqPath [%s] already exist", status.HTTP_400_BAD_REQUEST)
    errors[Error.PAGE_NOT_FOUND.value] = SystemError(
        Error.SERVICE_NOT_FOUND.value, "Page [%s] does not exist", status.HTTP_400_BAD_REQUEST)
    errors[Error.PAGE_URL_EXIST.value] = SystemError(
        Error.PAGE_URL_EXIST.value, "Page url [%s] already exist in service", status.HTTP_400_BAD_REQUEST)
    errors[Error.UNDEFINED_ERROR.value] = SystemError(
        Error.UNDEFINED_ERROR.value, "%s", status.HTTP_500_INTERNAL_SERVER_ERROR)
    errors[Error.CAN_NOT_CREATE_TABLE.value] = SystemError(
        Error.CAN_NOT_CREATE_TABLE.value, "%s", status.HTTP_400_BAD_REQUEST)
    errors[Error.QUERY_NOT_FOUND.value] = SystemError(
        Error.QUERY_NOT_FOUND.value, "Query [%s] does not exist", status.HTTP_400_BAD_REQUEST)
    errors[Error.DATA_BASE_ERROR.value] = SystemError(
        Error.DATA_BASE_ERROR.value, "Data base Error", status.HTTP_500_INTERNAL_SERVER_ERROR)
    errors[Error.TABLE_NOT_FOUND.value] = SystemError(
        Error.TABLE_NOT_FOUND.value, "TABLE [%s] does not exist", status.HTTP_500_INTERNAL_SERVER_ERROR)
    errors[Error.PAGE_FORBIDDEN.value] = SystemError(
        Error.TABLE_NOT_FOUND.value, "Page [%s] is forbidden", status.HTTP_403_FORBIDDEN)
    errors[Error.FILE_DOES_NOT_EXIST.value] = SystemError(
        Error.TABLE_NOT_FOUND.value, "File [%s] is forbidden", status.HTTP_404_NOT_FOUND)
    errors[Error.BAD_PASSWORD.value] = SystemError(
        Error.BAD_PASSWORD.value, "[%s] is invalid", status.HTTP_400_BAD_REQUEST)
    errors[Error.CAN_NOT_DROP_TABLE.value] = SystemError(
        Error.CAN_NOT_DROP_TABLE.value, "%s", status.HTTP_400_BAD_REQUEST)


class SystemException(APIException):

    def __init__(self, SystemError, arg=None):
        if arg is not None:
            errorMsg = SystemError.errorMessage % arg
        else:
            errorMsg = SystemError.errorMessage

        default_detail = {
            "errorCode": SystemError.errorCode,
            "errorMessage": errorMsg
        }
        status_code = SystemError.status
        super().__init__(default_detail)

    def make_response(SystemError, response):
        response.data = {
            "errorCode": SystemError.errorCode,
            "errorMessage": SystemError.errorMessage
        }
        response.status_code = SystemError.status


def custom_exception_handler(exc, context):
    # Call REST framework's default exception handler first,
    # to get the standard error response.
    response = exception_handler(exc, context)
    # Now add the HTTP status code to the response.
    request = context['request']

    if response is not None:
        if response.data is not None:
            SystemError = None
            if 'errorCode' in response.data:
                errorCode = response.data['errorCode']
                if errorCode in SystemErrorList.errors:
                    response.status_code = SystemErrorList.errors[errorCode].status
            elif 'detail' in response.data:
                if 'JSON parse error' in response.data['detail']:
                    SystemError = SystemErrorList.errors[Error.JSON_PARSE_ERROR.value]
                    #SymyooException.make_response(SystemError, {reseponse.data})
                elif 'Authentication credentials were not provided' in response.data['detail']:
                    SystemError = SystemErrorList.errors[Error.AUTH_CREDENTIAL_REQUIRED.value]
                    #SymyooException.make_response(SystemError, response)
                elif 'Signature has expired' in response.data['detail']:
                    SystemError = SystemErrorList.errors[Error.AUTH_SIGNATURE_EXPIRED.value]
                elif 'Error decoding signature' in response.data['detail']:
                    SystemError = SystemErrorList.errors[Error.AUTH_DECODING_SIGNATURE.value]
                elif 'not allowed' in response.data['detail']:
                    SystemError = SystemErrorList.errors[Error.METHOD_NOT_ALLOWED.value]
            elif 'non_field_errors' in response.data:
                if 'Unable to log in with provided credentials.' in response.data['non_field_errors']:
                    SystemError = SystemErrorList.errors[Error.LOGIN_FAIL.value]

            if SystemError is not None:
                SymyooException.make_response(SystemError, response)
    return response
