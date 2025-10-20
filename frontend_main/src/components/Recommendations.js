import React from "react";

const Recommendations = ({ recommendations }) => (
  <>
    <h2 style={{color:"#fff", marginBottom:"15px"}}>Recommended Resources</h2>
    <ul style={{ listStyle:"none", padding:0, marginBottom:"50px" }}>
      {recommendations.map((rec, idx)=>(
        <li key={idx} style={{ backgroundColor:"rgba(255,255,255,0.9)", marginBottom:"12px", padding:"12px", borderRadius:"8px", boxShadow:"0 4px 12px rgba(0,0,0,0.08)" }}>
          {rec.name} - <strong>{rec.platform}</strong>
        </li>
      ))}
      {recommendations.length===0 && <p style={{color:"#fff"}}>No recommendations yet.</p>}
    </ul>
  </>
);

export default Recommendations;
