import React from "react";

const SkillForm = ({ formData, handleChange, handleAddSkill }) => (
  <form onSubmit={handleAddSkill} style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"15px", marginBottom:"50px", padding:"25px", backgroundColor:"rgba(255,255,255,0.95)", borderRadius:"15px", boxShadow:"0 8px 20px rgba(0,0,0,0.15)" }}>
    <input name="name" value={formData.name} onChange={handleChange} placeholder="Skill Name" required style={{ padding:"10px", borderRadius:"8px", border:"1px solid #ccc" }}/>
    <input name="resource" value={formData.resource} onChange={handleChange} placeholder="Resource Type" required style={{ padding:"10px", borderRadius:"8px", border:"1px solid #ccc" }}/>
    <input name="platform" value={formData.platform} onChange={handleChange} placeholder="Platform" required style={{ padding:"10px", borderRadius:"8px", border:"1px solid #ccc" }}/>
    <input type="number" name="hours" value={formData.hours} onChange={handleChange} placeholder="Hours" style={{ padding:"10px", borderRadius:"8px", border:"1px solid #ccc" }}/>
    <select name="difficulty" value={formData.difficulty} onChange={handleChange} style={{ padding:"10px", borderRadius:"8px", border:"1px solid #ccc" }}>
      <option>Easy</option><option>Medium</option><option>Hard</option>
    </select>
    <select name="status" value={formData.status} onChange={handleChange} style={{ padding:"10px", borderRadius:"8px", border:"1px solid #ccc" }}>
      <option>Started</option><option>In-Progress</option><option>Completed</option>
    </select>
    <input name="notes" value={formData.notes} onChange={handleChange} placeholder="Notes" style={{ padding:"10px", borderRadius:"8px", border:"1px solid #ccc" }}/>
    <button type="submit" style={{ padding:"12px 20px", backgroundColor:"#3498db", color:"#fff", borderRadius:"8px", fontWeight:"bold", cursor:"pointer" }}>Add Skill</button>
  </form>
);

export default SkillForm;
