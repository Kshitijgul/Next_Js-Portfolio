import React from "react";
import { useEffect } from "react";
import styles from "./style.module.scss";
import { MdLocationPin } from "react-icons/md";
import Magnetic from "../../common/Magnetic";
import { useInView, useAnimation } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

const index = () => {
  const containerRef = useRef(null);
  const controls = useAnimation(); // For controlling animation manually
  const container = useRef(null);
  const isInView = useInView(container, { once: false, threshold: 0.5 }); // Set once to false, and adjust threshold if necessary

  // Use the inView state to control animation when scrolling
  useEffect(() => {
    if (isInView) {
      controls.start({ x: 0, opacity: 1 });
    } else {
      controls.start({ x: -100, opacity: 0 });
    }
  }, [isInView, controls]);

  return (
    <>
      <div className={styles.Main}>
        <p className={styles.Headline}>
          Here’s a summary of my educational journey
        </p>
        <div className={styles.Mainsection}>
          <div className={styles.Mainsection_flex}>
            {/* <div className={styles.Timeline}></div> */}
            <motion.div
              ref={containerRef}
              animate={controls} // Bind animation controls
              initial={{ x: -100, opacity: 0 }} // Initial state when out of view
              transition={{ duration: 0.5 }} // Animation transition settings
              className={styles.Education}
            >
              <p className={styles.year}> Course Year : 2021 - 2025 </p>
              <p className={styles.CourseName}>
                {" "}
                B.Tech - Computer Science Enginieering with Specialization in
                Artificial Intilligence and Machine Learning
              </p>

              <p className={styles.location}>
                <MdLocationPin /> Pimpri Chinchwad College Of Engineering , Pune
              </p>
            </motion.div>
            <motion.div              animate={controls} // Bind animation controls
              initial={{ x: -100, opacity: 0 }} // Initial state when out of view
              transition={{ duration: 0.5,delay: 0.5  }} // Animation transition settings
              className={styles.Education}
              >
              <p className={styles.year}> Course Year : 2019 - 2021 </p>
              <p className={styles.CourseName}> HSC - Science </p>

              <p className={styles.location}>
                <MdLocationPin /> Shivaji Science College , Nagpur
              </p>
            </motion.div>
          </div>
          <div data-scroll data-scroll-speed={0.2} className={styles.secondSection}>
            <Magnetic>
              <p>Education </p>
            </Magnetic>

            <motion.h4
              ref={container}
              initial={{ opacity: 0, x: 100 }} // Initial state (hidden and moved down)
              animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate to visible and positioned correctly when in view
              transition={{ duration: 0.9, ease: "easeOut" }} // Animation settings
            >
              <q>
                Education helps us gain knowledge while building leadership,
                team management, and problem-solving skills through
                extracurricular activities.
              </q>
            </motion.h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
