from flask import Flask
from flask_cors import CORS

from routes.skills import skills_bp
from routes.recommendations import recommendations_bp
from routes.import_course import import_course_bp

app = Flask(__name__)
CORS(app)

# Register Blueprints
app.register_blueprint(skills_bp)
app.register_blueprint(recommendations_bp)
app.register_blueprint(import_course_bp)

if __name__ == "__main__":
    app.run(debug=True)
