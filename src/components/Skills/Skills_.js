import React, { useRef } from "react";
import "swiper/css";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import styles from "./skills.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper"; // Correct import


const skillsData = {
  programmingLanguages: {
    headline: "Programming Languages",
    images: [
      { name: "C", url: "/Images/c.png" },
      { name: "C++", url: "/Images/c++.png" },
      { name: "Python", url: "/Images/python.png" },
      { name: "Java", url: "/Images/java.png" },
    ],
  },
  developmentLanguages: {
    headline: "Development Languages",
    images: [
      { name: "HTML", url: "/Images/html.png" },
      { name: "CSS", url: "/Images/css.png" },
      { name: "JavaScript", url: "/Images/javascript.png" },
      { name: "React JS", url: "/Images/react.png" },
      { name: "Next JS", url: "/Images/nextjs.png" },
      { name: "Tailwind CSS", url: "/Images/tailwind.png" },
      { name: "Node.js", url: "/Images/nodejs.png" },
      { name: "Express", url: "/Images/express.png" },
   
    ],
  },
  databases: {
    headline: "Databases",
    images: [
      { name: "MongoDB", url: "/images/mongo.png" },
      { name: "MySQL", url: "/images/mysql.png" },
    ],
  },
  tools: {
    headline: "Other Technologies & Tools",
    images: [
      { name: "Git", url: "/images/github.png" },
      // { name: "Webpack", url: "/images/webpack.png" },
      { name: "VSCode", url: "/images/vscode.png" },
      { name: "Postman", url: "/images/postman.png" },
      { name: "GSAP", url: "/images/gsap.png" },
      { name: "Data Science", url: "/images/datasccience.png" },
      { name: "Machine Learning", url: "/images/machine_learning.png" },
    ],
  },
};

export default function Skills_() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <>
      <div className={styles.navigationButtons}>
        <button className={styles.prevButton} onClick={handlePrev}>
          <FaLessThan size={30} />
        </button>
        <button className={styles.nextButton} onClick={handleNext}>
          <FaGreaterThan size={30} />
        </button>
      </div>
      <div className={styles.container}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          rewind={true}
          spaceBetween={30} // Set the gap between slides
          className={styles.mySwiper}
        >
          {Object.values(skillsData).map((skillCategory, index) => (
            <SwiperSlide key={index} className={styles.Swiperslide}>
              <h2 className={styles.headline}>{skillCategory.headline}</h2>
              <div className={styles.imagesContainer}>
                {skillCategory.images.map((image, imgIndex) => (
                  <div key={imgIndex} className={styles.imageItem}>
                    <img src={image.url} alt={image.name} className={styles.image} />
                    <p>{image.name}</p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
