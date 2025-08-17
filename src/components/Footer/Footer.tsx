import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/srushtinb", icon: Github },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/srushtinb/",
      icon: Linkedin,
    },
    { name: "Email", url: "mailto:srushtiicse@gmail.com", icon: Mail },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerContent}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} SRUSHTI N B. All rights reserved.
          </p>

          <div className={styles.socialLinks}>
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={name}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
