import React from "react";
import styles from "./Skills.module.css";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section id="skills" className={styles.container}>
      <h1 className={styles.title}>Skills</h1>
      <ul className={styles.skillsContainer}>
        <li className={styles.skillsTitle}>
          {theme === "light" ? (
            <span className={`devicon-html5-plain ${styles.dark}`}></span>
          ) : (
            <span className={`devicon-html5-plain ${styles.light}`}></span>
          )}
          <p>HTML</p>
        </li>
        <li className={styles.skillsTitle}>
          {theme === "light" ? (
            <span className={`devicon-css3-plain ${styles.dark}`}></span>
          ) : (
            <span className={`devicon-css3-plain ${styles.light}`}></span>
          )}
          <p>CSS</p>
        </li>
        <li className={styles.skillsTitle}>
          {theme === "light" ? (
            <span className={`devicon-javascript-plain ${styles.dark}`}></span>
          ) : (
            <span className={`devicon-javascript-plain ${styles.light}`}></span>
          )}
          <p>JAVASCRIPT</p>
        </li>
        <li className={styles.skillsTitle}>
          {theme === "light" ? (
            <span className={`devicon-bootstrap-plain ${styles.dark}`}></span>
          ) : (
            <span className={`devicon-bootstrap-plain ${styles.light}`}></span>
          )}
          <p>BOOTSTRAP</p>
        </li>
        <li className={styles.skillsTitle}>
          {theme === "light" ? (
            <span className={`devicon-tailwindcss-original ${styles.dark}`}></span>
          ) : (
            <span className={`devicon-tailwindcss-original ${styles.light}`}></span>
          )}
          <p>TAILWIND CSS</p>
        </li>
        <li className={styles.skillsTitle}>
          {theme === "light" ? (
            <span className={`devicon-react-original ${styles.dark}`}></span>
          ) : (
            <span className={`devicon-react-original ${styles.light}`}></span>
          )}
          <p>REACT</p>
        </li>
        <li className={styles.skillsTitle}>
          {theme === "light" ? (
            <span className={`devicon-typescript-plain ${styles.dark}`}></span>
          ) : (
            <span className={`devicon-typescript-plain ${styles.light}`}></span>
          )}
          <p>TYPESCRIPT</p>
        </li>
        <li className={styles.skillsTitle}>
          {theme === "light" ? (
            <span className={`devicon-angular-plain ${styles.dark}`}></span>
          ) : (
            <span className={`devicon-angular-plain ${styles.light}`}></span>
          )}
          <p>ANGULAR</p>
        </li>
        <li className={styles.skillsTitle}>
          {theme === "light" ? (
            <span className={`devicon-nodejs-plain ${styles.dark}`}></span>
          ) : (
            <span className={`devicon-nodejs-plain ${styles.light}`}></span>
          )}
          <p>NODEJS</p>
        </li>
        <li className={styles.skillsTitle}>
          {theme === "light" ? (
            <span className={`devicon-express-original ${styles.dark}`}></span>
          ) : (
            <span className={`devicon-express-original ${styles.light}`}></span>
          )}
          <p>EXPRESS</p>
        </li>
        <li className={styles.skillsTitle}>
          {theme === "light" ? (
            <span className={`devicon-nextjs-original-wordmark ${styles.dark}`}></span>
          ) : (
            <span className={`devicon-nextjs-original-wordmark ${styles.light}`}></span>
          )}
          <p>NEXT.JS</p>
        </li>
        <li className={styles.skillsTitle}>
          {theme === "light" ? (
            <span className={`devicon-mongodb-plain ${styles.dark}`}></span>
          ) : (
            <span className={`devicon-mongodb-plain ${styles.light}`}></span>
          )}
          <p>MONGODB</p>
        </li>
        <li className={styles.skillsTitle}>
          {theme === "light" ? (
            <span className={`devicon-mysql-original ${styles.dark}`}></span>
          ) : (
            <span className={`devicon-mysql-original ${styles.light}`}></span>
          )}
          <p>MYSQL</p>
        </li>
        <li className={styles.skillsTitle}>
          {theme === "light" ? (
            <span className={`devicon-github-original ${styles.dark}`}></span>
          ) : (
            <span className={`devicon-github-original ${styles.light}`}></span>
          )}
          <p>GITHUB</p>
        </li>
        <li className={styles.skillsTitle}>
          {theme === "light" ? (
            <span className={`devicon-postman-plain ${styles.dark}`}></span>
          ) : (
            <span className={`devicon-postman-plain ${styles.light}`}></span>
          )}
          <p>GITHUB</p>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
