import { FaGithub, FaTelegram, FaInstagram, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center">
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold"
      >
        Get In Touch
      </motion.h2>

      <p className="mt-4 text-gray-400">
        Open to opportunities, collaborations, or just a quick chat.
      </p>

      {/* Contact Info */}
      <div className="mt-8 space-y-3 text-gray-300">
        <p>📧 wubesam733@gmail.com</p>
        <p className="flex justify-center items-center gap-2">
          <FaPhone /> 0966566184
        </p>
      </div>

      {/* Social Links */}
      <div className="mt-8 flex justify-center gap-6 text-xl">

        <a 
          href="https://github.com/sam2405663" 
          target="_blank"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>

        <a 
          href="https://t.me/lvannaye" 
          target="_blank"
          className="hover:text-white transition"
        >
          <FaTelegram />
        </a>

        <a 
          href="https://instagram.com/theo78556" 
          target="_blank"
          className="hover:text-white transition"
        >
          <FaInstagram />
        </a>

      </div>

    </section>
  );
}