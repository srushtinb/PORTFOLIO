import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import styles from "./Work.module.scss";
import type { Project } from "../../types";

const Work: React.FC = () => {
  const [headerRef, headerInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [projectsRef, projectsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects: Project[] = [
    {
      id: "1",
      title: "PrepGenius – AI Career Coach (ONGOING)",
      description:
        "An intelligent career coaching platform that uses AI to help users prepare for interviews, build resumes, and advance their careers. Built with Next.js, TypeScript, and OpenAI API.",
      image: "/prepgenius.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "OpenAI API",
        "Tailwind CSS",
        "Prisma",
        "Neon DB",
      ],
      liveUrl: "https://prepgen.example.com",
      githubUrl: "https://github.com/username/prepgen",
      //caseStudyUrl: "/casestudy/prepgen",
      featured: true,
    },
    {
      id: "2",
      title: "SruAura-An Interior Design Website",
      description:
        "SruAura, which offers interior design solutions for homes. The website provides various features such as design ideas, booking quotes, and information about the company. It is built using HTML, CSS, and JavaScript.",
      image: "/sruaura.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
      liveUrl: "https://srushtinb.github.io/SruAura/",
      githubUrl: "https://github.com/srushtinb/SruAura",
      //caseStudyUrl: "/case-study/it-inventory",
      featured: true,
    },
    {
      id: "3",
      title: "SruNova-ChatBot",
      description:
        "A command-line based AI chatbot that enables seamless and intelligent conversations directly from the terminal. Built with Node.js and OpenAI API integration, it’s lightweight, fast, and customizable for different use cases.",
      image: "/chatbot.jpeg",
      technologies: ["JavaScript", "Gemini API", "Node.js"],
      //liveUrl: "https://ecommerce.example.com",
      githubUrl: "https://github.com/srushtinb/SruNova-ChatBot",
      featured: false,
    },
    {
      id: "4",
      title: "To-Do List",
      description:
        "This is a simple To-Do List web application built with HTML, CSS, and JavaScript. It allows users to add, remove, and mark tasks as completed. This project helps users keep track of their tasks in a clean and easy-to-use interface.",
      image: "/todo.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://srushtinb.github.io/To-Do/",
      githubUrl: "https://github.com/srushtinb/To-Do",
      featured: false,
    },
    {
      id: "5",
      title: "Employee Management System",
      description:
        "An Employee Management System built with React for managing employees and their assigned tasks. It includes features for adding, deleting employees, and managing tasks (New, Completed, Failed) with local storage persistence.",
      image: "/emp.png",
      technologies: [
        "React",
        "React Context API",
        "Tailwind CSS",
        "Local Storage",
      ],
      liveUrl: "https://employee-management-system-ten-olive.vercel.app/",
      githubUrl: "https://github.com/srushtinb/Employee-Management-System",
      featured: false,
    },
    // {
    //   id: "6",
    //   title: "Portfolio Website",
    //   description:
    //     "A modern, responsive portfolio website showcasing projects and skills. Built with performance and accessibility in mind, featuring smooth animations.",
    //   image:
    //     "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   technologies: ["React", "TypeScript", "SCSS", "Framer Motion"],
    //   liveUrl: "https://portfolio.example.com",
    //   githubUrl: "https://github.com/username/portfolio",
    //   featured: false,
    // },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className={styles.work}>
      {/* Header Section */}
      <section className={styles.header} ref={headerRef}>
        <div className="container">
          <motion.div
            className={styles.headerContent}
            initial={{ opacity: 0, y: 50 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1>Projects</h1>
            <p>
              Here's a collection of projects I've worked on,Each project
              represents a unique challenge and learning experience that has
              shaped my skills as a developer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={styles.featuredProjects} ref={projectsRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <div className={styles.projectsGrid}>
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className={styles.projectCard}>
                    <div className={styles.projectImage}>
                      <img src={project.image} alt={project.title} />
                      <div className={styles.projectOverlay}>
                        <div className={styles.projectActions}>
                          {project.liveUrl && (
                            <Button
                              variant="primary"
                              size="sm"
                              href={project.liveUrl}
                              external
                              icon={<ExternalLink size={16} />}
                            >
                              Live Demo
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              href={project.githubUrl}
                              external
                              icon={<Github size={16} />}
                            >
                              Code
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className={styles.projectContent}>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className={styles.projectTech}>
                        {project.technologies.map((tech) => (
                          <span key={tech} className={styles.techTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.caseStudyUrl && (
                        <Button
                          variant="secondary"
                          size="sm"
                          href={project.caseStudyUrl}
                          icon={<ArrowRight size={16} />}
                          className={styles.caseStudyButton}
                        >
                          Read Case Study
                        </Button>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Projects */}
      <section className={styles.otherProjects}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Other Projects</h2>
          <div className={styles.projectsGrid}>
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: (index + featuredProjects.length) * 0.1,
                }}
              >
                <Card className={styles.projectCard}>
                  <div className={styles.projectImage}>
                    <img src={project.image} alt={project.title} />
                    <div className={styles.projectOverlay}>
                      <div className={styles.projectActions}>
                        {project.liveUrl && (
                          <Button
                            variant="primary"
                            size="sm"
                            href={project.liveUrl}
                            external
                            icon={<ExternalLink size={16} />}
                          >
                            Live Demo
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            href={project.githubUrl}
                            external
                            icon={<Github size={16} />}
                          >
                            Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.projectContent}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className={styles.projectTech}>
                      {project.technologies.map((tech) => (
                        <span key={tech} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
