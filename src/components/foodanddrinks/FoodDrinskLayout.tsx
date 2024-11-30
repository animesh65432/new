import React from "react";
import { CardOfFooddrinksandTopdestination } from "../../helper"
import { CardOFTopDestinationsAndFoods, Advertisement } from "../../components"
import { Button } from "../../components/ui/button"

const FoodDrinkLayout: React.FC = () => {
    return <>
        <div className="mt-[80px] flex w-[900px]   space-x-8  ml-[80px] ">
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
        <div className=" flex justify-center items-center mt-[50px]">
            <Button className="bg-custom-green w-[10rem] h-[3rem]">VIEW MORE</Button>
        </div>
    </>
}


export default FoodDrinkLayout