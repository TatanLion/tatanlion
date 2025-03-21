// NOTE Types
import { AboutMeProps } from "@/types";
// NOTE Components
import Image from "./Image";

export default function AboutMe({ aboutMe }: AboutMeProps) {

  const classLinks = `w-full md:w-1/2 mx-auto flex items-center gap-[3%] flex justify-center`;
  return (
    <>
      <div className=" w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center mt-[10%]">
        <h2 className="w-full md:w-1/2 grid place-content-center text-[6rem] font-extrabold text-center">
          {aboutMe.title.split(' ')[0]} <br /> <span className="text-[4.5rem]">{aboutMe.title.split(' ')[1]}</span>
        </h2>
        <p className="w-full md:w-1/2 text-center font-normal text-lg">{aboutMe.description}</p>
      </div>
      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-around mt-[4%]">
        <a className={classLinks} href="https://www.linkedin.com/in/jonathan-amaya-mendieta/" target="_blank">
          <Image src='linkedin' customClass='w-[2.5rem]' />
          <p>My LinkedIn Profile</p>
        </a>
        <a className={classLinks} href="https://github.com/TatanLion" target="_blank">
          <Image src='github-2' customClass='w-[2.5rem]' />
          <p>My GitHub Profile</p>
        </a>
      </div>
    </>
  )
}
