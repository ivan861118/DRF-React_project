# import socket
# mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# mysock.connect(('data.pr4e.org',80))
# cmd = 'GET http://data.pr4e.org/romeo.txt HTTP/1.0\n\n'.encode()
# mysock.send(cmd)

# while True:
#     data = mysock.recv(512)
#     if(len(data)<1):
#         break
#     print(data.decode())
# mysock.close()
#====================================
#Readfile from webpage
import urllib.request,urllib.parse, urllib.error
import ssl
ssl._create_default_https_context = ssl._create_unverified_context

# fhand = urllib.request.urlopen('https://mikechen.com')
# for line in fhand:
#     # word = line.decode().split()
#     print(line.decode().strip())
    
#html file are really ugly(lots of mistake) => need beautifulsoup

import json
from bs4 import BeautifulSoup

# url ='https://skyline.tw/activity/explore?category=8,3,10,6,7,2,1&price=2,3&time_filter=created_at_desc'
# html = urllib.request.urlopen(url).read().decode()
# js = json.loads(html)

# soup = BeautifulSoup(html,features="html5lib")
# target = soup.find_all('div',class_="post-title")

# list =[] ##主題
# print("Skyline: ")
# for text in target:
#     list.append(text.get_text("",strip=True))
#=====================================
#Geocode api
##Ignore ssl certificate error
# ctx = ssl.create_default_context()
# ctx.check_hostname = False
# ctx.verify_mode = ssl.CERT_NONE

serviceurl = 'https://maps.googleapis.com/maps/api/geocode/json?'
while True:
    address = input('Enter location url:' )
    if len(address)<1:break

    url = serviceurl+urllib.parse.urlencode({'address':address})
    html = urllib.request.urlopen(url).read().decode()
    print(html)

    try:
        js = json.loads(html)
    except:
        js = None
        
    print(json.dumps(js,indent=4))

# data = '''{

# }'''##use [] is we want list

# info = json.loads(data) ##info is a dict