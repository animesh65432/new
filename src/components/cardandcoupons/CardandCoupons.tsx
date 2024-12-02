import React from 'react'
import { CardandCouponsLists } from "../../helper"
import { CuponCard } from "../../components"

const CardandCoupons: React.FC = () => {
    return (

        <div
            style={{
                backgroundImage: `url('/images/cardandcupons/cardandcupons.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className=' w-[1519px] h-[800px] p-3'
        >
            <div>
                <div className='p-16'>
                    <p className='text-customwhite-color-50 text-[1.5rem] mb-[2rem]'>EXPLORE FANTASTIC  DEALS</p>

                    <p className='text-customwhite-color text-[2rem] font-semibold'>
                        OUR LATEST OFFERS AND COUPONS
                    </p>
                </div>
            </div>

            <div className='flex p-[5rem] gap-[6rem] '>
                {
                    CardandCouponsLists.map((Cupon, index) => <CuponCard key={index} title={Cupon.title} image={Cupon.image} />)
                }
            </div>
        </div>


    )
}

export default CardandCoupons