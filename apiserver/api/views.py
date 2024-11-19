from django.shortcuts import render
from django.http import JsonResponse

def get_data(request):
    data = {
        'massege':'json response',
        'status' : 'success',
        'data' : {
            'id' : 1,
            'name' : 'dongjin',
            'email' : 'aaaaaa@aaaaa.aaaa'
        }
    }
    return JsonResponse(data, status=200)


# Create your views here.


