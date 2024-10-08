import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router"; // Import useRouter
import styles from "./styles.module.scss";
import Nav from "./nav";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import Rounded from "../../common/RoundedButton/RoundedButton";
import MagneticComponent from "./../../common/Magnetic/index";
import LocomotiveScroll from "locomotive-scroll";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const button = useRef(null);
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    let gsap;  // Move gsap declaration inside useEffect

    const loadGSAP = async () => {
      const [gsapModule, ScrollTriggerModule] = await Promise.all([
        import("gsap/dist/gsap"),
        import("gsap/dist/ScrollTrigger"),
      ]);
      gsap = gsapModule.default;
      const ScrollTrigger = ScrollTriggerModule.default;

      gsap.registerPlugin(ScrollTrigger);

      const setupAnimation = () => {
        const buttonElement = button.current;  // Safely reference button.current inside the effect
        if (buttonElement) {
          gsap.to(buttonElement, {
            scrollTrigger: {
              trigger: document.documentElement,
              start: 0,
              end: window.innerHeight,
              onLeave: () => {
                if (buttonElement) {
                  gsap.to(buttonElement, {
                    scale: 1,
                    duration: 0.25,
                    ease: "power1.out",
                  });
                }
              },
              onEnterBack: () => {
                if (buttonElement) {
                  gsap.to(buttonElement, {
                    scale: 0,
                    duration: 0.25,
                    ease: "power1.out",
                  });
                  setIsActive(false);
                }
              },
            },
          });
        }
      };

      if (button.current) {
        setupAnimation();
      } else {
        const intervalId = setInterval(() => {
          if (button.current) {
            setupAnimation();
            clearInterval(intervalId);
          }
        }, 100);
      }
    };

    loadGSAP();

    return () => {
      const buttonElement = button.current;  // Copy ref value into a variable
      if (buttonElement && gsap) {
        gsap.killTweensOf(buttonElement);
      }
    };
  }, []);

  return (
    <>
      <div className={styles.header}>
        <div>
          <Link href="/" className={styles.logo}>
            <p className={styles.copyright}>©️</p>
            <p className={styles.name}>Kshitij Guladhe</p>
          </Link>
        </div>
        <div className={styles.nav}>
          <MagneticComponent>
            <div
              className={`${styles.el} ${
                router.pathname === "/" ? styles.active : ""
              }`}
            >
              <Link href="/">Home</Link>
              <div className={styles.indicator}></div>
            </div>
          </MagneticComponent>
          <MagneticComponent>
            <div
              className={`${styles.el} ${
                router.pathname === "/work" ? styles.active : ""
              }`}
            >
              <Link href="/work">Work</Link>
              <div className={styles.indicator}></div>
            </div>
          </MagneticComponent>
          <MagneticComponent>
            <div
              className={`${styles.el} ${
                router.pathname === "/contact" ? styles.active : ""
              }`}
            >
              <Link href="/contact">Contact</Link>
              <div className={styles.indicator}></div>
            </div>
          </MagneticComponent>
        </div>
        <div ref={button} className={styles.headerButtonContainer}>
          <Rounded
            onClick={() => setIsActive(!isActive)}
            className={`${styles.button}`}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </Rounded>
        </div>
      </div>

      <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default Header;
