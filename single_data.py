#!C:\Users\Lenovo\AppData\Local\Programs\Python\Python39-32\python.exe
import cgi
import cgitb
import json
from random import random
from random import seed
from random import randrange


cgitb.enable()

class RPY:
    data = 0

rpy = RPY()

rpy.data = randrange(0,360)

rpy_string = json.dumps(rpy.__dict__)
print("Content-Type: application/json")
print()
print(rpy_string)
