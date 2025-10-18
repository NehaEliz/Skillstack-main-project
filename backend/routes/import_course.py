from flask import Blueprint, request, jsonify
from database import skills, next_id
from utils.scraper import scrape_course_metadata

import_course_bp = Blueprint("import_course_bp", __name__)

@import_course_bp.route("/import-course", methods=["POST"])
def import_course():
    global next_id
    data = request.json
    url = data.get("url", "")
    course = scrape_course_metadata(url)

    course_data = {
        "id": next_id,
        "name": course["name"],
        "resource": "Course",
        "platform": course["platform"],
        "hours": "",
        "difficulty": "Medium",
        "status": "Started",
        "notes": course["description"],
        "start_date": "",
        "end_date": ""
    }
    next_id += 1
    skills.append(course_data)
    return jsonify(course_data)
    