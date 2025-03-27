"use client";
import { useMemo, useState } from 'react';
// NOTE Types
import { ProjectsProps } from '@/types';
// NOTE Components
import CardProject from './CardProject';

export default function Projects({ projects }: ProjectsProps) {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value.trim().toLowerCase());
    setCurrentPage(1);
  };

  const filteredProjects = useMemo(() => {
    return projects.list.filter(project =>
      project.title.toLowerCase().includes(search) ||
      project.tecnhnologies.some(tech => tech.toLowerCase().includes(search))
    ).sort((a, b) => a.title.localeCompare(b.title));
  }, [projects.list, search]);

  const currentProjects = useMemo(() => {
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    return filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  }, [filteredProjects, currentPage, projectsPerPage]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredProjects.length / projectsPerPage);
  }, [filteredProjects.length, projectsPerPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="w-[90%] mx-auto py-[6%]">
      <h2 className="text-4xl text-center font-bold mb-8 text-white">{projects.title}</h2>

      <input
        type="text"
        placeholder="Search for project or tech"
        value={search}
        onChange={handleChange}
        className="w-[90%] md:w-[50%] lg:w-[30%] mx-auto flex justify-center mb-6 p-2 rounded-md bg-[#18181B] text-white placeholder-gray-500 border border-gray-700 transition-all"
      />

      {currentProjects.length > 0 ? (
        <>
          <div className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[5%]">
            {currentProjects.map(project => (
              <CardProject key={project.id} project={project} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-md cursor-pointer ${currentPage === index + 1 ? 'bg-[#9231be] text-white' : 'bg-[#18181B] hover:bg-[#9231be]/80 text-gray-300'} transition-all`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        <p className="text-center text-gray-400 mt-4">No projects found.</p>
      )}
    </section>
  );
}