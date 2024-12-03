import React from 'react';
import Image from 'next/image';
import StarIcon from "../../assets/Star4.svg";
import EmptyStarIcon from "../../assets/Star1.png";

type Props = {
    title: string;
    image: string;
};

const CuponCard: React.FC<Props> = ({ title, image }) => {
    return (
        <div className='w-[370px] h-[500h]'>
            <div >
                <div>
                    <Image src={image} width={290} height={290} alt='CuponCard' />
                </div>
                <div className='bg-transparent  bg-gradient-to-b from-black/70 to-black/30 p-[1rem] flex flex-col'>
                    <div className='flex justify-between items-center gap-2'>
                        <p className='font-oxygen text-[1.2rem] text-customwhite-color'>
                            {title}
                        </p>
                        <div
                            className="flex items-center justify-center w-[128px] h-[38px] rounded-tl-[4px] rounded-bl-none rounded-tr-none rounded-br-none bg-customeyollow-color opacity-100"
                        >
                            <span className="text-white text-sm font-medium">
                                Upto 28% off
                            </span>
                        </div>
                    </div>
                    <div className='flex mt-[0.5rem]'>
                        <Image src={StarIcon} alt='StarIcon' width={24} height={24} />
                        <Image src={StarIcon} alt='StarIcon' width={24} height={24} />
                        <Image src={StarIcon} alt='StarIcon' width={24} height={24} />
                        <Image src={StarIcon} alt='StarIcon' width={24} height={24} />
                        <Image src={EmptyStarIcon} alt='EmptyStarIcon' width={24} height={24} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CuponCard;
