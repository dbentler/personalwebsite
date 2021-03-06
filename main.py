from db_utils import *

from flask import Flask, render_template
from flask_misaka import Misaka

app = Flask(__name__)
Misaka(app, fenced_code=True)


@app.route("/") # Listens for <website>/<subpage>
def home(): # Function that is ran when <link>/<subpage> is true
    return render_template("home.html") # Renders HTML file appropiate for the required subpage.

@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404
# This process is than repeated .
@app.route("/about")
def about():
    content = renderMarkdown("markdown/about.md")
    return render_template("about.html", text=content)

@app.route("/projects")
def projects():
    return render_template("projects.html")

@app.route("/projects/lw-network")
def lwnetwork():
    content = renderMarkdown("markdown/lw-network.md")
    return render_template("lw-network.html", text=content)

@app.route("/projects/construction")
def construction():
    return render_template("construction.html")

@app.route("/projects/mywebsite")
def mywebsite():
    return render_template("mywebsite.html")

@app.route("/projects/nyc-gtfs-render")
def nycGTFS():
    content = renderMarkdown("markdown/nyc-gtfs.md")
    return render_template("nyc-gtfs-render.html", text=content)

@app.route("/projects/crypto")
def crypto():
    content = renderMarkdown("markdown/crypto.md")
    return render_template("crypto.html", text=content)

@app.route("/qna")
def qna():
    return render_template("qna.html")

@app.route("/qna/personal")
def qnapersonal():
    return render_template("qnapersonal.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/test")
def test():
    content = renderMarkdown("markdown/test.md")
    return render_template("test.html", text=content)

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=8080, debug=True)
