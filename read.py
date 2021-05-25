#!C:\Users\Lenovo\AppData\Local\Programs\Python\Python39-32\python.exe
import cgi
import cgitb
import os

cgitb.enable()

print("Content-Type: text/html")
print()
print("<TITLE>Odczyt z pliku</TITLE>")


x = [f for f in os.listdir('C:\localhost\pliki') if os.path.isfile(os.path.join('C:\localhost\pliki',f))]

print(x)

print('<br>')
print('<br>')


f = open('pliki\plik1.txt','r')
for e in f:
    print(e)
    print('<br>')

print('<br>')


f = open('pliki\plik2.txt','r')
for e in f:
    print(e)
    print('<br>')

print('<br>')

f = open('pliki\plik3.txt','r')
for e in f:
    print(e)
    print('<br>')
