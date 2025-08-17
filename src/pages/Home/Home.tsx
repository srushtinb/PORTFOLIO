import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Button from "../../components/Button/Button";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [introRef, introInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero} ref={heroRef}>
        <div className="container">
          <div className={styles.heroContent}>
            <motion.div
              className={styles.heroText}
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h1 className={styles.heroTitle}>
                Hi, I'm <span className={styles.highlight}>SRUSHTI N B</span>
              </h1>
              <h2 className={styles.heroSubtitle}>Fullstack Developer</h2>
              <p className={styles.heroDescription}>
                Computer Science Engineer | Full-Stack Developer | AI Enthusiast
                | Passionate about Creating Innovative Web Applications
              </p>
              <div className={styles.heroButtons}>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate("/work")}
                  icon={<ArrowRight size={20} />}
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="/Srushti N B.pdf"
                  external
                  icon={<Download size={20} />}
                >
                  Download RESUME
                </Button>
              </div>
            </motion.div>
            <motion.div
              className={styles.heroImage}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={styles.imageWrapper}>
                <img
                  src="../../images/profile.jpeg"
                  alt="profile pic"
                  className={styles.profileImage}
                />
                <div className={styles.imageBorder}></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.introduction} ref={introRef}>
        <div className="container">
          <motion.div
            className={styles.introContent}
            initial={{ opacity: 0, y: 50 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.introText}>
              <h3>About Me</h3>
              <p>
                I'm a passionate fullstack developer with expertise in the MERN
                stack and Next.js. I love turning complex problems into simple,
                beautiful, and intuitive solutions. When I'm not coding, you'll
                find me exploring new technologies, contributing to open source,
                or sharing knowledge with the developer community.
              </p>
              <Button
                variant="primary"
                onClick={() => navigate("/about")}
                icon={<ArrowRight size={20} />}
              >
                See More About Me
              </Button>
            </div>
            <div className={styles.introStats}>
              {/* <div className={styles.stat}>
                <div className={styles.statNumber}>3+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div> */}
              {/* <div className={styles.stat}>
                <div className={styles.statNumber}>15+</div>
                <div className={styles.statLabel}>Projects Completed</div>
              </div> */}
              {/* <div className={styles.stat}>
                <div className={styles.statNumber}>5+</div>
                <div className={styles.statLabel}>Technologies</div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
