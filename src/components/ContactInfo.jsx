import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
const ContactInfo = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <footer
        className={`bg-tertiary rounded-2xl sm:px-16 px-6 sm:py-4 py-4 min-h-[100px]`}
      >
        <div className="footer-top sm:py-6 py-6">
          <div className="container">
            <div className="footer-contact">
              <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Contact Me</p>
                <p className={styles.sectionSubText}>
                  {" "}
                  Feel free to contact and reach me !!
                </p>
              </motion.div>

              <ul className="">
                <li className="mt-5">
                  {/* <ion-icon name="call-outline"></ion-icon> */}

                  <a href="tel:8859019957" className="contact-link">
                    +91 (88) 59019957
                  </a>
                </li>

                <li className="contact-item">
                  {/* <ion-icon name="mail-outline"></ion-icon> */}

                  <a href="mailto:pantg835@gmail.com" className="contact-link">
                    pantg835@gmail.com
                  </a>
                </li>
                <li className="contact-item">
                  {/* <ion-icon name="mail-outline"></ion-icon> */}

                  <a href="mailto:pantg835@gmail.com" className="contact-link">
                    pantg835@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center align-middle">
          <p className="">
          Copyright &copy; 2024. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SectionWrapper(ContactInfo, "Contact me");
