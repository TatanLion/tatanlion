// NOTE Helpers
import ExpandableText from '../helpers/ExpandableText';
import Image from './Image';
// NOTE Types
import { ProjectsProps } from '@/types';

interface CardProjectProps {
    project: ProjectsProps['projects']['list'][number];
}

export default function CardProject({ project }: CardProjectProps) {
    return (
        <div
            className="w-full md:w-[90%] h-auto mx-auto p-[2px] rounded-md mb-[4%] bg-gradient-to-b from-[#41d1ff] to-[#9231be] cursor-pointer hover:-translate-y-5 transition-transform duration-300 ease-in-out"
        >
            <div className="bg-[#18181B] p-4 rounded-md w-full h-full">
                <h3 className="text-xl font-bold mb-[4%]">{project.title}</h3>
                <div className="w-full h-auto rounded-lg overflow-hidden relative group">
                    <Image src={project.img} customClass="w-[90%]" />
                    <a href={project.urlPage} target='_blank' className="opacity-0 group-hover:opacity-100 transition-all ease duration-300 absolute top-0 left-0 w-full h-full bg-black/70 font-bold text-white text-2xl grid place-content-center ">
                        Go to page
                    </a>
                </div>
                <div className="mt-[4%] w-full h-auto">
                    <a className="flex items-center justify-start gap-2 mt-2 group" href={project.github} target='_blank'>
                        <Image src={'github'} customClass="w-[1.5rem] transition-all group-hover:rotate-[45deg]" />
                        <p className='text-md group-hover:text-[#41d1ff]'>View code</p>
                    </a>
                    <ExpandableText text={project.description} />
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
        </div>
    );
}