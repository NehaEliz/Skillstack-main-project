import React, { useState } from "react";
import axios from "axios";

const ImportCourse = ({ fetchSkills, fetchRecommendations, API_URL }) => {
  const [courseUrl, setCourseUrl] = useState("");
  const [importedCourse, setImportedCourse] = useState(null);

  const handleImportCourse = async () => {
    if (!courseUrl) return;
    try {
      const res = await axios.post("http://127.0.0.1:5000/import-course", { url: courseUrl });
      setImportedCourse(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to import course");
    }
  };

  const handleAddImportedCourse = () => {
    if (!importedCourse) return;
    const data = {
      name: importedCourse.name,
      resource: "Course",
      platform: importedCourse.platform,
      hours: "",
      difficulty: "Easy",
      status: "Started",
      notes: importedCourse.description
    };
    axios.post(API_URL, data).then(() => {
      fetchSkills();
      fetchRecommendations();
      setImportedCourse(null);
      setCourseUrl("");
    });
  };

  return (
    <div style={{ marginBottom:"50px", padding:"25px", backgroundColor:"rgba(255,255,255,0.95)", borderRadius:"15px", boxShadow:"0 8px 20px rgba(0,0,0,0.15)" }}>
      <h3 style={{ marginBottom:"15px", color:"#333", fontSize:"1.4rem" }}>Import Course from URL</h3>
      <div style={{ display:"flex", gap:"15px", flexWrap:"wrap" }}>
        <input
          value={courseUrl}
          onChange={e=>setCourseUrl(e.target.value)}
          placeholder="Paste course URL here"
          style={{ padding:"12px", flex:"1", borderRadius:"8px", border:"1px solid #ccc", fontSize:"1rem" }}
        />
        <button onClick={handleImportCourse} style={{ padding:"12px 20px", borderRadius:"8px", backgroundColor:"#3498db", color:"#fff", fontWeight:"bold", cursor:"pointer" }}>
          Import
        </button>
      </div>

      {importedCourse && (
        <div style={{ marginTop:"20px", padding:"15px", borderRadius:"8px", backgroundColor:"#f9f9f9", border:"1px solid #ddd" }}>
          <strong style={{ fontSize:"1.1rem" }}>{importedCourse.name}</strong> ({importedCourse.platform})
          {importedCourse.description && <p style={{ marginTop:"8px", color:"#555" }}>{importedCourse.description}</p>}
          <button onClick={handleAddImportedCourse} style={{ padding:"8px 14px", borderRadius:"8px", backgroundColor:"#2ecc71", color:"#fff", cursor:"pointer", marginTop:"10px" }}>
            Add to Skills
          </button>
        </div>
      )}
    </div>
  );
};

export default ImportCourse;
