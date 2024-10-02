"use client";
import { useRef, useEffect, useState } from "react";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

const Index = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;
  let gsap; // Declare gsap in the outer scope

  // State to track if it's running on the client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client flag to true after the component mounts
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return; // Only run if it's client-side

    const loadGSAP = async () => {
      const gsapModule = await import("gsap");
      gsap = gsapModule.gsap; // Assign gsap from the module
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      if (slider.current) {
        gsap.to(slider.current, {
          scrollTrigger: {
            trigger: document.documentElement,
            scrub: 0.25,
            start: 0,
            end: window.innerHeight,
            onUpdate: (e) => (direction = e.direction * -1),
          },
          x: "-500px",
        });
      }

      requestAnimationFrame(animate);
    };

    loadGSAP();
  }, [isClient]); // Ensure this effect runs only after the client-side check

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    // Check if gsap is defined and refs are not null before animating
    if (gsap && firstText.current && secondText.current) {
      gsap.set(firstText.current, { xPercent: xPercent });
      gsap.set(secondText.current, { xPercent: xPercent });
    }

    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <main className={styles.main}>
      <div className={styles.ImageContainer}>
        <Image
          className={styles.customImage}
          quality={100}
          width={550}
          height={650}
          src="/Images/profile-removebg.png"
          alt="background"
        />
      </div>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Freelance Developer -</p>
          <p ref={secondText}>Freelance Developer -</p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
            fill="white"
          />
        </svg>
        <p>Freelance</p>
        <p>Designer & Developer</p>
      </div>
      <div className={styles.locationContainer}>
        <p className={styles.locationText}>Located in Maharashtra, India</p>
        <p className={styles.svgContainer}>
          <svg
            className={styles.spinner}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
          >
            <path
              d="M5.5 16.5H19.5M5.5 8.5H19.5M4.5 12.5H20.5M12.5 20.5C12.5 20.5 8 18.5 8 12.5C8 6.5 12.5 4.5 12.5 4.5M12.5 4.5C12.5 4.5 17 6.5 17 12.5C17 18.5 12.5 20.5 12.5 20.5M12.5 4.5V20.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z"
              stroke="#fff"
              strokeWidth="1.2"
            />
          </svg>
        </p>
      </div>
    </main>
  );
};

export default Index;
