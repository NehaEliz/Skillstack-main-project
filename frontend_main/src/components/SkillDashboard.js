import React from "react";

const SkillDashboard = ({ skills }) => {
  const countByStatus = status => skills.filter(s => s.status === status).length;
  const averageHours = skills.length === 0 ? 0 : (skills.reduce((sum,s)=>sum+parseFloat(s.hours||0),0)/skills.length).toFixed(1);

  return (
    <div style={{ display:"flex", flexWrap:"wrap", gap:"20px", marginBottom:"50px" }}>
      {["Total Skills","Started","In-Progress","Completed"].map((title,i)=>(
        <div key={i} style={{ flex:"1 1 22%", padding:"20px", backgroundColor:"rgba(255,255,255,0.95)", borderRadius:"15px", textAlign:"center", boxShadow:"0 8px 15px rgba(0,0,0,0.1)", cursor:"default" }}>
          <h3 style={{ color:"#333", marginBottom:"10px" }}>{title}</h3>
          <p style={{ fontSize:"28px", fontWeight:"bold", color: title==="Started"?"#e67e22":title==="In-Progress"?"#f1c40f":title==="Completed"?"#2ecc71":"#3498db" }}>
            {title==="Total Skills"? skills.length : countByStatus(title)}
          </p>
        </div>
      ))}
      <div style={{ flex:"1 1 22%", padding:"20px", backgroundColor:"rgba(255,255,255,0.95)", borderRadius:"15px", textAlign:"center", boxShadow:"0 8px 15px rgba(0,0,0,0.1)" }}>
        <h3 style={{ color:"#333", marginBottom:"10px" }}>Average Hours</h3>
        <p style={{ fontSize:"28px", fontWeight:"bold", color:"#9b59b6" }}>{averageHours}</p>
      </div>
    </div>
  );
};

export default SkillDashboard;
