import React from "react";

const Projects = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f7f7f7",
        padding: "20px",
        textAlign: "center",
      }}
    >
       
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h2 style={{ color: "#dc2626", marginBottom: "10px" }}>Password Manager App App</h2>
        <p style={{ marginBottom: "15px" }}>
        Built a full-stack password manager using React, Express, and MongoDB  Implemented REST APIs and CRUD operations for credential management  Designed a responsive frontend with React and Vite 
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <a
            href="https://tahreem217.github.io/password-manager-demo/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px 20px",
              backgroundColor: "#2563eb",
              color: "#fff",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Live Demo
          </a>
          <a
            href= "https://github.com/tahreem217/password-manager.git"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px 20px",
              backgroundColor: "#16a34a",
              color: "#fff",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
