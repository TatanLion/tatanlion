import { ProjectsProps } from '@/types';
import Image from './Image';

interface CardProjectProps {
    project: ProjectsProps['projects']['list'][number];
}

export default function CardProject({ project }: CardProjectProps) {
    return (
        <div className="w-[90%] mx-auto p-4 rounded-md shadow-lg bg-[#18181B] mb-[4%]">
            <h3 className="text-xl font-bold mb-[2%]">{project.title}</h3>
            <div className="w-full h-auto rounded-lg overflow-hidden">
                <Image src={project.img} customClass="w-[90%]" />
            </div>
            <div className="mt-[4%]">
                <a className="flex items-center justify-start gap-2 mt-2" href={project.github} target='_blank'>
                    <Image src={'github'} customClass="w-[2rem]" />
                    <p>View code</p>
                </a>
                <p className="text-md mt-2">{project.description}</p>
                <div className="flex items-center flex-wrap gap-2 mt-2">
                    <span className='font-semibold text-md'>Made with: </span>
                    {project.tecnhnologies.map((tech, index) => (
                        <div key={index} className="flex items-center justify-start relative group">
                            <Image src={tech.toLowerCase()} customClass="w-[1.8rem]" />
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mt-2 px-3 py-1 rounded bg-white text-black text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                {tech}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}