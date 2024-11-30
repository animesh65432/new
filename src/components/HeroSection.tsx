import React from "react";
import { ImagesOfArray } from "../helper";
import { Button } from "../components/ui/button"
import Image from "next/image";

const HeroSection: React.FC = () => {
    return (
        <div
            className="relative"
            style={{
                width: "1519px",
                height: "800px",
                backgroundImage: `url('${ImagesOfArray[0].image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >

            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50 z-0"></div>

            <div className="absolute flex items-center h-full pr-[50px] left-[45%] bottom-[35%]  text-customwhite-color-75">
                <div>
                    <div className="flex gap-8">
                        <div>
                            <input
                                className="bg-transparent font-oxygen w-[200px] border-2 h-[37px] text-center placeholder-customwhite-color-75"
                                placeholder="Select Location"
                            />
                        </div>
                        <div>
                            <input
                                className="bg-transparent font-oxygen w-[550px] border-2 h-[37px] text-center placeholder-customwhite-color-75"
                                placeholder="Search latest news about travel, business, lifestyle, etc..."
                            />
                        </div>
                    </div>
                </div>

            </div>

            <div className="absolute flex top-48 left-20 text-customwhite-color-75 ">
                <div className="font-oxygen  text-customwhite-color-75">
                    <p className="text-[50px]">10 MOST VISITED PLACE</p>
                    <p className="text-[50px]">IN HO CHI MIN CITY</p>

                    <p className="text-[20px] mb-20">A Complete Guide For Your Travel</p>

                    <Button className="bg-customwhite-color-75 w-[150px] ">
                        <span className="text-custom-green-75 font-oxygen">Explore Now</span>
                    </Button>

                    <div className="flex gap-16 mt-11 ">
                        <div>
                            <p className="font-oxygen text-[35px]">3K+</p>
                            <p className="font-sans text-[18px]">E-Books</p>
                        </div>
                        <div>
                            <p className="font-oxygen text-[35px]">5K+</p>
                            <p className="font-sans text-[18px]">News</p>
                        </div>
                        <div>
                            <p className="font-oxygen text-[35px]">20K+</p>
                            <p className="font-sans text-[18px]">Locations</p>
                        </div>
                    </div>

                </div>

                <div className="ml-24 mt-24 flex gap-4">
                    <div className="flex flex-col gap-4">
                        <div className="w-[280px] h-[240px]">
                            <Image
                                src={`${ImagesOfArray[0].image}`}
                                alt="Card Image"
                                width={280}
                                height={240}
                            />
                        </div>
                        <div className="w-[300px] h-[60px] bg-customwhite-color-75 flex items-center justify-center flex-col">
                            <div className="flex text-customeyollow-color-75">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <span key={i}>&#9733;</span>
                                ))}
                            </div>
                            <p className="text-center text-customblue-color-75">Top Destination Awarded</p>
                        </div>
                    </div>

                    <div className="mt-7 flex flex-col">
                        <div className="h-[13rem] w-[13rem]">
                            <div className="h-[13rem] w-[13rem] mb-2">
                                <Image
                                    src={`${ImagesOfArray[1].image}`}
                                    width={208}
                                    height={208}
                                    alt="Card Image"
                                />
                            </div>
                            <div className=" bg-transparent flex items-center justify-center w-[13rem] h-[68px] bg-gradient-to-b from-black/70 to-black/50">
                                <div className="font-sans text-[18px] ">
                                    <p>popular Local</p>
                                    <p>Dishes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 flex flex-col">
                        <div className="h-[13rem] w-[13rem]">
                            <div className="h-[13rem] w-[13rem] mb-2">
                                <Image
                                    src={`${ImagesOfArray[2].image}`}
                                    width={208}
                                    height={208}
                                    alt="Card Image"
                                />
                            </div>
                            <div className=" bg-transparent flex items-center justify-center w-[13rem] h-[68px] bg-gradient-to-b from-black/70 to-black/50">
                                <div className="font-sans text-[18px] ">
                                    <p>Explore the Cu-chi</p>
                                    <p>Tunels</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 flex flex-col">
                        <div className="h-[13rem] w-[13rem]">
                            <div className="h-[13rem] w-[13rem] mb-2">
                                <Image
                                    src={`${ImagesOfArray[2].image}`}
                                    width={208}
                                    height={208}
                                    alt="Card Image"
                                />
                            </div>
                            <div className=" bg-transparent bg-gradient-to-b from-black/70 to-black/50 flex items-center justify-center w-[13rem] h-[68px] ">
                                <div className="font-sans text-[18px] ">
                                    <p>popular Local</p>
                                    <p>Dishes</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default HeroSection;
