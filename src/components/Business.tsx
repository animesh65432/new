import React from 'react'
import Image from 'next/image'
import { Button } from "../components/ui/button"

const Business: React.FC = () => {
    return (
        <div className='mt-[6.25rem] flex p-[8.75rem] bg-customwhite-color gap-[5.81rem]'>
            <div className='relative w-[100rem] h-[40rem]'>
                <Image
                    src='/images/business/2149322972(1)1.png'
                    alt='business'
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div>
                <div>
                    <p className='text-custom-blue-color text-[1.5rem]'>LEARN HOW TO GROW YOUR BUSINESS</p>
                </div>
                <div className='mt-[1.25rem] text-custom-green text-[2rem] font-semibold'>
                    <p >TOP PICKS ON BUSINESS STRATEGIES</p>
                    <p>EBOOKS FOR YOU</p>
                </div>
                <div className='mt-[2.5rem] text-xl'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div className='mt-[2.5rem]'>
                    <Button className='bg-custom-green rounded-none w-[10rem] h-[2.8rem]'>EXPLORE NOW</Button>
                </div>
            </div>
        </div>
    )
}

export default Business
