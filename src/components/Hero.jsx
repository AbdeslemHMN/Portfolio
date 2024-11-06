import profilePic from "../assets/Hammani_Abdeslem.jpg";
import { HERO_CONTENT } from "../constants/index";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:ml-8">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-slate-300 text-center sm:text-left hover:text-slate-400">
              Hammani Abdeslem
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              MERN Stack Developer
            </span>
            <p className="max-w-xl py-6 font-light tracking-tighter text-slate-400  hover:text-white selection:text-cyan-500">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 mt-10">
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt="Hammani Abdeslem"
              className="hover:scale-110 transition-transform duration-500 rounded-full sm:rounded-lg lg:rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
