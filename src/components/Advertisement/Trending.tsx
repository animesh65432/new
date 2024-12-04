import React from 'react'
import { Card } from "../../components/ui/card"
import { CardOfTrending } from "../../helper"
import Image from 'next/image'
import StarImage from "../../assets/HeroSectionstar.svg"

const Trending: React.FC = () => {
    return (
        <Card className="overflow-y-auto flex-1 h-full">
            <div>
                <p className='text-2xl font-poppins ml-[24px] text-[28px] mt-[24px] font-bold mb-[24px]'>Trending</p>
            </div>
            <div className='flex flex-col gap-[19px]'>
                {CardOfTrending.map((trending, index) => (
                    <div
                        key={index}
                        className='px-4 py-2 flex flex-row items-center'
                    >
                        <div className='mr-2 w-[290px]'>
                            <Image
                                src={trending.image}
                                width={200}
                                height={200}
                                alt={`Trending item ${index + 1}`}
                                className='object-cover'
                            />
                        </div>
                        <div className='flex-grow  w-[350px] '>
                            <p className='text-[20px]'> {trending.title}</p>
                            <p className='mt-[6px] text-[16px]'>by <span className='ml-[6px] font-semibold underline'>{trending.by}</span></p>
                            <div className='flex mt-[10px]'>
                                <div className='font-oxygen text-[16px] font-semibold'>{trending.star}</div>
                                <div>
                                    <Image src={StarImage} alt='star' width={20} height={20} />
                                </div>
                            </div>
                            <p className='mt-[6px]'>Published {trending.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}

export default Trending