import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import Rounded from "../../../common/RoundedButton/RoundedButton";
import Magnetic from "../../../common/Magnetic";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Index = () => {
  const [fromName, setFromName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [purpose, setPurpose] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State for controlling popup visibility

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Kshitij",
      from_name: fromName,
      email: email,
      message: message,
      purpose: purpose,
    };

    emailjs
      .send(
        "service_4e72sg6",
        "template_56jvdoh",
        templateParams,
        "0kXR8pmu7U9yGcAbz"
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );

          // Show success popup
          setShowPopup(true);

          // Hide the popup after 3 seconds
          setTimeout(() => {
            setShowPopup(false);
          }, 3000);

          // Clear form fields
          setFromName("");
          setEmail("");
          setMessage("");
          setPurpose("");
        },
        (error) => {
          console.log("Failed to send email.", error);
        }
      );
  };

  return (
    <>
      <div className={styles.Contact_Container}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h1>
              Let's start a <br />
              project together
            </h1>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/fevicon2.png" // Replace with your image path
              alt="Project image"
              width={200}
              height={200}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.form_Container}>
          <div className={styles.form_page}>
            <div className={styles.form}>
              <h2>Get In Touch </h2>
              <form onSubmit={sendEmail}>
                <div className={styles.border}></div>

                <div className={styles.inputGroup}>
                  <label htmlFor="name">What's your name?</label>
                  <input
                    value={fromName}
                    onChange={(e) => setFromName(e.target.value)}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="*John Doe"
                    required
                  />
                </div>

                <div className={styles.border}></div>

                <div className={styles.inputGroup}>
                  <label htmlFor="email">What's your email?</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="JohnDoe@gmail.com"
                    required
                  />
                </div>

                <div className={styles.border}></div>

                <div className={styles.inputGroup}>
                  <label htmlFor="purpose">What's your purpose?</label>
                  <input
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    type="text"
                    id="purpose"
                    name="purpose"
                    placeholder="web development , design ..... "
                    required
                  />
                </div>

                <div className={styles.border}></div>

                <div className={styles.inputGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hello, Kshitij can you Help me ......"
                    id="message"
                    name="message"
                    rows="4"
                    required
                  ></textarea>
                </div>

                <div className={styles.border}></div>

                <button type="submit">
                  <Rounded
                    backgroundColor={"#334BD3"}
                    className={styles.button}
                  >
                   <p>Send</p>
                  </Rounded>
                </button>
              </form>
            </div>

            <div className={styles.content}>
              <h2>Contact Details</h2>
              <p>kshitijguladhe2002@gmail.com</p>
              <p>+91 760 204 430**</p>
              <p>Pune - Maharashtra, INDIA</p>
              <div className={styles.socialLinks}>
                <h3>Social Handles</h3>
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/kshitij-guladhe/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/your-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillInstagram />
                      Instagram
                    </a>
                  </li>
                </ul>
                <h3>Collaborate with me </h3>
                <li>
                  <a
                    href="https://github.com/Kshitijgul"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    Github
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup notification */}
      {showPopup && (
        <div className={styles.popup}>
          <p>Message Sent Successfully!</p>
        </div>
      )}

      <div className={styles.info}>
        <div>
          <span>
            <h3>Version</h3>
            <p>2024 © Edition</p>
          </span>
          <span>
            <h3>Version</h3>
            <p>11:49 PM GMT+2</p>
          </span>
        </div>
        <div>
          <span>
            <h3>socials</h3>
          </span>
          <Magnetic>
            <p>Instagram</p>
          </Magnetic>
          <Magnetic>
            <p>Dribbble</p>
          </Magnetic>
          <Magnetic>
            <p>Linkedin</p>
          </Magnetic>
        </div>
      </div>
    </>
  );
};

export default Index;
