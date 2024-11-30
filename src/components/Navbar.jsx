import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";
import React from "react";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="h-16 w-16" />
      </div>
      <div className="flex justify-center items-center m-8 gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/hammani-abdeslem-323914265/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-white" />
        </a>
        <a
          href="https://github.com/AbdeslemHMN?tab=overview&from=2024-11-01&to=2024-11-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-white" />
        </a>
        <a
          href="https://www.instagram.com/abdeslem_hmn_/profilecard/?igsh=cXg5N3RqbjBhYW5r"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-white" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
