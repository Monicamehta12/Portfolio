import React from "react";
import styles from "./Projects.module.css";
import littleShop from "../../assets/littleshop1.png";
import pmsDashboard from "../../assets/pmsDashboard.png";
import portfolio from "../../assets/portfolio.png";
import cyglera from "../../assets/cyglera.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  const projects = [
    {
      src: littleShop,
      link: "https://little-shop-delta.vercel.app/",
      projectName: "Little Shop",
      projectDesc:
        "An online store with static web pages like Home, Products, About us, Contact, Login/Register and Cart. Focusing to show case attractive and responsive UI build using HTML, CSS and Javascript",
      techStack: ["html5", "css3", "javascript"],
      githubLink: "https://github.com/Monicamehta12/LittleShop"
    },
    {
      src: pmsDashboard,
      link: "",
      projectName: "Project Management System",
      projectDesc:
        "A platform for managing projects among employees and managers providing access as per the roles of user.",
      techStack: ["nextjs", "tailwindcss", "typescript", "mongodb"],
      githubLink: "https://github.com/Monicamehta12/ProjectManagementSystem"
    },
    {
      src: portfolio,
      link: "https://monicamehta.vercel.app/",
      projectName: "My Portfolio",
      projectDesc:
        "My portfolio not only highlights my technical skills but also reflects my passion for creating impactful solutions.",
      techStack: ["react", "html5", "css3"],
      githubLink: "https://github.com/Monicamehta12/Portfolio"
    },
    {
      src: cyglera,
      link: "https://drive.google.com/drive/folders/1VcK8SvSxEJSJCAWA-Sf_AZQH2WDifCeL",
      projectName: "Cyglera Market",
      projectDesc:"A specialized Healthcare marketplace and a CRM system for corporate and individual employ.The platform ensures efficient transactions using stripejs and enhances corporate wellness initiatives.",
      techStack: ["angular", "nodejs", "mongodb", "express"],
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projectContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            link={project.link}
            projectName={project.projectName}
            projectDesc={project.projectDesc}
            techStack={project.techStack}
            reverseLayout={index % 2 !== 0} // Alternate layout for odd-indexed projects
            githubLink={project.githubLink}
          />
        ))}
      </div>
      <p>More PROJECTS under PROGRESS..!!</p>
    </section>
  );
}

export default Projects;
