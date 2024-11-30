import React from 'react'
import { Card } from "../components/ui/card"
import { CardOfTrending } from "../helper"
import Image from 'next/image'

const Trending: React.FC = () => {
    return (
        <>
            <Card>
                <div>
                    <p className='text-2xl font-poppins ml-3  text-[1.75rem]'>Trending</p>
                </div>
                <div className='flex flex-col'>
                    {
                        CardOfTrending.map((Trending, Index) => {
                            return <>

                                <div className='p-8'>
                                    <Image src={Trending.image} width={140} height={140} alt={`${Trending.image}`} />
                                </div>

                            </>
                        })
                    }
                </div>
            </Card >


        </>
    )
}

export default Trending