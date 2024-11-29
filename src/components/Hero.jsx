import profilePic from "../assets/Hammani_Abdeslem.jpg";
import { HERO_CONTENT } from "../constants/index";
import { motion } from "motion/react";
const Hero = () => {
  const container = (delay) => ({
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  })
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:ml-8">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-slate-300 text-center sm:text-left hover:text-slate-400"
            >
              Hammani Abdeslem
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              drag
              whileDrag={{ scale: 1.2, backgroundColor: "#f00" }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              MERN Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="max-w-xl py-6 font-light tracking-tighter text-slate-400  hover:text-white selection:text-cyan-500"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 mt-10">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1}}
              src={profilePic}
              alt="Hammani Abdeslem"
              className="w-3/4 lg:w-full rounded-2xl hover:scale-105 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
