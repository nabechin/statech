import datetime
import traceback

from pynamodb.attributes import (
    ListAttribute,
    MapAttribute,
    NumberAttribute,
    UnicodeAttribute,
)
from pynamodb.indexes import AllProjection, GlobalSecondaryIndex
from pynamodb.models import Model


class UserModel(Model):
    class Meta:
        billing_mode = "PAY_PER_REQUEST"
        table_name = "dev-user"
        region = "ap-northeast-1"

    user_id = UnicodeAttribute(hash_key=True)
    name = UnicodeAttribute()


def get_user(user_id: str) -> str:
    try:
        user = UserModel.get(user_id)
        return user
    except Exception:
        raise


def create_user(user_id: str) -> str:
    try:
        user_model = UserModel(user_id)
        user_model.name = "hiroki"
        user_model.save()
        return user_model.user_id
    except Exception:
        raise