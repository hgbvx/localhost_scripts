#!C:\Users\Lenovo\AppData\Local\Programs\Python\Python39-32\python.exe
import cgi
import cgitb

cgitb.enable()

print("Content-Type: text/html")
print()
print("<TITLE>CGI script output</TITLE>")
print("<H1>This is my first CGI script</H1>")

print("Hello, world!")

userData = cgi.FieldStorage()

print("Argument 1: ",userData["arg1"].value)
print("Argument 2: ",userData["arg2"].value)