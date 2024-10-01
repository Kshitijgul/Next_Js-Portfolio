import React, { useRef } from "react";
import styles from "./style.module.scss";
import { motion, useInView } from "framer-motion";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";
import Magnetic from "../../common/Magnetic";

const Index = () => {
  const container = useRef(null);
  const isInView = useInView(container, { once: false, threshold: 0.5 }); // Set once to false, and adjust threshold if necessary
  const phrase =
    "Helping Brands to Stand Out in the digital Era. Together we will set the new status quo. No Nonsense, always on the cutting edge.";

  return (
    <div className={styles.description} id="about">
      <div ref={container} className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => (
            <span key={index} className={styles.mask}>
              <motion.span
                custom={index} // Pass index for staggered delay
                variants={slideUp}
                initial="initial"
                animate={isInView ? "open" : "closed"}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
        <motion.p
          variants={opacity}
          initial="initial"
          animate={isInView ? "open" : "closed"}
        >
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </motion.p>
        <div data-scroll data-scroll-speed={0.2}>
          <Magnetic>
            <div className={styles.button}>
              <p>About me</p>
            </div>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};

export default Index;
