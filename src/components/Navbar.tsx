"use client"
import React, { useState } from "react";
import Image from "next/image";
import Topdestination from "../assets/Topdestination.svg";
import fooddrink from "../assets/foodanddrink.svg";
import Traveltips from "../assets/Travelandtips.svg";
import activesandexpense from "../assets/Activitesandexperience.svg";

const Navbar: React.FC = () => {
    const [TopdestinationClicked, setTopdestinationClicked] = useState<boolean>(false)
    const [foodanddrinkClicked, setfoodanddrinkClicked] = useState<boolean>(false)
    const [activesandexpenseClicked, setactivesandexpenseClicked] = useState<boolean>(false)
    const [TraveltipsClicked, setTraveltipsClicked] = useState<boolean>(false)

    return (
        <div className="flex justify-center items-center mt-[100px]">
            <div className="flex gap-[60px] h-[53px] font-oxygen text-[1.5rem]">
                <div
                    className="flex flex-col items-center w-[248px] h-[34px]"
                    onClick={() => setTopdestinationClicked(!TopdestinationClicked)}
                >
                    <div className={`flex items-center gap-2 ${TopdestinationClicked ? "font-bold text-custom-green text-[28px]" : ""}`}>
                        <Image src={Topdestination} alt="location" width={21} height={34} />
                        <span className="text-[22px]">Top Destination</span>
                    </div>
                    {TopdestinationClicked && (
                        <div className="mt-2 border-[3px] w-[248px] border-custom-green"></div>
                    )}
                </div>

                <div
                    className="flex flex-col items-center w-[193px] h-[34px]"
                    onClick={() => setfoodanddrinkClicked(!foodanddrinkClicked)}
                >
                    <div className={`flex items-center gap-2 ${foodanddrinkClicked ? "font-bold text-custom-green text-[28px]" : ""}`}>
                        <Image
                            src={fooddrink}
                            alt="food and drink"
                            width={21}
                            height={34}
                        />
                        <span className="text-[22px]">Food & Drinks</span>
                    </div>
                    {foodanddrinkClicked && (
                        <div className="mt-2 border-[3px] w-[193px] border-custom-green"></div>
                    )}
                </div>

                <div
                    className="flex flex-col items-center w-[288px] h-[34px]"
                    onClick={() => setactivesandexpenseClicked(!activesandexpenseClicked)}
                >
                    <div className={`flex items-center gap-2 ${activesandexpenseClicked ? "font-bold text-custom-green text-[28px]" : ""}`}>
                        <Image
                            src={activesandexpense}
                            alt="activities and experiences"
                            width={21}
                            height={34}
                        />
                        <span className="whitespace-nowrap text-[22px]">
                            Activities & Experiences
                        </span>
                    </div>
                    {activesandexpenseClicked && (
                        <div className="mt-2 border-[3px] w-[288px] border-custom-green"></div>
                    )}
                </div>

                <div
                    className="flex flex-col items-center w-[149px] h-[34px]"
                    onClick={() => setTraveltipsClicked(!TraveltipsClicked)}
                >
                    <div className={`flex items-center gap-2 ${TraveltipsClicked ? "font-bold text-custom-green text-[28px]" : ""}`}>
                        <Image src={Traveltips} alt="travel tips" width={21} height={34} />
                        <span className="text-[22px]">Travel Tips</span>
                    </div>
                    {TraveltipsClicked && (
                        <div className="mt-2 border-[3px] w-[149px] border-custom-green"></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;