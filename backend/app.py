# app.py : Default Flask file.

from flask import Flask
app = Flask(__name__)

from flask_cors import CORS
cors = CORS()

# main page
@app.route("/")
def main():
    pass

# when user searches for dictionary entry (more: scrape_entries.py)
@app.route("/dict/")
def getDictQuery():
    pass

# when user wants to play audio (more: audio.py)
@app.route("/audio/")
def getAudio():
    pass