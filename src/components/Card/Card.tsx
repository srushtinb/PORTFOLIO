import React from 'react';
import { motion } from 'framer-motion';
import styles from './Card.module.scss';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  onClick,
}) => {
  return (
    <motion.div
      className={`${styles.card} ${className}`}
      onClick={onClick}
      whileHover={hover ? { y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" } : undefined}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;