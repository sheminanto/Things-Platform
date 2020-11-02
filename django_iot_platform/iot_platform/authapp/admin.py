from django.contrib import admin

# Register your models here.
from .models import User
from .forms import CustomUserCreationForm
from django.contrib.auth.admin import UserAdmin


class CustomUserAdmin(UserAdmin):
    model = User
    add_form = CustomUserCreationForm

    fieldsets = (
        *UserAdmin.fieldsets,
        ('User Phone',
            {
                'fields': (
                    'phone',
                ),
            },
         )

    )


admin.site.register(User, CustomUserAdmin)
