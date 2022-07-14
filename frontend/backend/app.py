# app.py : Default Flask file.
from flask import Flask, render_template
app = Flask(__name__)

# for web scraping
from bs4 import BeautifulSoup

# main page
@app.route("/")
def main():
    return render_template('admin.html')

# announcement
@app.route('/api/announcement')
def announcement():
    data = {
        "author": "Stephen",
        "head": "Welcome to our new app!",
        "msg": "If you're seeing this, it means the backend works and you are on the main page of the app.",
        "urgent": True,
        "show": True
    }
    return data

# just in case
@app.route("/api/upload")
def upload():
    return None

# for getting dictionary entries
@app.route("/api/dictionary")
def dictionary():
    return None

# for getting text-to-speech audio
@app.route("/api/audio")
def audio():
    return None

# main
if __name__ == "__main__":
    app.run(debug=True)