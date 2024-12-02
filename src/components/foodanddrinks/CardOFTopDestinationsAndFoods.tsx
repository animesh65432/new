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

type Props = {
    title: string,
    description: string,
    star: number,
    by: string,
    published: string,
    image: string
}

const CardOFTopDestinationsAndFoods: React.FC<Props> = (props) => {
    console.log(props.title)
    return (

        <Card className="flex mb-[28px] w-[1057px] h-[330px]  pt-[28px] pr-[32px] pb-[18px] pl-[32px] gap-[1rem]">
            <div>
                <Image src={props.image} alt="cardimages" width={284} height={274} />
            </div>
            <div className='w-[665px] h-[278px]'>
                <CardHeader>
                    <CardTitle className='text-[32px] font-semibold' >{props.title}</CardTitle>
                    <CardDescription className="text-[20px]">{props.description}</CardDescription>
                </CardHeader>
                <div className='w-[100px] h-[20px] '>
                    <p className="flex text-customeyollow-color-75 ml-[2rem]">
                        {Array.from({ length: props.star }, (_, i) => (
                            <span key={i}>&#9733;</span>
                        ))}
                    </p>
                </div>

                <CardFooter className="text-sm text-gray-500 font-sans gap-[59px] mt-[1rem]">
                    <span className='font-oxygen text-[20px]'>by <span className='font-oxygen text-[20px] font-semibold underline'>{props.by}</span>  </span>        <span className='font-sans text-[20px] font-normal leading-[30px] text-left  decoration-solid decoration-from-font decoration-skip-ink-none'> Published: {props.published}</span>
                </CardFooter>
            </div>
        </Card>

    )
}

export default CardOFTopDestinationsAndFoods
