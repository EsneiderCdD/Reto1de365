import React from 'react';
import { motion } from 'framer-motion';
import './Card.css'; // Para estilos específicos de las Cards.

const Card = ({ title, animationCode, description, children }) => {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="card-title">{title}</h2>
      <div className="card-content">
        <div className="card-graphic">
          {children}
        </div>
        <div className="card-description">
          <p>{description}</p>
          <pre>
            <code>{animationCode}</code>
          </pre>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
