from flask import Blueprint, jsonify, request
from database import skills, next_id

skills_bp = Blueprint("skills_bp", __name__)

@skills_bp.route("/skills", methods=["GET"])
def get_skills():
    return jsonify(skills)

@skills_bp.route("/skills", methods=["POST"])
def add_skill():
    global next_id
    data = request.json
    data["id"] = next_id
    next_id += 1
    data.setdefault("start_date", "")
    data.setdefault("end_date", "")
    skills.append(data)
    return jsonify(data)

@skills_bp.route("/skills/<int:skill_id>", methods=["PUT"])
def update_skill(skill_id):
    data = request.json
    for i, skill in enumerate(skills):
        if skill["id"] == skill_id:
            skills[i] = data
            skills[i]["id"] = skill_id
            return jsonify(skills[i])
    return jsonify({"error": "Skill not found"}), 404

@skills_bp.route("/skills/<int:skill_id>", methods=["DELETE"])
def delete_skill(skill_id):
    global skills
    skills = [s for s in skills if s["id"] != skill_id]
    return jsonify({"message": "Deleted"})
