import React from "react";
import Topdestination from "../assets/Topdestination.svg"
import fooddrink from "../assets/foodanddrink.svg"
import Traveltips from "../assets/Travelandtips.svg"
import activesandexpense from "../assets/Activitesandexperience.svg"
import Image from "next/image";

const Navbar: React.FC = () => {
    return (
        <div className="flex justify-center items-center w-full mt-[100px]">
            <div className="flex gap-[3.90rem] w-[1058px] h-[53px] font-oxygen text-[1.5rem]">
                <div className="flex items-center w-[248px] h-[53px]">
                    <Image src={Topdestination} alt="location" width={21} height={34} />
                    <span className="ml-2">Top Destination</span>
                </div>

                <div className="flex items-center w-[248px] h-[53px]">
                    <Image src={fooddrink} alt="location" width={21} height={34} />
                    <span className="ml-2">Food & Drinks</span>
                </div>

                <div className="flex items-center w-[248px] h-[53px]">
                    <Image src={activesandexpense} alt="activities and experiences" width={21} height={34} />
                    <span className="ml-2 whitespace-nowrap">Activities & Experiences</span>
                </div>

                <div className="flex items-center w-[248px] h-[53px]">
                    <Image src={Traveltips} alt="location" width={21} height={34} />
                    <span className="ml-2">Travel Tips</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;