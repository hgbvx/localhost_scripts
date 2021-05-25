#!C:\Users\Lenovo\AppData\Local\Programs\Python\Python39-32\python.exe
import cgi
import cgitb
import json

cgitb.enable()


class Parameter:
    id = 0
    name = 0
    value = 0
    type = 0
    

class Type:
    type_float = 0.0
    type_int = 0
    

obiekt = Parameter()
obiekt.id = "0001"
obiekt.name = "testowa"
obiekt.value = 7.5
obiekt.type = Type.type_float

parStr = json.dumps(obiekt.__dict__)
print("Content-Type: application/json")
print()
print(parStr)

file = open('id.txt','w')
file.write(parStr)
file.close()
