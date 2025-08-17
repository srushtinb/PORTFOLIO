import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Filter } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Button from '../../components/Button/Button';
import styles from './Gallery.module.scss';
import type { GalleryItem } from '../../types';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
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
      id: '1',
      title: 'AWS Cloud Practitioner Certificate',
      image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'certificate',
      description: 'Certified AWS Cloud Practitioner - Foundation level certification'
    },
    {
      id: '2',
      title: 'React Developer Certificate',
      image: 'https://images.pexels.com/photos/5940722/pexels-photo-5940722.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'certificate',
      description: 'Advanced React development certification'
    },
    {
      id: '3',
      title: 'Tech Hackathon 2024',
      image: 'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'hackathon',
      description: 'Won 2nd place in the annual tech hackathon'
    },
    {
      id: '4',
      title: 'Coding Bootcamp Graduation',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'achievement',
      description: 'Graduated from intensive coding bootcamp'
    },
    {
      id: '5',
      title: 'Tech Conference 2023',
      image: 'https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'event',
      description: 'Attended React Conference 2023'
    },
    {
      id: '6',
      title: 'Development Team',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'group',
      description: 'Team photo from software development internship'
    },
    {
      id: '7',
      title: 'Node.js Certificate',
      image: 'https://images.pexels.com/photos/5940724/pexels-photo-5940724.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'certificate',
      description: 'Node.js and Express.js certification'
    },
    {
      id: '8',
      title: 'AI/ML Hackathon',
      image: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'hackathon',
      description: 'Participated in AI/ML focused hackathon'
    },
    {
      id: '9',
      title: 'Open Source Contribution',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'achievement',
      description: 'First major open source contribution accepted'
    },
    {
      id: '10',
      title: 'University Tech Fair',
      image: 'https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'event',
      description: 'Presenting project at university tech fair'
    },
    {
      id: '11',
      title: 'Study Group',
      image: 'https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'group',
      description: 'Weekly coding study group sessions'
    },
    {
      id: '12',
      title: 'Best Project Award',
      image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'achievement',
      description: 'Received best project award for final year project'
    },
  ];

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'certificate', label: 'Certificates' },
    { key: 'hackathon', label: 'Hackathons' },
    { key: 'event', label: 'Events' },
    { key: 'group', label: 'Group Photos' },
    { key: 'achievement', label: 'Achievements' },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

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
              A visual journey through my achievements, certifications, hackathons,
              events, and memorable moments in my development career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className={styles.filters}>
        <div className="container">
          <motion.div
            className={styles.filterContent}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.filterButtons}>
              {categories.map((category) => (
                <Button
                  key={category.key}
                  variant={selectedCategory === category.key ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.key)}
                  className={styles.filterButton}
                  icon={<Filter size={16} />}
                >
                  {category.label}
                </Button>
              ))}
            </div>
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
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                className={styles.masonryGrid}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {filteredItems.map((item, index) => (
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
                        <span className={styles.category}>
                          {categories.find(cat => cat.key === item.category)?.label}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
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
                  {categories.find(cat => cat.key === selectedImage.category)?.label}
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