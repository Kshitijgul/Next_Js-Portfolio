import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const projects = [
  {
    id: 1,
    title: "Project One",
    imageSrc: "/Images/slide1.png", // Replace with actual image path
    githubLink: "https://github.com/project-one", // Replace with actual GitHub link
    liveLink: "https://project-one.com", // Replace with actual Live link
  },
  {
    id: 2,
    title: "Project Two",
    imageSrc: "/Images/slide2.png", // Replace with actual image path
    githubLink: "https://github.com/project-two",
    liveLink: "https://project-two.com",
  },
  {
    id: 3,
    title: "Project Three",
    imageSrc: "/Images/slide3.png",
    githubLink: "https://github.com/project-three",
    liveLink: "https://project-three.com",
  },
  {
    id: 4,
    title: "Project Four",
    imageSrc: "/Images/slide4.png",
    githubLink: "https://github.com/project-four",
    liveLink: "https://project-four.com",
  },
];

// Split projects into two halves
const firstHalf = projects.slice(0, Math.ceil(projects.length / 2));
const secondHalf = projects.slice(Math.ceil(projects.length / 2));

const Index = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Selected Works</h1>
        <h4>Take a Look at My Products</h4>
        <p>
          Each piece showcases my creative journey and dedication to <br />
          transforming ideas into visually compelling stories.
        </p>
      </div>
      <div className={styles.projectShowcase}>
        <h1 className={styles.heading}>Showcasing My Projects</h1>
        <div className={styles.projectRow}>
          {/* First Half */}
          <div className={styles.projectColumn}>
            {firstHalf.map((project) => (
              <div key={project.id} className={styles.project}>
                <div className={styles.imageContainer}>
                  <Image
                    src={project.imageSrc}
                    alt={`Image of ${project.title}`}
                    width={400}
                    height={300}
                    className={styles.image}
                  />
                  <div className={styles.overlay}>
                    <span className={styles.projectName}>{project.title}</span>
                    <GoArrowUpRight className={styles.icon} />
                    <div className={styles.buttons}>
                      <a href={project.githubLink} className={styles.button}>
                        GitHub
                      </a>
                      <a href={project.liveLink} className={styles.button}>
                        Live
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Second Half */}
          <div className={styles.projectSecColumn}>
            {secondHalf.map((project) => (
              <div key={project.id} className={styles.project}>
                <div className={styles.imageContainer}>
                  <Image
                    src={project.imageSrc}
                    alt={`Image of ${project.title}`}
                    width={400}
                    height={300}
                    className={styles.image}
                  />
                  <div className={styles.overlay}>
                    <span className={styles.projectName}>{project.title}</span>
                    <GoArrowUpRight className={styles.icon} />
                    <div className={styles.buttons}>
                      <a href={project.githubLink} className={styles.button}>
                        GitHub
                      </a>
                      <a href={project.liveLink} className={styles.button}>
                        Live
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
