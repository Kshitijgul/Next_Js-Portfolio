import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "../../common/RoundedButton/RoundedButton";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "slide1.png",
  },
  {
    color: "#d6d7dc",
    src: "slide2.png",
  },
  {
    color: "#e3e3e3",
    src: "slide3.png",
  },
  {
    color: "#21242b",
    src: "slide4.png",
  },
];

const slider2 = [
  {
    color: "#e3e5e7",
    src: "slide5.png",
  },
  {
    color: "#d6d7dc",
    src: "slide6.png",
  },
  {
    color: "#e3e3e3",
    src: "slide7.png",
  },
  {
    color: "#21242b",
    src: "slide8.png",
  },
];

// Ensure the component name is capitalized
export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.slidingImages}>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider1.map((project, index) => (
          <div
            key={index}
            className={styles.project}
            style={{ backgroundColor: project.color }}
          >
            <div className={styles.imageContainer}>
              <Image
                sizes="(max-width: 768px) 100vw, 
           (max-width: 1200px) 80vw, 
           60vw"
                fill={true}
                alt={"image"}
                src={`/Images/${project.src}`}
              />
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slider2.map((project, index) => (
          <div
            key={index}
            className={styles.project}
            style={{ backgroundColor: project.color }}
          >
            <div className={styles.imageContainer}>
              <Image
                sizes="(max-width: 768px) 100vw, 
           (max-width: 1200px) 80vw, 
           60vw"
                fill={true}
                alt={"image"}
                src={`/Images/${project.src}`}
              />
            </div>
          </div>
        ))}
      </motion.div>
      <p className={styles.button}>More work</p>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
}
