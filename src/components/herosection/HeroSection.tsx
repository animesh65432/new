"use client";

import React, { useState } from "react";
import { ImagesOfArray } from "../../helper";
import { Button } from "../../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import serchicon from "../../assets/serchicon.svg";
import arrowright from "../../assets/arrow_right_alt.svg";
import HeroSectionStar from "../../assets/HeroSectionstar.svg";

const HeroSection: React.FC = () => {
    const [image, setImage] = useState<string>(ImagesOfArray[0].image);
    const [title, setTitle] = useState<string>(ImagesOfArray[0].title);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const onClickChangeImage = (image: string) => {
        const findTitle = ImagesOfArray.find((item) => item.image === image);
        setIsTransitioning(true);
        setImage(image);
        setTitle(findTitle?.title || "");
        setIsTransitioning(false);

    };

    return (
        <div
            className={`flex flex-col h-[929px] relative bg-gradient-to-b from-black/70 to-black/70 transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"
                }`}
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="flex flex-col 2xl:h-[929px]">
                <div className="flex 2xl:mt-[147px] 2xl:ml-[773px] 2xl:mr-[133px] gap-[14px]">
                    <Select>
                        <SelectTrigger className="bg-transparent font-oxygen w-[300px] border-2 border-white h-[56px] text-left placeholder-customwhite-color p-[22px] text-[16px]">
                            <SelectValue placeholder="Serch Location" className="text-customwhite-color placeholder:text-cus" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="new-york">New York</SelectItem>
                            <SelectItem value="san-francisco">San Francisco</SelectItem>
                            <SelectItem value="chicago">Chicago</SelectItem>
                            <SelectItem value="los-angeles">Los Angeles</SelectItem>
                        </SelectContent>
                    </Select>

                    <div className="border-2 border-white flex items-center w-[700px] h-[56px]">
                        <input
                            className="bg-transparent font-oxygen flex-grow h-full text-left placeholder-white px-[22px] text-[16px] outline-none"
                            placeholder="Search latest news about travel, business, lifestyle, etc..."
                        />
                        <Image
                            src={serchicon}
                            alt="serchicon"
                            width={16}
                            height={16}
                            className="mr-[10px]"
                        />
                    </div>
                </div>

                <div className="flex justify-between mt-[54px] mb-[172px] ml-[100px]">
                    <div className="text-customwhite-color-75">
                        <p className="text-[60px] font-oxygen font-bold">10 MOST VISITED PLACE</p>
                        <p className="text-[60px] font-bold mb-[1rem] font-oxygen">IN HO CHI MIN CITY</p>
                        <p className="text-[28px] font-oxygen">A Complete Guide For Your Travel</p>

                        <Button className="bg-customwhite-color-75 w-[229px] rounded-none h-[58px] mt-[50px]  hover:bg-black hover:text-customwhite-color text-custom-green">
                            <span className=" font-oxygen text-[20px] ">Explore Now</span>
                            <span>
                                <Image src={arrowright} height={15} width={10} alt="arrow" />
                            </span>
                        </Button>

                        <div className="flex gap-[33px] mt-[50px]">
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

                    <div className="flex gap-4 mt-[100px]">
                        <div className="flex flex-col gap-4">
                            <div className="w-[341px] h-[333px] flex flex-col items-center">
                                <div className="w-[309px] h-[296px] relative">
                                    <Image src={`${image}`} alt="Card Image" fill />
                                </div>
                                <div className="w-[341px] h-[81px] bg-customwhite-color flex items-center justify-center flex-col">
                                    <div className="flex text-customeyollow-color-75">
                                        <Image src={HeroSectionStar} height={20} width={20} alt="star" />
                                        <Image src={HeroSectionStar} height={20} width={20} alt="star" />
                                        <Image src={HeroSectionStar} height={20} width={20} alt="star" />
                                        <Image src={HeroSectionStar} height={20} width={20} alt="star" />
                                    </div>
                                    <p className="text-center text-customblue-color-75 text-[20px]">{title}</p>
                                </div>
                            </div>
                        </div>
                        {ImagesOfArray.map((card, index) => (
                            image !== card.image ? (
                                <div
                                    key={index}
                                    className="mt-7 flex flex-col cursor-pointer w-[241px] h-[328px]"
                                    onClick={() => onClickChangeImage(`${card.image}`)}
                                >
                                    <div className="h-[328px] w-[241px] relative">
                                        <div>
                                            <Image src={`${card.image}`} fill alt="Card Image" />
                                        </div>
                                        <div>
                                            <div className="absolute bottom-0 p-[10px] bg-gradient-to-b from-black/70 to-black/50 flex items-center justify-center w-[241px] h-[68px]">
                                                <div className="font-sans text-[18px] text-white">
                                                    <p>{card.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
