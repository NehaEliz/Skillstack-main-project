import React from "react";

const SkillList = ({ skills, editingSkillId, editData, startEditing, saveEdit, handleEditChange, deleteSkill }) => {
  const getProgress = skill => skill.status==="Completed"?100:skill.status==="In-Progress"?50:25;

  return (
    <ul style={{ listStyle:"none", padding:0, marginBottom:"50px" }}>
      {skills.map(skill => (
        <li key={skill.id} style={{ backgroundColor:"rgba(255,255,255,0.95)", padding:"18px", marginBottom:"12px", borderRadius:"12px", boxShadow:"0 6px 15px rgba(0,0,0,0.1)", transition:"transform 0.2s", cursor:"pointer" }}
            onMouseEnter={e=>e.currentTarget.style.transform="scale(1.02)"} onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}>
          {editingSkillId===skill.id ? (
            <div style={{ display:"flex", gap:"10px", flexWrap:"wrap" }}>
              <input name="name" value={editData.name} onChange={handleEditChange} />
              <input name="resource" value={editData.resource} onChange={handleEditChange} />
              <input name="platform" value={editData.platform} onChange={handleEditChange} />
              <input type="number" name="hours" value={editData.hours} onChange={handleEditChange} />
              <select name="difficulty" value={editData.difficulty} onChange={handleEditChange}><option>Easy</option><option>Medium</option><option>Hard</option></select>
              <select name="status" value={editData.status} onChange={handleEditChange}><option>Started</option><option>In-Progress</option><option>Completed</option></select>
              <input name="notes" value={editData.notes} onChange={handleEditChange} />
              <button onClick={()=>saveEdit(skill.id)} style={{ backgroundColor:"#2ecc71", color:"#fff", borderRadius:"6px", padding:"6px 12px" }}>Save</button>
            </div>
          ) : (
            <>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"10px" }}>
                <span><strong>{skill.name}</strong> - {skill.resource} on {skill.platform} | {skill.hours} hrs | {skill.difficulty} | {skill.status} {skill.notes && `| Notes: ${skill.notes}`}</span>
                <div>
                  <button onClick={()=>startEditing(skill)} style={{ backgroundColor:"#3498db", color:"#fff", borderRadius:"6px", padding:"6px 12px", marginRight:"6px" }}>Edit</button>
                  <button onClick={()=>deleteSkill(skill.id)} style={{ backgroundColor:"#e74c3c", color:"#fff", borderRadius:"6px", padding:"6px 12px" }}>Delete</button>
                </div>
              </div>
              <div style={{ backgroundColor:"#ddd", borderRadius:"8px", overflow:"hidden", height:"16px" }}>
                <div style={{ width:`${getProgress(skill)}%`, backgroundColor: skill.status==="Completed"?"#2ecc71":skill.status==="In-Progress"?"#f1c40f":"#e67e22", height:"100%" }} />
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
