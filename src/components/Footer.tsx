import React from 'react'
import icon from "../assets/Vector.svg"
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer: React.FC = () => {
    return (
        <div className='h-[30rem]  bg-custome-dark-green'>
            <div className='flex p-[3rem] justify-between'>
                <div >
                    <Image src={icon} alt='icon' className='w-[10rem]' />
                </div>
                <div className='flex gap-[10rem]'>
                    <div className='text-customwhite-color  flex-col  space-y-[1rem] '>
                        <span className='text-[1.1rem]'>Resources</span>
                        <div className='mt-[1rem] '>Blog</div>
                        <div>Best practice</div>
                        <div>Colors</div>
                        <div>Color wheel</div>
                        <div>Support</div>
                        <div>Developers</div>
                        <div>Resource Libray</div>
                    </div>
                    <div className='text-customwhite-color  flex-col  space-y-[1rem] '>
                        <span className='text-[1.1rem]'>Resources</span>
                        <div className='mt-[1rem] '>Blog</div>
                        <div>Best practice</div>
                        <div>Colors</div>
                        <div>Color wheel</div>
                        <div>Support</div>
                        <div>Developers</div>
                        <div>Resource Libray</div>
                    </div>
                    <div className='text-customwhite-color flex-col  space-y-[1rem] '>
                        <span className='text-[1.1rem]'>Resources</span>
                        <div className='mt-[1rem] '>Blog</div>
                        <div>Best practice</div>
                        <div>Colors</div>
                        <div>Color wheel</div>
                        <div>Support</div>
                        <div>Developers</div>
                        <div>Resource Libray</div>
                    </div>
                </div>
            </div>
            <div className='border-t-[1px] border-customwhite-color ml-[4rem] mr-[4rem]'></div>

            <div className='flex justify-around gap-[850px]'>
                <div className="flex  mt-[1rem] text-customwhite-color items-center space-x-4">
                    <div>2024 logo Inc. All rights reserved</div>
                    <div className="border-l border-gray-300 pl-4">Privacy Policy</div>
                    <div className="border-l border-gray-300 pl-4">Terms & Conditions</div>
                </div>

                <div className='flex mt-[2rem] gap-[1rem]'>
                    <FaFacebookF className="text-white" />
                    <BsTwitterX className="text-white" />
                    <LinkedInIcon className="text-white" />
                    <InstagramIcon className="text-white" />
                </div>
            </div>
        </div>
    )
}

export default Footer