// NOTE Types
import { AboutMeProps } from "@/types";

export default function AboutMe({ aboutMe } : AboutMeProps) {
  return (
    <div className=" w-[90%] mx-auto flex flex-col md:flex-row items-center mt-[10%]">
        <h2 className="w-full md:w-1/2 grid place-content-center text-[6rem] font-extrabold text-center">
          {aboutMe.title.split(' ')[0]} <br /> <span className="text-[4.5rem]">{aboutMe.title.split(' ')[1]}</span>
        </h2>
        <p className="w-full md:w-1/2 text-center font-normal text-lg">{aboutMe.description}</p>
    </div>
  )
}
