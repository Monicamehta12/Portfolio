import React from "react";
import styles from "./ProjectCard.module.css";
import { useTheme } from "./ThemeContext";

function ProjectCard({
  src,
  link,
  projectName,
  projectDesc,
  reverseLayout,
  techStack,
  githubLink,
}) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`${styles.projectList} ${reverseLayout ? styles.reverse : ""}`}
    >
      <div className={styles.imageContainer}>
        <a href={link} target="_blank">
          <img src={src} alt={projectName} />
        </a>
      </div>

      <div className={styles.description}>
        <h3>{projectName}</h3>
        <p>{projectDesc}</p>
        <p>
          <h4>Made With:</h4>
          <ul className={styles.techList}>
            {techStack.map((tech, index) => (
              <li key={index} className={styles.techIcons}>
                {tech === "express" ? (
                  <span
                    className={`devicon-${tech}-original ${
                      theme === "light" ? styles.dark : styles.light
                    }`}
                  ></span>
                ) : (
                  <span
                    className={`devicon-${tech}-plain ${
                      theme === "light" ? styles.dark : styles.light
                    }`}
                  ></span>
                )}
              </li>
            ))}
          </ul>
        </p>
        <a href={githubLink} target="_blank" className={styles.gitlink}>
          Get Code..
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
