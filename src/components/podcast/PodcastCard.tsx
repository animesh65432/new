import React from "react";
import { CardOfPodcastItems } from "../../helper";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import PrevIcon from "../../assets/prev.svg";
import StarIcon from "../../assets/HeroSectionstar.svg";
// className="w-full h-[667px] rounded-none flex flex-col"

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
                    <CarouselContent className="flex gap-[35px] pl-[35px]">
                        {CardOfPodcastItems.map((podcast, index) => (
                            <CarouselItem
                                key={index}
                                className="flex-shrink-0 basis-[520px] overflow-hidden"
                            >
                                <div className="w-full h-[667px] rounded-none flex flex-col" style={{
                                    backgroundImage: `url(${podcast.image})`,
                                    backgroundSize: "cover",
                                }}>
                                    <CardContent className="p-0 flex-grow">
                                        <Image
                                            src={podcast.image}
                                            width={470}
                                            height={384}
                                            alt={podcast.title}
                                            className="w-full h-[384px] object-cover"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold">{podcast.title}</h3>
                                            <p className="text-sm text-gray-600 mt-2">
                                                {podcast.summary}
                                            </p>
                                            <div className="flex items-center gap-2 mt-4">
                                                <span className="text-sm font-medium">
                                                    {podcast.Episode}
                                                </span>
                                                {podcast.color && (
                                                    <Image
                                                        src={StarIcon}
                                                        alt="star icon"
                                                        width={16}
                                                        height={16}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                    <Button className="bg-custom-green w-full rounded-none">
                                        Explore Now
                                    </Button>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Navigation Buttons */}
                    <div className="absolute inset-0 flex justify-between items-center px-4">
                        <CarouselPrevious className="bg-white p-2 rounded-full shadow-lg cursor-pointer">
                            <Image
                                src={PrevIcon}
                                alt="arrow left"
                                width={20}
                                height={20}
                            />
                        </CarouselPrevious>
                        <CarouselNext className="bg-white p-2 rounded-full shadow-lg cursor-pointer">
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
