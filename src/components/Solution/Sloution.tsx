import React from 'react';
import Image from 'next/image';
import { Button } from "../../components/ui/button";
import ArrowIcon from "../../assets/arrow_right_alt(1).svg";

const Solution: React.FC = () => {
    return (
        <div
            style={{
                backgroundImage: `url('/images/sloution/Group.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className="flex h-full p-16 gap-40 justify-center items-center"
        >
            <div>
                <Image
                    src="/images/sloution/Group1707484840.png"
                    width={666}
                    height={623}
                    alt="Card Photo"
                    priority
                />
            </div>
            <div className='mt-8'>
                <div>
                    <p className='text-custom-blue-color-50 text-[32px] font-oxygen'>CELEBRATING EXCELLENCE AND INNOVATION</p>
                    <p className='mt-8 font-semibold text-[42px]'>NG SOLUTION: THIS WEEK&apos;S <span className='text-custom-green'>MOST</span></p>
                    <p className='text-custom-green text-[2rem] font-semibold'>REWARDED COMPANY!</p>
                </div>

                <div className='w-[34rem] mt-12 text-[1.2rem] font-sans leading-10'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                </div>

                <Button className='bg-custom-green rounded-none w-[229px] h-[62px] mt-8'>
                    EXPLORE NOW
                    <Image
                        src={ArrowIcon}
                        alt='arrow'
                        width={20}
                        height={20}
                    />
                </Button>
            </div>
        </div>
    );
};

export default Solution;