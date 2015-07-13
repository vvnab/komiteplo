#  -*- coding: utf-8 -*- 
from django.contrib.flatpages.models import FlatPage
import yaml

def context(request):
    pages = FlatPage.objects.all().exclude(url='/')
    path = request.path.split('/')[1]
    config = yaml.load(FlatPage.objects.get(url = '/').content)
    return {'request': request, 'path': '/%s/' % path, 'pages': pages, 'config': config}
