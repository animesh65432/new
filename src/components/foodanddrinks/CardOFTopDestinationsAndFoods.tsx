"use client"
import React from 'react'
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import StarImage from "../../assets/HeroSectionstar.svg"
import { Button } from "../../components/ui/button"
import { useRouter } from "next/navigation"

type Props = {
    title: string,
    description: string,
    star: number,
    by: string,
    published: string,
    image: string
}

const CardOFTopDestinationsAndFoods: React.FC<Props> = (props) => {
    const router = useRouter()

    const navigatetoblog = () => {
        router.push("/blog")
    }
    return (

        <Card className="flex mb-[1.75rem] w-[100vh] h-[43vh] pt-[1.5rem] pr-[1.875rem] pb-[1rem] pl-[1.75rem] gap-[1rem]" onClick={navigatetoblog}>
            <div>
                <Image src={props.image} alt="cardimages" width={284} height={274} />
            </div>
            <div className='w-[41.56rem] h-[17.38rem]'>
                <CardHeader>
                    <CardTitle className='text-[2rem] font-semibold font-sans' >{props.title}</CardTitle>
                    <CardDescription className="font-oxygen text-[1.25rem] leading-[2.275rem]">{props.description}</CardDescription>
                </CardHeader>
                <div className='flex mt-[0.25rem] ml-[1.5rem] '>
                    <Image src={StarImage} alt='star' width={20} height={20} />
                    <Image src={StarImage} alt='star' width={20} height={20} />
                    <Image src={StarImage} alt='star' width={20} height={20} />
                    <Image src={StarImage} alt='star' width={20} height={20} />
                </div>

                <CardFooter className="text-sm text-gray-500 font-sans gap-[1.5rem] flex flex-col mr-[18.75rem]">
                    <div className='flex gap-[1.25rem] mt-[0.625rem]'>
                        <span className='font-oxygen text-[1.25rem] '>by <span className='font-sans text-[1.25rem] font-semibold underline'>{props.by}</span>  </span>
                        <span className='font-sans text-[1.25rem] font-normal leading-[1.875rem] text-left  decoration-solid decoration-from-font decoration-skip-ink-none'> Published: {props.published}</span>
                    </div>
                    <div className='mr-[12.5rem] h-[2.875rem] w-[8.6875rem] ml-[2.5rem]'>
                        <Button className='bg-customwhite-color rounded-none text-custom-green border-2 border-custom-green text-[1rem] hover:text-customwhite-color'>Read More</Button>
                    </div>
                </CardFooter>

            </div>
        </Card>

    )
}

export default CardOFTopDestinationsAndFoods
