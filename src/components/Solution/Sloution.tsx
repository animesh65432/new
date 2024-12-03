import React from 'react';
import { Button } from "../../components/ui/button"

const Solution: React.FC = () => {
    return (
        <div
            style={{
                backgroundImage: `url('/images/sloution/Group.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className="flex h-[1050] p-[4rem] gap-[10rem]  justify-center items-center  "
        >
            <div
                style={{
                    backgroundImage: `url('/images/sloution/Group1707484840.png')`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
                className=""
            >

            </div>
            <div className='mt-[13rem]'>
                <div >
                    <p className='text-custom-blue-color-50 text-[1.5rem]'>CELEBRATING EXCELENCE  AND INNOVATION</p>
                    <p className='text-[2rem] mt-[2rem] font-semibold'>NG SLOUTION : THIS WEEK'S <span className='text-custom-green'>MOST</span></p>
                    <p className='text-custom-green text-[2rem] font-semibold'>REWARDED  COMPANY !</p>
                </div>

                <div className='w-[34rem] mt-[3rem] text-[1.2rem]'>
                    <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor .
                    </p>
                </div>

                <div className='mt-[1rem] w-[4rem]'>
                    <Button className='bg-custom-green rounded-none'>VISIT NOW</Button>
                </div>
            </div>
        </div>
    );
};

export default Solution;
