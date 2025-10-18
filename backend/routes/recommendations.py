from flask import Blueprint, jsonify
from database import skills

recommendations_bp = Blueprint("recommendations_bp", __name__)

@recommendations_bp.route("/recommendations", methods=["GET"])
def recommend():
    recommendations = []
    if skills:
        last_skill = skills[-1]
        if last_skill["resource"].lower() == "video":
            recommendations = [
                {"name": "Advanced Video Tutorials", "platform": "YouTube"},
                {"name": "Video Mastery Course", "platform": "Udemy"},
            ]
        elif last_skill["resource"].lower() == "course":
            recommendations = [
                {"name": "Next-Level Course on " + last_skill["name"], "platform": "Coursera"},
                {"name": "Related Course", "platform": "Udemy"},
            ]
        else:
            recommendations = [{"name": "General Tutorial for " + last_skill["name"], "platform": "YouTube"}]
    else:
        recommendations = [{"name": "Start with basic tutorials", "platform": "YouTube"}]
    return jsonify(recommendations)
