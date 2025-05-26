"use client";
import { useEffect, useMemo, useState } from "react";
import { ProjectsProps } from "@/types";
import CardProject from "./CardProject";

interface ProjectSectionProps {
  title: string;
  projects: ProjectsProps["projects"]["list"];
  filterCondition: (project: ProjectsProps["projects"]["list"][number]) => boolean;
  currentPage: number;
  onPageChange: (page: number) => void;
  projectsPerPage: number;
  search: string;
}

function ProjectSection({
  title,
  projects,
  filterCondition,
  currentPage,
  onPageChange,
  projectsPerPage,
  search,
}: ProjectSectionProps) {
  const filteredProjects = useMemo(() => {
    return projects
      .filter(
        (project) =>
          filterCondition(project) &&
          (project.title.toLowerCase().includes(search) ||
            project.tecnhnologies.some((tech: string) =>
              tech.toLowerCase().includes(search)
            ))
      )
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [projects, search, filterCondition]);

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * projectsPerPage;
    return filteredProjects.slice(start, start + projectsPerPage);
  }, [filteredProjects, currentPage, projectsPerPage]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredProjects.length / projectsPerPage);
  }, [filteredProjects.length, projectsPerPage]);

  return (
    <>
      <h3 className="text-2xl text-center font-semibold my-8 text-white">{title}</h3>
      {paginatedProjects.length > 0 ? (
        <>
          <div className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[5%]">
            {paginatedProjects.map((project) => (
              <CardProject key={project.id} project={project} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-4 gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => onPageChange(index + 1)}
                  className={`px-4 py-2 rounded-md cursor-pointer ${currentPage === index + 1
                      ? "bg-[#9231be] text-white"
                      : "bg-[#18181B] hover:bg-[#9231be]/80 text-gray-300"
                    } transition-all`}
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
    </>
  );
}

export default function Projects({ projects }: ProjectsProps) {
  const [search, setSearch] = useState("");
  const [pageTop, setPageTop] = useState(1);
  const [pageMore, setPageMore] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setProjectsPerPage(4);
      } else {
        setProjectsPerPage(6);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.trim().toLowerCase());
    setPageTop(1);
    setPageMore(1);
  };

  return (
    <section className="w-[95%] mx-auto py-[6%]">
      <h2 className="text-4xl text-center font-bold mb-8 text-white">{projects.title}</h2>

      <input
        type="text"
        placeholder="Search for project or tech"
        value={search}
        onChange={handleSearch}
        className="w-[90%] md:w-[50%] lg:w-[30%] mx-auto flex justify-center mb-6 p-2 rounded-md bg-[#18181B] text-white placeholder-gray-500 border border-gray-700 transition-all"
      />

      <ProjectSection
        title="Top Projects"
        projects={projects.list}
        filterCondition={(project) => project?.topStart === true}
        currentPage={pageTop}
        onPageChange={setPageTop}
        projectsPerPage={projectsPerPage}
        search={search}
      />

      <ProjectSection
        title="More Projects"
        projects={projects.list}
        filterCondition={(project) => project?.topStart !== true}
        currentPage={pageMore}
        onPageChange={setPageMore}
        projectsPerPage={projectsPerPage}
        search={search}
      />
    </section>
  );
}