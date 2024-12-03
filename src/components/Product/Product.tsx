import React from 'react'
import { Button } from "../../components/ui/button"
import Image from 'next/image'

const Product: React.FC = () => {
    return (
        <div className='flex justify-center it'>
            <div className="flex flex-row m-[80px] h-auto gap-[0.1rem]">
                <div className="bg-custom-prink-color flex flex-col w-[300px] h-[870px]">
                    <div className='mt-[1rem] ml-[2rem]'>
                        <Button className="bg-custom-grey-color rounded-none">
                            EXPLORE
                        </Button>
                    </div>

                    <div className='flex flex-col ml-[2rem] mt-[2rem]'>
                        <p className="text-custom-dark-verun-color">Little Ones</p>
                        <p className="text-custom-dark-verun-color">Apparel</p>
                        <p className="text-custom-little-dark-color-50 mt-[1rem]">
                            Get Upto <span className="text-custom-little-dark-color-75">20% OFF</span>
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <Image
                            src="/images/products/cute-plush-toys.png"
                            alt="Photo of toys"
                            width={250}
                            height={250}
                            className="w-full h-[250px] object-cover"
                        />
                        <Image
                            src="/images/products/baby-clothes.png"
                            alt="Photo of baby clothes"
                            width={250}
                            height={250}
                            className="w-full h-[250px] object-cover"
                        />
                        <Image
                            src="/images/products/pngegg.png"
                            alt="Photo of baby clothes"
                            width={250}
                            height={250}
                            className="w-full h-[250px] object-cover"
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-[40px]'>
                    <div className='bg-custom-light-green w-[800px] h-[410px] ml-[15px] mr-[15px]'>
                        <div className='flex '>
                            <div className='w-[500px]'>
                                <p className='text-custom-green font-semibold text-[26px] ml-[20px] mt-[40px] '>Explore Top Men Clothing's</p>
                                <div className='border-t-[1px] border-custom-green  ml-[200px] mt-[15px] mr-[60px]'></div>

                                <Image src="/images/products/handsome-young-man.png" alt='/images/products/handsome.png' width={400} height={400} />
                            </div>
                            <div>
                                <Image src="/images/products/black-t-shirt.png" alt='/images/products/black-t-shirt.png' width={370} height={10} />
                            </div>
                        </div>


                    </div>
                    <div className='bg-custom-prink-color h-[415px] ml-[15px] mr-[15px] flex flex-col'>
                        <div>
                            <div className='flex justify-center items-center w-[300px] h-[60px] bg-customeyollow-color ml-[10rem] mt-[4rem]'>
                                <div className='font-semibold text-[1.3rem] '>New Arrivals !</div>
                            </div>
                            <div className='ml-[3rem] flex flex-row'>
                                <div>
                                    <Image src="/images/products/cheerful-smiling.png" alt='images' width={263} height={263} />
                                </div>
                                <div>
                                    <Image src="/images/products/still-life-spring-wardrobe-switch.png" alt='' width={250} height={250} />
                                </div>
                            </div>

                        </div>
                        <div></div>
                    </div>
                </div>
                <div className='bg-custom-light-blue w-[300px] h-[870px]'>
                    <div className='mt-[1rem] ml-[2rem]'>
                        <Button className="bg-custom-grey-color rounded-none">
                            EXPLORE
                        </Button>
                    </div>
                    <div className='flex flex-col ml-[2rem] mt-[2rem]'>
                        <p className="text-custom-blue-color">Kid's kingdom</p>
                        <p className="text-custom-moderate-blue-color mt-[1rem]">
                            Get Upto 20% OFF
                        </p>
                    </div>
                    <div className="flex flex-col mt-[4rem]">
                        <Image
                            src="/images/products/pngegg(3)1.png"
                            alt="Photo of toys"
                            width={250}
                            height={200}
                            className="w-full h-[250px] object-cover"
                        />

                        <Image
                            src="/images/products/pngegg(2)1.png"
                            alt="Photo of baby clothes"
                            width={250}
                            height={400}
                            className="w-full h-[400px] object-cover mt-[1rem]"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product