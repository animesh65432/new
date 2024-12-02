import React from 'react'
import { Card } from "../../components/ui/card"
import { CardOfTrending } from "../../helper"
import Image from 'next/image'

const Trending: React.FC = () => {
    return (
        <>
            <Card>
                <div>
                    <p className='text-2xl font-poppins ml-[24px]  text-[28px] mt-[24px]'>Trending</p>
                </div>
                <div className='flex flex-col gap-[19px]'>
                    {
                        CardOfTrending.map((Trending, Index) => {
                            return <>

                                <div className='p-8 flex flex-row '>
                                    <div>
                                        <Image src={Trending.image} width={182} height={164} alt={`${Trending.image}`} />
                                    </div>
                                    <div></div>
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