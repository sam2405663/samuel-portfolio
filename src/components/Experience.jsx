import { motion } from "framer-motion";

export default function Experience() {
  const items = [
    {
      title: "Backend Engineering",
      desc: "Design and build scalable RESTful APIs using Node.js and Express, with focus on performance, clean architecture, and maintainability.",
    },
    {
      title: "Frontend Development",
      desc: "Develop responsive, modern interfaces using React and Tailwind CSS with emphasis on user experience and component reusability.",
    },
    {
      title: "Authentication & Security",
      desc: "Implement secure authentication systems, session handling, and protected routes for real-world applications.",
    },
    {
      title: "Database Design",
      desc: "Structure MongoDB databases with optimized schemas, indexing, and efficient data access patterns.",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      
      <h2 className="text-3xl font-bold mb-10">What I Do</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#111] border border-gray-800 p-6 rounded-xl hover:border-white transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}