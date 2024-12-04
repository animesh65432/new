import React from 'react'
import Image from 'next/image'
import Toy from "../../../public/images/products/cute-plush-toys.png"
import Baby from "../../../public/images/products/baby-clothes.png"
import { Button } from "../../components/ui/button"
import ArrowTop from "../../assets/arrow_outward.svg"
import CuteGirl from "../../../public/images/products/pngegg.png"
import BlackTshirt from "../../../public/images/products/black-t-shirt.png"
import HandSomeyoungMan from "../../../public/images/products/handsome-young-man.png"
import Productone from "../../../public/images/products/Frame1000002773(2).png"
import Producttwo from "../../../public/images/products/Frame1000002773(1).png"
import Productthree from "../../../public/images/products/Frame1000002773.png"


const Product: React.FC = () => {
    return (
        <div className='flex justify-center items-center mt-[100px]'>
            <div className='grid grid-cols-[auto_1fr_auto] w-full gap-[20px]'>
                <div className='w-[292px]  bg-custom-prink-color h-full'>
                    <div className=' flex justify-center mt-[32px]'>
                        <Button className='bg-custom-grey-color rounded-none w-[163px] h-[48px]'>EXPLORE <span><Image src={ArrowTop} alt='arrow' width={20} height={20} /></span></Button>
                    </div>

                    <div className='text-[30px] font-oxygen leading-10 flex flex-col items-center mt-[26px]'>
                        <p className='block text-custom-dark-verun-color font-bold'>Little Ones</p>
                        <p className='block text-custom-dark-verun-color font-bold'>Apparel</p>
                    </div>

                    <div className='mt-[9px] flex justify-center'>
                        <p className='text-custom-little-dark-color text-[26px]'>Get Upto 20% Off</p>
                    </div>

                    <div className='w-[234px] h-[200px]'>
                        <Image src={Toy} alt='toy' width={234} height={200} />

                    </div>
                    <div className='flex justify-end mb-[100px]'>
                        <div className='w-[260px] h-[261px]'>  <Image src={Baby} alt='baby' width={260} height={261} /></div>
                    </div>

                    <div className='flex justify-start '>
                        <Image src={CuteGirl} alt='CuteGirl' width={327} height={321} className='' />
                    </div>

                </div>
                <div className='grid grid-cols-2 w-[1015px]'>

                    <div className='bg-custom-light-green h-[450px] flex w-[1015px]'>
                        <div className='flex justify-between'>
                            <div className='mt-[27px] '>
                                <span className='text-[36px] font-oxygen text-custom-green font-bold ml-[43px] '>Explore Top Men Clothing's</span>
                                <div>
                                    <Image src={HandSomeyoungMan} alt='HandSomeyoungMan' width={500} height={300} />
                                </div>
                            </div>
                            <div >
                                <Image src={BlackTshirt} alt='blacktshirt' width={500} height={320} />
                            </div>
                        </div>
                        <div className='custom-light-yellow-background-color'>

                        </div>
                    </div>

                </div>
                <div className='w-[292px] bg-custom-light-blue'>

                </div>

            </div >
        </div >
    );
};

export default Product;
