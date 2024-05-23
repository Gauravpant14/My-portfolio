import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import MailIcon from "../assets/svg/MailIcon";
import Mobile from "../assets/svg/Mobile";
import Share from "../assets/svg/share";
import LinkedIn from "../assets/svg/LinkedIn";
import Whatsapp from "../assets/svg/whatsapp";
import Twitter from "../assets/svg/twitter";
import Instagram from "../assets/svg/Instagram";
import MyResume from "../assets/resume/Gaurav_Frontend_Developer_1.pdf";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Gaurav Pant",
          from_email: form.email,
          to_email: "pantg835@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[300px] h-[350px] "
      >
        <div>
          <p className="text-secondary md:text-[24px] text-[20px] ">
            Here you can find my contact information to get in touch with me.
            You can also feel free to contact me using given form.
          </p>
        </div>
        <ul className="space-y-6 mt-8">
          <li className="flex items-center space-x-3">
            <MailIcon className="w-6 h-6 text-blue-500 hover:text-blue-600" />
            <a
              href="mailto:pantg835@gmail.com"
              className="contact-link text-md md:text-lg text-secondary hover:text-blue-600"
            >
              pantg835@gmail.com
            </a>
          </li>
          <li className="flex items-center space-x-3">
            <Mobile className="w-6 h-6 text-green-500" />
            <a
              href="tel:8859019957"
              className="contact-link text-md md:text-lg text-secondary hover:text-green-600"
            >
              +91-88590-19957
            </a>
          </li>
          <li className="flex items-center space-x-4">
            <Share className="w-6 h-6 text-red-500" />
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/gaurav-pant-09840a170/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <LinkedIn className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+918859019957"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-700"
                >
                  <Whatsapp className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/GauravPant3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/Gauravpant14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </li>
           <li>
            <a className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded hover:cursor-pointer" href={MyResume} download={"Gaurav_Pant_Front_End_Resume"} target="_blank">Download Resume</a>
            </li> 
        </ul>

      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            disabled={!form.email}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
