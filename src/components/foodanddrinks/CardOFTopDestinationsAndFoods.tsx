import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import StarImage from "../../assets/HeroSectionstar.svg"
import { Button } from "../../components/ui/button"

type Props = {
    title: string,
    description: string,
    star: number,
    by: string,
    published: string,
    image: string
}

const CardOFTopDestinationsAndFoods: React.FC<Props> = (props) => {

    return (

        <Card className="flex mb-[28px] w-[1057px] h-[350px]  pt-[24px] pr-[30px] pb-[16px] pl-[28px] gap-[1rem]">
            <div>
                <Image src={props.image} alt="cardimages" width={284} height={274} />
            </div>
            <div className='w-[665px] h-[278px]'>
                <CardHeader>
                    <CardTitle className='text-[32px] font-semibold font-sans' >{props.title}</CardTitle>
                    <CardDescription className="font-oxygen text-[20px] leading-[36.4px]">{props.description}</CardDescription>
                </CardHeader>
                <div className='flex mt-[4px] ml-[24px] '>
                    <Image src={StarImage} alt='star' width={20} height={20} />
                    <Image src={StarImage} alt='star' width={20} height={20} />
                    <Image src={StarImage} alt='star' width={20} height={20} />
                    <Image src={StarImage} alt='star' width={20} height={20} />
                </div>

                <CardFooter className="text-sm text-gray-500 font-sans gap-[24px]  flex flex-col mr-[300px]">
                    <div className='flex gap-[20px] mt-[10px]'>
                        <span className='font-oxygen text-[20px] '>by <span className='font-sans text-[20px] font-semibold underline'>{props.by}</span>  </span>        <span className='font-sans text-[20px] font-normal leading-[30px] text-left  decoration-solid decoration-from-font decoration-skip-ink-none'> Published: {props.published}</span></div>
                    <div className='mr-[250px] h-[46px] w-[139px] ml-[35px] '>
                        <Button className='bg-customwhite-color rounded-none text-custom-green border-2 border-custom-green text-[16px]'>Read More</Button>
                    </div>
                </CardFooter>

            </div>
        </Card>

    )
}

export default CardOFTopDestinationsAndFoods
