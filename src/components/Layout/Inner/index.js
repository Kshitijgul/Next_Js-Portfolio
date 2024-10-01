import styles from "./style.module.scss";
import { motion } from "framer-motion";
import Header from "../../Header";
import { slide, opacity, perspective } from "./anim";

export default function Inner({ children, pageTitle }) {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  return (
    <div className={styles.inner}>
      {/* Display the page title in the slide component */}
      <motion.div {...anim(slide)} className={styles.slide}>
        <h1>{pageTitle}</h1>
      </motion.div>
      <Header />

      <motion.div {...anim(perspective)} className={styles.Page}>
        <motion.div {...anim(opacity)}>
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
