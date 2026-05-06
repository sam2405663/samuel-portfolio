import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6"
      >
        About Me
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-gray-400 leading-relaxed"
      >
        I'm a Computer Science student at St. Mary’s University focused on building 
        scalable, real-world web applications using the MERN stack.
      </motion.p>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-gray-400 leading-relaxed mt-4"
      >
        I approach development with an engineering mindset — thinking in terms of 
        system design, performance, and maintainability rather than just features.
        I enjoy solving problems that involve real-time systems, API architecture, 
        and clean UI implementation.
      </motion.p>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-gray-400 leading-relaxed mt-4"
      >
        Recently, I've been working on applications like a real-time chat platform 
        using WebSockets and a full-stack e-commerce system, focusing on building 
        reliable backend systems and intuitive user experiences.
      </motion.p>

    </section>
  );
}