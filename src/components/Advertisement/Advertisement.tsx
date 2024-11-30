import React from 'react';
import Image from 'next/image';
import { Card } from "../../components/ui/card"
import { Trending } from "../../components"

const Advertisement: React.FC = () => {
    return (
        <div>
            <div className="w-[500px] h-[200px] relative">
                <Image
                    src="/images/Advertisement.png"
                    alt="Advertisement image"
                    layout="fill"
                    style={{ objectFit: 'cover' }}
                />
                <p>Advertisement</p>
            </div>
            <Card className='h-[6.25rem] flex justify-center items-center'>
                <p className=' text-custom-black-75 font-semibold text-[19px]'>Travel Deals Upto 50% off</p>
            </Card>
            <Trending />



        </div>
    );
};

export default Advertisement;
