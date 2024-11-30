import React from "react";
import Iconheaderimages from "../assets/Vector.svg";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";

const Header: React.FC = () => {
    return (
        <>
            <div className="bg-custom-green h-[70px] flex items-center justify-around">
                <div>
                    <Image
                        src={Iconheaderimages}
                        alt="logo"
                        style={{
                            width: "6.5625rem",
                            height: "3.3125rem",
                        }}
                    />
                </div>

                <div className="flex justify-center items-center gap-[3.75rem] text-1rem">
                    <div className="font-oxygen text-customwhite-color">Top Destination</div>
                    <div className="font-oxygen text-customwhite-color">Food & Drinks</div>
                    <div className="font-oxygen text-customwhite-color">Activities & Experiences</div>
                    <div className="font-oxygen text-customwhite-color">Travel Tips</div>
                </div>

                <div className="flex items-center space-x-4">
                    <FaFacebookF className="text-white" />
                    <BsTwitterX className="text-white" />
                    <LinkedInIcon className="text-white" />
                    <InstagramIcon className="text-white" />
                </div>
            </div>
        </>
    );
};

export default Header;
