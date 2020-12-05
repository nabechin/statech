from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from apps.user import models
import json


@api_view(["POST"])
def add_user(request):
    result = models.create_user("okazaki")
    return Response(result, status=status.HTTP_200_OK)
    # if request.method == "GET":
    #     return Response(
    #         {"message": "Hello function base APIView GET!!"}, status=status.HTTP_200_OK
    #     )


@api_view(["GET"])
def get_user(request):
    result = models.get_user("okazaki")
    print("ユーザーデータ")
    print(result)
    return Response(result.name, status=status.HTTP_200_OK)
    # if request.method == "GET":
    #     return Response(
    #         {"message": "Hello function base APIView GET!!"}, status=status.HTTP_200_OK
    #     )