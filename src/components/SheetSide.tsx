import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Iconheaderimages from "../assets/Vector.svg";
import Image from "next/image";
import arrowimg from "../assets/arrow.svg"
import { X } from "lucide-react";

const SheetSide = ({ open, onClose }: { open: boolean; onClose: () => void }) => (
    <Sheet open={open} onOpenChange={onClose}>
        <SheetContent
            side="left"
            className="bg-custom-green-50 w-[40%] p-6 shadow-xl transition-all duration-300 ease-in-out"
        >
            <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
            </VisuallyHidden>

            <div className="absolute top-4 right-4 z-50">
                <button
                    className="text-white hover:bg-white/20 p-2 rounded-full transition-all duration-300"
                    onClick={onClose}
                    aria-label="Close navigation menu"
                >
                    <X className="w-6 h-6 text-white" />
                </button>
            </div>

            <div className="mb-8 flex items-center justify-start">
                <Image
                    src={Iconheaderimages}
                    alt="logo"
                    className="transition-transform hover:scale-105"
                    style={{
                        width: "6.5625rem",
                        height: "3.3125rem",
                    }}
                />
            </div>

            <div className="space-y-4">
                {[
                    "Top Destination",
                    "Food & Drinks",
                    "Activities & Experiences",
                    "Travel Tips"
                ].map((item) => (

                    <div
                        key={item}
                        className="font-oxygen text-customwhite-color cursor-pointer group flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-opacity-20 hover:bg-white"
                    >
                        <span className="text-lg font-medium group-hover:tracking-wider transition-all duration-300">
                            {item}
                        </span>
                        <Image
                            src={arrowimg}
                            alt="arrow"
                            width={11}
                            height={20}
                            className="transform transition-transform group-hover:translate-x-1 "
                        />
                    </div>
                ))}
            </div>
        </SheetContent>
    </Sheet>
);

export default SheetSide;