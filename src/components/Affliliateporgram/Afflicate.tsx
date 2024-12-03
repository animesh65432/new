import React from 'react'
import { Button } from "../../components/ui/button"
import Image from 'next/image'

const Afflicate: React.FC = () => {
    return (
        <div style={{ backgroundImage: `url('/images/afflicate/Background.png')`, }} className='mt-[100px] bg-cover bg-center h-[1003px]'>
            <div className='flex justify-center '>
                <p className='text-custom-green text-[2.5rem] mt-[4rem] font-semibold'>AFFILIATE  PROGRAM</p>
            </div>
            <div className='flex'>
                <div className='flex p-[6rem] w-[57rem] '>
                    <div >
                        <p className='text-custom-blue-color-50 text-[2rem]'>LEARN HOW TO GROW YOUR BUSINESS</p>

                        <p className='text-custom-black text-[42px] mt-[1rem] font-oxygen font-bold' >AFFILIATE PROGRAM THAT FITS</p>

                        <p className='text-custom-green mt-[1rem] text-[42px] font-bold font-oxygen'>EVERYONE</p>
                        <p className='mt-[2rem] font-sans text-[1.3rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <Button className='h-[3rem] mt-[1.5rem] rounded-none bg-custom-green w-[10rem]'>JOIN US NOW</Button>
                    </div>
                </div>
                <div className='mt-[3rem] mr-[2rem]'>
                    <Image src='/images/afflicate/125851.png' alt='affl' width={700} height={600} />
                </div>
            </div>
        </div>
    )
}

export default Afflicate