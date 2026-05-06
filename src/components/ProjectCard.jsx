import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      className="border border-gray-800 p-6 rounded-xl bg-[#111]"
    >
      <h3 className="text-xl font-semibold">{project.title}</h3>

      <p className="text-gray-400 mt-2">
        {project.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t, i) => (
          <span key={i} className="text-sm bg-gray-800 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-4">
        <a href={project.github} target="_blank">GitHub</a>
        <a href={project.live} target="_blank">Live</a>
      </div>
    </motion.div>
  );
}