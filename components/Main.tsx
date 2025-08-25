// NOTE Types
import { MainProps } from '@/types';
// NOTE Components
import Image from './Image';

export default function Main({ main }: MainProps) {
    return (
        <div className="flex flex-col-reverse md:items-center lg:flex-row w-[90%] mx-auto mt-20">
            <div className="w-[90%] md:w-1/2 mx-auto">
                <div className="relative w-full flex justify-center">
                    <Image src='jonathan.webp' customClass='w-[95%] mx-auto lg:w-[70%] flex justify-center' />
                    <div className="absolute bottom-0 left-0 w-full h-32 lg:h-32 bg-gradient-to-b from-transparent to-black/90 pointer-events-none rounded-b-lg z-20" />
                </div>
            </div>
            <div className="w-full lg:w-[40%] mx-auto text-center">
                <h1 className='w-11/12 mx-auto c-purple text-8xl md:text-[7.4rem] lg:text-[9rem] font-extrabold mb-0'>{main.title}</h1>
                <h2 className='text-[1.5rem] md:text-[1.7rem] font-medium mt-4'>{main.name}</h2>
                <p className='text-[1.3rem] font-regular mt-4'>{main.description}</p>
            </div>
        </div>
    )
}
