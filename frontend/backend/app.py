# app.py : Default Flask file.
from flask import Flask, render_template
app = Flask(__name__)

# for web scraping
from bs4 import BeautifulSoup

# main page
@app.route("/")
@app.route("/home")
def main():
    return render_template('admin.html')

# announcement
@app.route('/announcement')
def announcement():
    data = {
        "author": "Stephen",
        "head": "Welcome to our new app!",
        "msg": "This is a test message",
        "urgent": False,
        "show": True
    }
    return data

# just in case
@app.route("/upload")
def upload():
    return None

# for getting dictionary entries
@app.route("/dictionary")
def dictionary():
    return None

# for getting text-to-speech audio
@app.route("/audio")
def audio():
    return None

# main
if __name__ == "__main__":
    app.run(debug=True)