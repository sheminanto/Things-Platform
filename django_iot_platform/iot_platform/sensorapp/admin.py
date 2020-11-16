from django.contrib import admin
from .models import GraphTypeModel, GraphConfigModel, GraphsModel

admin.site.register(GraphTypeModel)
admin.site.register(GraphConfigModel)
admin.site.register(GraphsModel)
