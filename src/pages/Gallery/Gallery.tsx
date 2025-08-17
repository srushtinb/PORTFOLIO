import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useInView } from "react-intersection-observer";
import styles from "./Gallery.module.scss";
import type { GalleryItem } from "../../types";

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const [headerRef, headerInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [galleryRef, galleryInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      title: "Hackathon Participation",
      image: "/p10.jpeg",
      category: "hackathon",
      description:
        "Participated in the National Level Hackathon at VVCE, Mysore, showcasing innovative problem-solving and teamwork. Collaborated with peers to develop creative solutions and present ideas to industry experts.",
    },
    {
      id: "2",
      title: "Hackathon Participation Certificate",
      image: "/p2.jpeg",
      category: "certificate",
      description:
        "Received certification for participating in the National Level Hackathon at VVCE, Mysore, recognizing my contribution to innovative problem-solving and teamwork ",
    },
    {
      id: "3",
      title: "Computational thinking workshop",
      image: "p7.jpeg",
      category: "workshop",
      description:
        "Conducting a Computational Thinking workshop to introduce students to problem-solving concepts",
    },
    {
      id: "4",
      title: "Teaching Scratch Programming",
      image: "/p5.jpeg",
      category: "workshop",
      description:
        "Teaching Scratch programming to help students learn coding through creativity and fun",
    },
    {
      id: "5",
      title: "CT workshop",
      image: "/p6.jpeg",
      category: "workshop",
      description:
        "Interacting with students and encouraging their participation during the workshop",
    },
    {
      id: "6",
      title: "Codechef Badge",
      image: "/p14.jpeg",
      category: "achievement",
      description:
        "Earned the Diamond Badge from CodeChef for completing a 100-day coding streak, demonstrating consistency and problem-solving skills",
    },
    {
      id: "7",
      title: "MRF-Nitte",
      image: "/p1.jpeg",
      category: "volunteer",
      description:
        "Visited the Material Recovery Facility at Nitte to understand plastic waste management and recovery",
    },
    {
      id: "8",
      title: "Hackathon team",
      image: "/p11.jpeg",
      category: "hackathon",
      description:
        "With my teammates at the National Level Hackathon, collaborating on innovative problem-solving ideas.",
    },
    {
      id: "9",
      title: "Group Picture ",
      image: "/p12.jpeg",
      category: "group",
      description:
        "Group photo with participants at VVCE Mysore Hackathon, celebrating teamwork and shared learning",
    },
    {
      id: "10",
      title: "IOS APP Development Training",
      image: "/p15.jpeg",
      category: "certificate",
      description:
        "Completed iOS App Development training conducted by KSDC, gaining hands-on experience in mobile application development",
    },
    {
      id: "11",
      title: "C-Maniax",
      image: "/p13.jpeg",
      category: "event",
      description:
        "Part of the C Maniax team, where we successfully conducted engaging departmental events - CSE Department",
    },
    {
      id: "12",
      title: "CT Workshop",
      image: "/p4.jpeg",
      category: "workshop",
      description:
        "With students and fellow coordinators after a successful Computational Thinking Workshop session",
    },
    {
      id: "13",
      title: "NSS",
      image: "/p8.jpeg",
      category: "volunteer",
      description:
        "Volunteered through NSS to introduce rural students to fundamental computer skills",
    },
    {
      id: "14",
      title: "PU",
      image: "/p9.jpeg",
      category: "achievement",
      description:
        "Honored with a appreciation trophy in recognition of academic excellence in PU PCMB.",
    },
    {
      id: "15",
      title: "NSS",
      image: "/p16.jpeg",
      category: "volunteer",
      description:
        "Contributed to NSS eco-drive by planting a plant in Shobavana.",
    },
    {
      id: "16",
      title: "College Event",
      image: "/p3.jpeg",
      category: "event",
      description: "With my teammates during college event.",
    },
  ];

  return (
    <div className={styles.gallery}>
      {/* Header Section */}
      <section className={styles.header} ref={headerRef}>
        <div className="container">
          <motion.div
            className={styles.headerContent}
            initial={{ opacity: 0, y: 50 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1>Gallery</h1>
            <p>
              A visual journey through my achievements, certifications,
              hackathons, events, and memorable moments in my development
              career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className={styles.galleryGrid} ref={galleryRef}>
        <div className="container">
          <motion.div
            className={styles.gridContainer}
            initial={{ opacity: 0 }}
            animate={galleryInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.masonryGrid}>
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={styles.galleryItem}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className={styles.imageContainer}>
                    <img src={item.image} alt={item.title} />
                    <div className={styles.overlay}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <span className={styles.category}>{item.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              <img src={selectedImage.image} alt={selectedImage.title} />
              <div className={styles.modalInfo}>
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
                <span className={styles.category}>
                  {selectedImage.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
