import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold leading-tight"
      >
        I build scalable full-stack applications <br />
        using the MERN stack
      </motion.h1>

      <p className="mt-4 text-gray-400 max-w-xl">
        Computer Science student at St. Mary’s University focused on building real-world systems with clean architecture and performance in mind.
      </p>

      <div className="mt-6 flex gap-4">
        <a href="#projects" className="bg-white text-black px-6 py-2 rounded-lg">
          View Projects
        </a>
        <a href="#contact" className="border px-6 py-2 rounded-lg">
          Contact Me
        </a>
      </div>

    </section>
  );
}