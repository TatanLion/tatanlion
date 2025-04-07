// NOTE Types
import { AboutMeProps } from "@/types";
// NOTE Components
import Image from "./Image";

export default function AboutMe({ aboutMe }: AboutMeProps) {

  const classLinks = `w-full md:w-1/2 mx-auto flex items-center gap-[3%] flex justify-center hover:scale-110 transition-all duration-300 ease-in-out`;

  return (
    <div className="py-[8%]">
      <div className=" w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center">
        <h2 className="w-full md:w-1/2 grid place-content-center text-[3.2rem] font-extrabold text-center leading-[0.9]">
          {aboutMe.title.split(' ')[0]} <br /> <span className="text-[6.8rem]">{aboutMe.title.split(' ')[1]}</span>
        </h2>
        <p className="w-full md:w-1/2 text-center font-normal text-lg">{aboutMe.description}</p>
      </div>
      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-around mt-[6%] gap-5">
        <a className={classLinks} href="https://www.linkedin.com/in/jonathan-amaya-mendieta/" target="_blank">
          <Image src='linkedin' customClass='w-[2.2rem]' />
          <p>My LinkedIn Profile</p>
        </a>
        <a className={classLinks} href="https://github.com/TatanLion" target="_blank">
          <Image src='github-2' customClass='w-[2.2rem]' />
          <p>My GitHub Profile</p>
        </a>
      </div>
    </div>
  )
}
