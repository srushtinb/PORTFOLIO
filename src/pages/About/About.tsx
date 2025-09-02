import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Calendar } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import styles from "./About.module.scss";

const About: React.FC = () => {
  const [profileRef, profileInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [skillsRef, skillsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [experienceRef, experienceInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "React/Next.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB/PostgreSQL", level: 80 },
    { name: "Python/Django", level: 60 },
    { name: "AWS/Docker", level: 50 },
  ];

  // const experiences = [
  //   {
  //     company: "Tech Startup",
  //     position: "Frontend Developer Intern",
  //     duration: "Jun 2023 - Dec 2023",
  //     description:
  //       "Developed responsive web applications using React and TypeScript. Collaborated with the design team to implement pixel-perfect UI components.",
  //     technologies: ["React", "TypeScript", "Tailwind CSS", "Git"],
  //   },
  //   {
  //     company: "Digital Agency",
  //     position: "Fullstack Developer Intern",
  //     duration: "Jan 2024 - Present",
  //     description:
  //       "Built end-to-end web solutions using MERN stack. Optimized application performance and implemented RESTful APIs.",
  //     technologies: ["MongoDB", "Express.js", "React", "Node.js", "AWS"],
  //   },
  // ];

  const education = [
    {
      institution: "Alva's Institute of Engineering and Technology",
      degree: "Computer Science and Engineering",
      duration: "2022 - 2026",
      description: "Focused on software development, DSA, OS and DBMS.",
    },
    {
      degree: "Pre University Course",
      institution: "Siddaganga PU College ",
      duration: "2021 - 2022",
      description:
        "Specialized in science and mathematics, laying the foundation for engineering studies.",
    },
  ];

  return (
    <div className={styles.about}>
      {/* Profile Section */}
      <section className={styles.profile} ref={profileRef}>
        <div className="container">
          <motion.div
            className={styles.profileContent}
            initial={{ opacity: 0, y: 50 }}
            animate={profileInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.profileImage}>
              <img src="/profile.jpeg" alt="profile pic" />
            </div>
            <div className={styles.profileInfo}>
              <h1>SRUSHTI N B</h1>
              <h2>Web Developer | AI Enthusiast</h2>
              <div className={styles.profileMeta}>
                <span className={styles.metaItem}>
                  <MapPin size={16} />
                  Davanagere, Karnataka
                </span>
                <span className={styles.metaItem}>
                  <Calendar size={16} />
                  Open to Opportunities
                </span>
              </div>
              <p className={styles.profileDescription}>
                I'm a passionate web developer with a strong foundation in
                modern web technologies. My journey began with curiosity about
                how websites work, and it has evolved into a deep love for
                creating digital experiences that solve real-world problems. I
                specialize in the MERN stack and Next.js,striving to write
                clean, efficient code that makes a difference.
              </p>
              <div className={styles.socialButtons}>
                <Button
                  variant="primary"
                  href="https://github.com/srushtinb"
                  external
                  icon={<Github size={20} />}
                >
                  GitHub
                </Button>
                <Button
                  variant="primary"
                  href="https://www.linkedin.com/in/srushtinb/"
                  external
                  icon={<Linkedin size={20} />}
                >
                  LinkedIn
                </Button>
                <Button
                  variant="primary"
                  href="mailto:srushtiicse@gmail.com"
                  icon={<Mail size={20} />}
                >
                  Email
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skills} ref={skillsRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className={styles.sectionTitle}>Technical Skills</h3>
            <div className={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={styles.skillItem}
                  initial={{ opacity: 0, x: -50 }}
                  animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <motion.div
                      className={styles.skillProgress}
                      initial={{ width: 0 }}
                      animate={skillsInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={styles.experience} ref={experienceRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className={styles.sectionTitle}>Education</h3>
            {/* internships or expe */}
            {/* <div className={styles.timelineSection}>
              <h4>Internships</h4>
              <div className={styles.timeline}>
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className={styles.timelineItem}
                    initial={{ opacity: 0, x: -50 }}
                    animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Card className={styles.experienceCard}>
                      <div className={styles.cardHeader}>
                        <h5>{exp.position}</h5>
                        <span className={styles.company}>{exp.company}</span>
                        <span className={styles.duration}>{exp.duration}</span>
                      </div>
                      <p className={styles.description}>{exp.description}</p>
                      <div className={styles.technologies}>
                        {exp.technologies.map((tech) => (
                          <span key={tech} className={styles.techTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div> */}

            <div className={styles.timelineSection}>
              {/* <h4>Education</h4> */}
              <div className={styles.timeline}>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className={styles.timelineItem}
                    initial={{ opacity: 0, x: -50 }}
                    animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Card className={styles.educationCard}>
                      <div className={styles.cardHeader}>
                        <h5>{edu.degree}</h5>
                        <span className={styles.institution}>
                          {edu.institution}
                        </span>
                        <span className={styles.duration}>{edu.duration}</span>
                      </div>
                      <p className={styles.description}>{edu.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
