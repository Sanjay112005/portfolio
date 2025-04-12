import { useEffect } from "react";
import { motion } from "framer-motion";
import "./port.css"

export default function PortfolioIntro({ onAnimationComplete }) {
  const name = "SANJAY".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationComplete();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div style={styles.container}>
      {/* Name Animation */}
      <motion.div style={styles.nameContainer}>
        {name.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
            className="intro-letter"
            style={styles.letter}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "black",
  },
  nameContainer: {
    position: "absolute",
    display: "flex",
    zIndex: 2,
  },
  letter: {
  
    fontWeight: "100",
    color: "white",
    textTransform: "uppercase",
    letterSpacing: "0px",
    fontFamily: "Raleway, sans-serif",
    lineHeight: 1,
  },
};

// Global body styling
document.body.style.margin = "0";
document.body.style.overflow = "hidden";
document.documentElement.style.overflow = "hidden";
