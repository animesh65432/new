"use client";

import React from 'react';
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import { CardOfMerchandise } from "../../helper";
import Image from 'next/image';
import PrevIcon from "../../assets/prev.svg"
import StarIcon from "../../assets/HeroSectionstar.svg"
const Merchandise: React.FC = () => {
    return (
        <div className="mt-[73px] flex flex-col items-center justify-center ">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full max-w-[1665px]"
            >
                <CarouselContent className=" pl-[35px] flex gap-[35px]">
                    {CardOfMerchandise.map((merchandise, index) => (
                        <CarouselItem key={index} className="justify-center basis-[302px]">
                            <div className="w-[302px] h-[565px] rounded-none flex flex-col rounded-none border-0 ">
                                <CardContent className="p-0 flex-grow">
                                    <Image
                                        src={merchandise.image}
                                        width={302}
                                        height={384}
                                        alt={merchandise.title}
                                        className="w-full h-[384px] object-cover"
                                    />
                                    <div className='border-0'>
                                        <p className="font-semibold text-[24px] mt-[44px] font-sans">{merchandise.title}</p>
                                        <p className="flex items-center mt-[20px] mb-[20px]">
                                            4.5
                                            <Image
                                                src={StarIcon}
                                                width={22}
                                                height={22}
                                                alt="star"
                                                className="ml-[6px]"
                                            />
                                            <span className="font-oxygen text-[16px] ml-[6px]">(27,000) People like this</span>
                                        </p>


                                    </div>
                                </CardContent>
                                <div className="">
                                    <Button className="bg-custom-green w-full rounded-none">
                                        Explore Now
                                    </Button>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="mt-[73px] flex justify-center space-x-4">
                    <CarouselPrevious className="static" >
                        <Image
                            src={PrevIcon}
                            alt="arrow"
                            width={30}
                            height={30}
                        />
                    </CarouselPrevious>
                    <CarouselNext className="static" />
                </div>
            </Carousel>
        </div>
    );
};

export default Merchandise;