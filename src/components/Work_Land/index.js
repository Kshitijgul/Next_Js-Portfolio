import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import styles from "./style.module.scss";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useScroll, useTransform } from "framer-motion"; // Import motion and hooks

const Index = () => {
  const { scrollY } = useScroll(); // Track the vertical scroll position
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]); // Rotate from 0 to 360 degrees based on scroll

  return (
    <>
      <main className={styles.main}>
        <div className={styles.main_land}>
          <h1 className={styles.main_text}>
            Showcasing My <span className={styles.highlight}>Work</span> and{" "}
            <span className={styles.highlight}>Experience</span>
          </h1>

          <Image
            src="/Images/3d_avtar.png"
            width={400}
            quality={100}
            height={300}
            alt="Picture of the author"
            style={{ objectFit: "contain" }} // Use style prop for objectFit
          />
        </div>

        {/* Apply motion to the arrow and bind rotation to scroll */}
        <motion.div
          style={{ rotate }} // Use the rotate transformation
          className={styles.arrow}
        >
          <GoArrowUpRight size={80} />
        </motion.div>
      </main>
    </>
  );
};

export default Index;
