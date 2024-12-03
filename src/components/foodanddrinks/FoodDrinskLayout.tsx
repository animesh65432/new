import React from "react";
import { CardOfFooddrinksandTopdestination } from "../../helper"
import { CardOFTopDestinationsAndFoods, Advertisement } from "../../components"
import { Button } from "../../components/ui/button"
import ArroIcon from "../../assets/arrow_outward.svg"
import Image from "next/image";

const FoodDrinkLayout: React.FC = () => {
    return <>
        <div className="mt-[100px] flex w-[1654px]   space-x-8  ml-[133px] mr-[133px] ">
            <div>
                {

                    CardOfFooddrinksandTopdestination.map((obj, Index) => {
                        return <>
                            <CardOFTopDestinationsAndFoods key={Index} title={obj.title} published={obj.published} description={obj.description} star={obj.star} by={obj.by} image={obj.image} />

                        </>
                    })
                }
            </div>
            <div >
                <Advertisement />
            </div>
        </div>
        <div className="flex justify-center items-center mt-[50px]">
            <Button className="bg-custom-green w-[220px] h-[65px] rounded-none text-[18px] flex items-center gap-2 font-medium">
                VIEW MORE
                <Image
                    src={ArroIcon}
                    alt="arrow"
                    width={13}
                    height={13}
                />
            </Button>
        </div>
    </>
}


export default FoodDrinkLayout