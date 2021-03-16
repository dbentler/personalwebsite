from flask import Flask, render_template
from flask_bootstrap import Bootstrap
from flask_nav import Nav
from flask_nav.elements import Navbar, Subgroup, View, Link, Text, Separator

app = Flask(__name__)

#nav = Nav(app) # Navbar baby

#nav.register_element('my_navbar', # Name of Navbar
#                     Navbar('thenav', # Navbar for html reference
#                     View('Home', 'home'), # View function :: View(<Text displayed>, <link that passthroughs to @app.route>)
#                     View('About Me', 'about')))



@app.route("/") # Listens for <website>/<subpage>
def home(): # Function that is ran when <link>/<subpage> is true
    return render_template("home.html") # Renders HTML file appropiate for the required subpage.

# This process is than repeated .
@app.route("/about")
def about():
    return render_template("about.html")

#nav.init_app(app)
if __name__ == "__main__":
    app.run(debug=True)
