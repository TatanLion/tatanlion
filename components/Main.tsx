// NOTE Types
import { MainProps } from '@/types';
// NOTE Components
import Image from './Image';

export default function Main({ main } : MainProps) {
    return (
        <div className="flex flex-col-reverse md:items-center md:flex-row w-[90%] mx-auto mt-[3%]">
            <div className="w-full md:w-1/2 mx-auto">
                <Image src='jonathan' customClass='w-full flex justify-center' />
            </div>
            <div className="w-full md:w-1/2 mx-auto text-center">
                <h1 className='text-[#7688FF] text-[6rem] font-extrabold mb-0'>{main.title}</h1>
                <h2 className='text-[1.5rem] font-medium mt-0'>{main.name}</h2>
                <p className='text-lg font-regular mt-[4%]'>{main.description}</p>
            </div>
        </div>
    )
}
