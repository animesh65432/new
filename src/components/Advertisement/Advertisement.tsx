import React from 'react';
import Image from 'next/image';
import { Card } from "../../components/ui/card"
import { Trending } from "../../components"
import CardArrow from "../../assets/Group1000002735.svg"


const Advertisement: React.FC = () => {
    return (
        <div className='h-full w-[100%] flex flex-col gap-[10%]'>
            <div>
                <div className="w-[569px] h-[206px] relative">
                    <Image
                        src="/images/Advertisement.png"
                        alt="Advertisement image"
                        layout="fill"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <Card className=' justify-center   flex flex-col w-[569px] rounded-none '>
                    <div className='ml-[48px] mb-[0.5rem]'>
                        <p className=' text-custom-black-75 font-semibold text-[26px]'>Travel Deals Upto 50% off</p>
                    </div>
                    <div className='font-poppins text-[14px]  ml-[38px] mb-[0.5rem] flex'>
                        <div className='ml-[48px]'>
                            <p>Discover the latest deals of travel around the world</p>
                            <p>with a monthly subscription model</p>
                        </div>
                        <div className='ml-[50px]'>
                            <Image src={CardArrow} alt="cardimages" width={60} height={60} />
                        </div>
                    </div>
                </Card>
            </div>
            <Trending />



        </div>
    );
};

export default Advertisement;