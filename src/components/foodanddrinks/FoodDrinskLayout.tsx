import React from "react";
import { CardOfFooddrinksandTopdestination } from "../../helper"
import { CardOFTopDestinationsAndFoods, Advertisement } from "../../components"
import { Button } from "../../components/ui/button"
import ArroIcon from "../../assets/arrow_outward.svg"
import Image from "next/image";

const FoodDrinkLayout: React.FC = () => {
    return <>
        <div className="mt-[6.25rem] flex w-[103.375rem] space-x-8 ml-[8.3125rem] mr-[8.3125rem] ">
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
                <Advertisement />//fix
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