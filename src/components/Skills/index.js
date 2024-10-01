import React from "react";
import styles from "./style.module.scss";
import Skills_ from "./Skills_";
import Magnetic from '../../common/Magnetic';
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

const Index = () => {
  const container = useRef(null);
  const isInView = useInView(container, { once: false, threshold: 0.5 }); // Set once to false, and adjust threshold if necessary

  return (
    <div className={styles.main}>
      <div data-scroll data-scroll-speed={0.2} className={styles.FixedContainer}>
      <Magnetic>
      <div className={styles.round}>
          <p>Skills</p>
        </div>

      </Magnetic>
     
        <motion.p
         ref={container}
              initial={{ opacity: 0, x: -100 }} // Initial state (hidden and moved down)
              animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate to visible and positioned correctly when in view
              transition={{ duration: 0.9, ease: "easeOut" }} // Animation settings
         className={styles.paragraph}>
          Passionate technology enthusiast with expertise in web development,
          AI, and machine learning, focused on building innovative and impactful
          solutions.
        </motion.p>
      </div>
      <div className={styles.ScrollContainer}>
        {/* <p>Here All My <span> &lt; Skills /&gt;</span> Will be here</p> */}
        <div>
          <h3>Here’s a showcase of my skills!</h3>
          <Skills_ />
        </div>
      </div>
    </div>
  );
};

export default Index;
