import Heroimg from "../../assets/Heroimg.jpg";
import styles from "./HeroStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinDark from "../../assets/linkedindark.svg";
import linkedinlight from "../../assets/linkedinlight.svg"
import githubDark from "../../assets/githubdark.svg";
import githubLight from "../../assets/githublight.svg";
import CV from "../../assets/MonicaMehta.pdf";
import { useTheme } from "../../common/ThemeContext";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinlight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;

  const [text]  = useTypewriter({
    words: ['Full Stack Developer', 'Web Developer', 'SoftWare Developer'],
    loop: {}
  })

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img 
          className={styles.hero}
          src={Heroimg} 
          alt="Profile Image" />
        <img
          className={styles.colorMode} 
          src={themeIcon} 
          alt="Color Mode Icon" 
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Hey, I'm 
           <span className={styles.title}> Monica Mehta</span>
        </h1>
        <h2>
          <span className={styles.roles}>{text}</span><Cursor/>
        </h2>
        <span>
          <a href="https://linkedin.com/in/monica-parth-mehta" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn Logo" />
          </a>
          <a href="https://github.com/Monicamehta12" target="_blank">
            <img src={githubIcon} alt="Github Logo" />
          </a>
        </span>
        <p className={styles.description}>
            Passionate software developer with a focus on building scalable and efficient web applications. Skilled in full-stack development, specializing in MEAN and MERN stacks. Always learning and evolving to create impactful tech solutions.
        </p>
        <a href={CV}>
          <button className={styles.hover} download>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
