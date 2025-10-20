import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const SkillGraph = ({ skills }) => (
  <div style={{ width:"100%", height:350, backgroundColor:"rgba(255,255,255,0.95)", borderRadius:"15px", padding:"15px", marginBottom:"50px", boxShadow:"0 8px 20px rgba(0,0,0,0.15)" }}>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={skills}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="hours" fill="#3498db" radius={[5,5,0,0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default SkillGraph;
