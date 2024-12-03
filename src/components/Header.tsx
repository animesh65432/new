"use client";
import React, { useState } from "react";
import Iconheaderimages from "../assets/Vector.svg";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';
import { SheetSide } from "../components";

const Header: React.FC = () => {
    const [sheetside, setsheetside] = useState<boolean>(false);

    return (
        <>
            <div className="bg-custom-green h-[70px] lg:flex hidden items-center justify-around">
                <div>
                    <Image
                        src={Iconheaderimages}
                        alt="logo"
                        style={{
                            width: 170,
                            height: 54,
                        }}
                    />
                </div>

                <div className="flex justify-center items-center text-[18px] 2xl:gap-[60px] xl:gap-4 lg:gap-3">
                    <div className="font-oxygen text-customwhite-color">Top Destination</div>
                    <div className="font-oxygen text-customwhite-color">Food & Drinks</div>
                    <div className="font-oxygen text-customwhite-color">Activities & Experiences</div>
                    <div className="font-oxygen text-customwhite-color">Travel Tips</div>
                </div>

                <div className="flex items-center space-x-4">
                    <FaFacebookF className="text-white w-[42] h-[42]" />
                    <BsTwitterX className="text-white w-[42] h-[42]" />
                    <LinkedInIcon className="text-white w-[45] h-[45]" />
                    <InstagramIcon className="text-white w-[42] h-[42]" />
                </div>
            </div>

            <div className="bg-custom-green h-[70px] lg:hidden flex items-center px-4">
                <div className="flex-shrink-0" onClick={() => setsheetside(true)}>
                    <MenuIcon className="text-customwhite-color cursor-pointer" />
                </div>
                <div className="flex-grow flex justify-center" >
                    <Image
                        src={Iconheaderimages}
                        alt="logo"
                        className="object-contain"
                        style={{
                            width: "6.5625rem",
                            height: "3.3125rem",
                        }}
                    />
                </div>
                <SheetSide open={sheetside} onClose={() => setsheetside(false)} />
            </div>
        </>
    );
};

export default Header;
