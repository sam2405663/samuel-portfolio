import { motion } from "framer-motion";
import profile from "../assets/samuel.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-20">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 mb-4"
          >
            MERN Stack Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            I build scalable full-stack applications with clean architecture.
          </motion.h1>

          <p className="mt-6 text-gray-400 leading-relaxed max-w-xl">
            Computer Science student at St. Mary’s University focused on building
            performant, responsive, and real-world web applications using the MERN stack.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-gray-700 px-6 py-3 rounded-lg hover:border-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative">
            
            {/* Glow */}
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

            {/* Image */}
            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              src={profile}
              alt="Samuel Seifu"
              className="relative w-[320px] h-[320px] object-cover rounded-3xl border border-gray-800 shadow-2xl grayscale hover:grayscale-0 transition duration-500"            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}