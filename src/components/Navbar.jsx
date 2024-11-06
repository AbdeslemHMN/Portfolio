import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from '../assets/logo.png';
const Navbar = () => {
  return (
    <nav className="mb-2O flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img src={logo} alt="logo" className="h-16 w-16"/>
        </div>
        <div className="flex justify-center items-center m-8 gap-4 text-2xl" >
        <FaLinkedin className="text-white " />
        <FaGithub className="text-white  " />
        <FaInstagram className="text-white " />
        </div>
    </nav>
  )
}

export default Navbar