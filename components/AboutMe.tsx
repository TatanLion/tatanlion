// NOTE Types
import { AboutMeProps } from "@/types";
// NOTE Components
import Image from "./Image";

const programmingLanguages = [
  { name: "JavaScript", src: "js.webp" },
  { name: "TypeScript", src: "typescript.webp" },
  { name: "React", src: "react.webp" },
  { name: "Next.js", src: "next.webp" },
  { name: "Node.js", src: "node.webp" },
  { name: "PHP", src: "php.webp" },
];

const classLinks = `w-full mx-auto flex items-center gap-[3%] justify-center 
  hover:scale-110 transition-all duration-300 ease-in-out
  md:w-max md:text-center
`;

export default function AboutMe({ aboutMe }: AboutMeProps) {

  return (
    <div className="mt-20 relative w-full h-auto flex flex-col justify-center">

      <Image
        src="about_me.webp"
        customClass=" absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] w-[28rem] md:w-[45rem] lg:w-[57rem]  pointer-events-none"
      />

      <div className="size-[90vw] lg:h-auto mx-auto border-1 border-custom lg:border-none rounded-full flex flex-col items-center justify-center p-4 mb-10 relative">
        <h2 className="text-5xl md:text-6xl lg:text-9xl c-purple font-bold">{aboutMe.title}</h2>
        <p className="text-[1.1rem] md:text-[1.3rem] lg:w-8/12 text-center leading-6 mt-4">{aboutMe.description}</p>
      </div>

      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-around my-10 gap-5">
        <a className={`${classLinks}`} href="https://www.linkedin.com/in/jonathan-amaya-mendieta/" target="_blank">
          <Image src='linkedin.webp' customClass='w-[2rem] lg:w-[2.2rem]' />
          <p>My LinkedIn Profile</p>
        </a>
        <a className={`${classLinks}`} href="https://github.com/TatanLion" target="_blank">
          <Image src='github-2.webp' customClass='w-[2rem] lg:w-[2.2rem]' />
          <p>My GitHub Profile</p>
        </a>
      </div>

      <div className="w-11/12 mx-auto my-10">
        <h3 className="text-3xl md:text-4xl c-purple font-bold w-[90%] mx-auto mb-10 text-center">{aboutMe.title_2}</h3>
        <p className="text-[1.1rem] md:text-[1.3rem] lg:w-8/12 mx-auto text-center leading-6 mt-4 mb-10">{aboutMe.description_2}</p>
        <div className="w-11/12 mx-auto grid grid-cols-3 md:grid-cols-6 gap-6">
          {programmingLanguages.map((lang) => (
            <div key={lang.name} className="flex flex-col items-center w-24 mx-auto">
              <Image src={lang.src} customClass="w-[3.5rem] |" />
              <p className="mt-2 text-sm md:text-base">{lang.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
