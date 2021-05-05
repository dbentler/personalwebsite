from flask import Flask, render_template
from flask_bootstrap import Bootstrap

app = Flask(__name__)


@app.route("/") # Listens for <website>/<subpage>
def home(): # Function that is ran when <link>/<subpage> is true
    return render_template("home.html") # Renders HTML file appropiate for the required subpage.

# This process is than repeated .
@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/projects")
def projects():
    return render_template("projects.html")

@app.route("/projects/construction")
def construction():
    return render_template("construction.html")

@app.route("/projects/mywebsite")
def mywebsite():
    return render_template("mywebsite.html")

if __name__ == "__main__":
    app.run(debug=True)
