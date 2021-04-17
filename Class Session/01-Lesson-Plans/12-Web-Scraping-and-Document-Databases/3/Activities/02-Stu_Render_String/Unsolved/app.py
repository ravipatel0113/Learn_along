# import necessary libraries
from flask import Flask, render_template

# create instance of Flask app
app = Flask(__name__)

# Set variables
name = ""
hobby = ""


# create route that renders index.html template
@app.route("/")



# Bonus add a new route
@app.route("/bonus")



if __name__ == "__main__":
    app.run(debug=True)
