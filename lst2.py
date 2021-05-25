#!C:\Users\Lenovo\AppData\Local\Programs\Python\Python39-32\python.exe
import cgi
import cgitb
import json

cgitb.enable()

class SimpleColorDataType:
	R = 0
	G = 0
	B = 0
    
color = SimpleColorDataType()

color.R = 0
color.G = 100
color.B = 200

colorStr = json.dumps(color.__dict__)

print("Content-Type: application/json")
print()
print(colorStr)