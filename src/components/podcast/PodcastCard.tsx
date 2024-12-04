import React from "react";
import { CardOfPodcastItems } from "../../helper";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import PrevIcon from "../../assets/prev.svg";

const PodcastCard = () => {


    return (

        <div className="mt-[73px] flex flex-col items-center">
            <div className=" w-full max-w-[1665px]" >
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="relative w-full"
                >
                    <CarouselContent className="flex gap-[35px] items-center">
                        {CardOfPodcastItems.map((podcast, index) => (
                            <CarouselItem
                                key={index}
                                className="flex-shrink-0 basis-[520px] overflow-hidden"
                            >

                                <div className="bg-white   overflow-hidden">
                                    <div className="relative">
                                        <img
                                            src={podcast.image}
                                            alt="Travel Image"
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="absolute top-0 right-0 m-4 bg-gray-800 text-white px-3 py-1 rounded-full">
                                            01:02
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold mb-2">{podcast.title} • {podcast.Episode}</h3>
                                        <p className="text-gray-600 mb-4">
                                            {podcast.summary}
                                        </p>
                                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                                            Play
                                        </button>
                                    </div>
                                </div>

                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="">
                        <CarouselPrevious className="bg-white p-2 rounded-full shadow-lg cursor-pointer absolute -left-2">
                            <Image
                                src={PrevIcon}
                                alt="arrow left"
                                width={20}
                                height={20}
                            />
                        </CarouselPrevious>
                        <CarouselNext className="bg-white p-2 rounded-full shadow-lg cursor-pointer absolute -right-2">
                            <Image
                                src={PrevIcon}
                                alt="arrow right"
                                width={20}
                                height={20}
                                className="rotate-180"
                            />
                        </CarouselNext>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default PodcastCard;