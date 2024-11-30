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
    console.log(props)
    return (

        <Card className="flex mb-[28px] w-[800px] h-[250px] p-6  gap-4">
            <div>
                <Image src={props.image} alt="cardimages" width={200} height={190} />
            </div>
            <div>
                <CardHeader>
                    <CardTitle >{props.title}</CardTitle>
                    <CardDescription className="">{props.description}</CardDescription>
                </CardHeader>
                <p className="flex text-customeyollow-color-75">
                    {Array.from({ length: props.star }, (_, i) => (
                        <span key={i}>&#9733;</span>
                    ))}
                </p>

                <CardFooter className="text-sm text-gray-500 font-sans gap-[59px]">
                    <span>by {props.by}  </span>        <span className='font-sans text-[20px] font-normal leading-[30px] text-left underline decoration-solid decoration-from-font decoration-skip-ink-none'> Published: {props.published}</span>
                </CardFooter>
            </div>
        </Card>

    )
}

export default CardOFTopDestinationsAndFoods
