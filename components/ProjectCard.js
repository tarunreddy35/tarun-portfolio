import { motion } from 'framer-motion';

export default function ProjectCard({ title, impact, tags, link }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
    >
      <div className="text-sm text-blue-500 font-bold mb-2 uppercase tracking-widest">{tags[0]}</div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">{impact}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}