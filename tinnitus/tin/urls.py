from tinnitus.urls import path
from tin import views

app_name = 'tin'

urlpatterns = [
    path('', views.index, name='index'),
    path('mobile', views.mobile, name='mobile'),
]