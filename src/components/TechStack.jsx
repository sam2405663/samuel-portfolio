import { motion } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt 
} from "react-icons/fa";

import { 
  SiMongodb, 
  SiExpress, 
  SiJavascript, 
  SiTailwindcss 
} from "react-icons/si";

export default function TechStack() {

  const categories = [
    {
      title: "Frontend",
      tech: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Backend",
      tech: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
    },
    {
      title: "Tools",
      tech: [
        { name: "Git", icon: <FaGitAlt /> },
      ],
    },
  ];

  return (
    <section id="tech" className="py-20 px-6 max-w-6xl mx-auto">
      
      <h2 className="text-3xl font-bold mb-10">Tech Stack</h2>

      <div className="grid md:grid-cols-3 gap-10">
        
        {categories.map((category, i) => (
          
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#111] p-6 rounded-xl border border-gray-800"
          >
            <h3 className="text-xl font-semibold mb-4">
              {category.title}
            </h3>

            <div className="flex flex-col gap-4">
              
              {category.tech.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                >
                  <span className="text-xl">
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </div>
              ))}

            </div>
          </motion.div>

        ))}

      </div>

    </section>
  );
}