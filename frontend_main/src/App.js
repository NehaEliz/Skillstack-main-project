import React, { useState, useEffect } from "react";
import axios from "axios";
import ImportCourse from "./components/ImportCourse";
import SkillForm from "./components/SkillForm";
import SkillDashboard from "./components/SkillDashboard";
import SkillList from "./components/SkillList";
import SkillGraph from "./components/SkillGraph";
import Recommendations from "./components/Recommendations";

const App = () => {
  const [skills, setSkills] = useState([]);
  const [formData, setFormData] = useState({ name:"", resource:"", platform:"", hours:"", difficulty:"Easy", status:"Started", notes:"" });
  const [editingSkillId, setEditingSkillId] = useState(null);
  const [editData, setEditData] = useState({});
  const [recommendations, setRecommendations] = useState([]);

  const API_URL = "http://127.0.0.1:5000/skills";

  useEffect(() => {
    fetchSkills();
    fetchRecommendations();
  }, []);

  const fetchSkills = () => axios.get(API_URL).then(res => setSkills(res.data));
  const fetchRecommendations = () => axios.get("http://127.0.0.1:5000/recommendations").then(res => setRecommendations(res.data));

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleEditChange = e => setEditData({ ...editData, [e.target.name]: e.target.value });

  const handleAddSkill = e => {
    e.preventDefault();
    if (!formData.name || !formData.resource || !formData.platform) return;
    axios.post(API_URL, formData).then(() => {
      fetchSkills();
      fetchRecommendations();
      setFormData({ name:"", resource:"", platform:"", hours:"", difficulty:"Easy", status:"Started", notes:"" });
    });
  };

  const startEditing = skill => { setEditingSkillId(skill.id); setEditData({ ...skill }); };
  const saveEdit = id => axios.put(`${API_URL}/${id}`, editData).then(() => { setEditingSkillId(null); fetchSkills(); fetchRecommendations(); });
  const deleteSkill = id => axios.delete(`${API_URL}/${id}`).then(() => fetchSkills());

  return (
    <div style={{ maxWidth:"1400px", margin:"0 auto", padding:"40px", fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#8d988d", minHeight:"100vh", color:"#333" }}>
      <h1 style={{ textAlign:"center", color:"#fff", marginBottom:"50px", fontSize:"3rem", textShadow:"2px 2px 5px rgba(0,0,0,0.3)" }}>SkillStack Tracker</h1>

      <ImportCourse fetchSkills={fetchSkills} fetchRecommendations={fetchRecommendations} API_URL={API_URL} />
      <SkillForm formData={formData} handleChange={handleChange} handleAddSkill={handleAddSkill} />
      <h2 style={{ color:"#fff", marginBottom:"20px", fontSize:"2rem" }}>Dashboard</h2>
      <SkillDashboard skills={skills} />
      <SkillList skills={skills} editingSkillId={editingSkillId} editData={editData} startEditing={startEditing} saveEdit={saveEdit} handleEditChange={handleEditChange} deleteSkill={deleteSkill} />
      <h2 style={{color:"#fff", marginBottom:"20px"}}>Hours per Skill</h2>
      <SkillGraph skills={skills} />
      
    </div>
  );
};

export default App;
