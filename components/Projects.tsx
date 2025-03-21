"use client";
import { useMemo, useState } from 'react';
// NOTE Types
import { ProjectsProps } from '@/types';
// NOTE Components
import CardProject from './CardProject';

export default function Projects({ projects }: ProjectsProps) {
  const [search, setSearch] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value.trim().toLowerCase());
  };

  const filteredProjects = useMemo(() => {
    return projects.list
      .filter(project => 
        project.title.toLowerCase().includes(search) ||
        project.tecnhnologies.some(tech => tech.toLowerCase().includes(search))
      )
      .sort((a, b) => a.title.localeCompare(b.title)); // Ordenamos los proyectos al mismo tiempo que filtramos
  }, [projects.list, search]);

  return (
    <section className="w-[90%] mx-auto mt-[10%]">
      <h2 className="text-4xl text-center font-bold mb-8 text-white">{projects.title}</h2>
      
      <input
        type="text"
        placeholder="Search for project or tech"
        value={search}
        onChange={handleChange}
        className="w-[90%] md:w-[50%] lg:w-[30%] mx-auto flex justify-center mb-6 p-2 rounded-md bg-[#18181B] text-white placeholder-gray-500 border border-gray-700 transition-all"
      />

      {filteredProjects.length > 0 ? (
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[4%]">
          {filteredProjects.map(project => (
            <CardProject key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 mt-4">No projects found.</p>
      )}
    </section>
  );
}