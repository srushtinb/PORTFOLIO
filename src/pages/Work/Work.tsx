import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import styles from './Work.module.scss';
import type { Project } from '../../types';

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
      id: '1',
      title: 'PrepGen – AI Career Coach',
      description: 'An intelligent career coaching platform that uses AI to help users prepare for interviews, build resumes, and advance their careers. Built with Next.js, TypeScript, and OpenAI API.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Prisma'],
      liveUrl: 'https://prepgen.example.com',
      githubUrl: 'https://github.com/username/prepgen',
      caseStudyUrl: '/case-study/prepgen',
      featured: true,
    },
    {
      id: '2',
      title: 'IT Inventory Management',
      description: 'A comprehensive inventory management system for IT assets. Features include asset tracking, maintenance scheduling, and reporting dashboard. Built with MERN stack.',
      image: 'https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
      liveUrl: 'https://it-inventory.example.com',
      githubUrl: 'https://github.com/username/it-inventory',
      caseStudyUrl: '/case-study/it-inventory',
      featured: true,
    },
    {
      id: '3',
      title: 'Task Management App',
      description: 'A modern task management application with real-time collaboration features. Users can create projects, assign tasks, and track progress with an intuitive interface.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      liveUrl: 'https://taskmanager.example.com',
      githubUrl: 'https://github.com/username/task-manager',
      featured: false,
    },
    {
      id: '4',
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard. Responsive design for optimal shopping experience.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma', 'AWS S3'],
      liveUrl: 'https://ecommerce.example.com',
      githubUrl: 'https://github.com/username/ecommerce',
      featured: false,
    },
    {
      id: '5',
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard with location-based forecasts, historical data visualization, and severe weather alerts. Clean and intuitive user interface.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'OpenWeather API', 'SCSS'],
      liveUrl: 'https://weather-dashboard.example.com',
      githubUrl: 'https://github.com/username/weather-dashboard',
      featured: false,
    },
    {
      id: '6',
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills. Built with performance and accessibility in mind, featuring smooth animations.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'SCSS', 'Framer Motion'],
      liveUrl: 'https://portfolio.example.com',
      githubUrl: 'https://github.com/username/portfolio',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

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
            <h1>My Work</h1>
            <p>
              Here's a collection of projects I've worked on, ranging from web applications
              to mobile apps. Each project represents a unique challenge and learning experience
              that has shaped my skills as a developer.
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
                transition={{ duration: 0.6, delay: (index + featuredProjects.length) * 0.1 }}
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