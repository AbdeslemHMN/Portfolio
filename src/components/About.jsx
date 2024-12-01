import aboutPic from "../assets/about.jpg";
import { motion } from "motion/react";


const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-6xl text-center text-slate-400 hover:text-neutral-500">
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              src={aboutPic}
              alt="aboutPic"
              className="w-3/4 lg:w-full rounded-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 lg:text-lg max-w-2xl py-6 font-light tracking-tighter text-slate-400  hover:text-white selection:text-cyan-500">
              I am a dedicated and versatile full stack developer with a strong
              foundation in web applications and data science. Currently
              pursuing my engineering studies at{" "}
              <a
                href="https://www.esi.dz/"
                target="_blank"
                className="text-blue-200 text-lg hover:text-blue-600"
              >
                ESI Algiers
              </a>
              , I have built proficiency in technologies like React, Node.js,
              Tailwind-css, and MongoDB, with growing expertise in machine
              learning and artificial intelligence. My journey began with a deep
              curiosity for technology's potential to solve real-world problems,
              and today, I continuously strive to expand my knowledge and adapt
              to new challenges. I thrive in collaborative environments, enjoy
              creative problem-solving, and am passionate about delivering
              impactful solutions. Beyond coding, I am active in the ESI
              Scientific Club
              <a
                href="https://cse.club/fr"
                target="_blank"
                className="text-blue-200 text-lg hover:text-blue-600"
              >
                {" "}
                CSE
              </a>{" "}
              , where I organize events and contribute to technical and
              operational initiatives. I value innovation, learning, and making
              meaningful contributions through technology.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
