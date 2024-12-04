import React from 'react'
import Image from 'next/image'
import ProductOne from "../../../public/images/products/Frame1000002773(1).png"
import ProductTwo from "../../../public/images/products/Frame1000002773.png"
import ProductThree from "../../../public/images/products/Frame1000002773(3).png"
import ProductFour from "../../../public/images/products/Frame1000002773(2).png"


const Product: React.FC = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className="grid grid-cols-3 place-items-stretch">
                <div className='flex items-center justify-center'>
                    <Image
                        src={ProductThree}
                        alt="First column image"
                        width={292}
                        height={665}
                        className="rounded-lg shadow-lg"
                    />
                </div>

                <div className="flex flex-1 flex-col  gap-6  ">

                    <div className='flex-1'>
                        <Image
                            src={ProductFour}
                            alt="Row 1 Image 1"
                            width={500}
                            height={300}
                            className="rounded-lg shadow-md w-full"

                        />

                    </div>
                    <div className='flex-1 '>
                        <Image src={ProductOne} alt='' width={500} height={300} className='w-full' />
                    </div>

                </div>
                <div>
                    <div>
                        <Image src={ProductTwo} alt='' width={292} height={665} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
