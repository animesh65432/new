import React from 'react';
import Image from 'next/image';

type Props = {
    title: string;
    image: string;
};

const CuponCard: React.FC<Props> = ({ title, image }) => {
    return (
        <div>
            <div >
                <Image src={image} width={290} height={290} alt='CuponCard' />
            </div>
            <div className='bg-transparent h-[5rem] bg-gradient-to-b from-black/20 to-black/50'>
                <p className='font-oxygen text-[1.2rem] text-customwhite-color p-[1rem]'>{title}</p>
            </div>
        </div>
    );
};

export default CuponCard;
