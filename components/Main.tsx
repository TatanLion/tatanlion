// NOTE Types
import { MainProps } from '@/types';
// NOTE Components
import Image from './Image';

export default function Main({ main } : MainProps) {
    return (
        <div className="flex flex-col-reverse md:items-center md:flex-row w-[90%] mx-auto py-[8%]">
            <div className="w-full md:w-1/2 mx-auto">
                <Image src='jonathan' customClass='w-[80%] mx-auto md:w-[90%] flex justify-center' />
            </div>
            <div className="w-full md:w-[40%] mx-auto text-center">
                <h1 className='text-[#7688FF] text-[7rem] md:text-[8rem] font-extrabold mb-0'>{main.title}</h1>
                <h2 className='text-[1.5rem] font-medium mt-0'>{main.name}</h2>
                <p className='text-lg font-regular mt-[4%]'>{main.description}</p>
            </div>
        </div>
    )
}
