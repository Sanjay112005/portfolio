import { AnimatePresence, motion } from "motion/react"; 
import { Link } from "react-router-dom";
import { useState } from "react";
import "./hover.css"; // Import external CSS file

export const HoverEffect = ({ items = [], className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={`grid-container ${className}`}>
      {items?.length > 0 ? (
        items.map((item, idx) => (
          <Link
            to={item?.link}
            key={item?.link || idx}
            className="card-links"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="hover-bg"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle>{item.title}</CardTitle>
              <CardImage src={item.image} alt={item.title} />
            </Card>
          </Link>
        ))
      ) : (
        <p className="no-items-text"></p>
      )}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div className={`cards ${className}`}>
      <div className="card-contents">{children}</div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={`card-titles ${className}`}>{children}</h4>
  );
};

export const CardImage = ({ src, alt, className }) => {
  return (
    <img src={src} alt={alt} className={`card-images ${className}`} />
  );
};
