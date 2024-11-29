import { CONTACT } from "../constants";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-4xl sm:text-6xl text-center text-slate-400 hover:text-neutral-400"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter text-neutral-400 ">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <a href="{`tel:${CONTACT.phoneNo}`}">{CONTACT.phoneNo}</a>
        </motion.p>
        <a href={`mailto:${CONTACT.email}`} className="hover:underline">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
