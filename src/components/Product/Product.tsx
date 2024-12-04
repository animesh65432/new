import React from 'react'
import Image from 'next/image'
import FirstHalf from "../../../public/images/products/FirstPhoto.png"
import SecondFirstHalf from "../../../public/images/products/SecondFirstHalf.png"
import SeconSecondHalf from "../../../public/images/products/SecondSecondhalf.png"
import ThirdHalf from "../../../public/images/products/Thirdphoto.png"

const Product: React.FC = () => {
    return (
        <div className="flex justify-between items-start mt-[100px] ml-[75px] mr-[75px]">
            <div className="relative w-[292px] h-[890px]">
                <Image src={FirstHalf} alt='FirstPhoto' fill />
            </div>
            <div className="flex flex-col gap-[25px] w-[1015px]">
                <div className="relative w-full h-[416px]">
                    <Image src={SecondFirstHalf} alt='SecondSecondhalf' fill />
                </div>
                <div className="relative w-full h-[453px]">
                    <Image src={SeconSecondHalf} alt='SeconSecondHalf' fill />
                </div>
            </div>
            <div className="relative w-[292px] h-[890px]">
                <Image src={ThirdHalf} alt='FirstPhoto' fill />
            </div>
        </div>
    );
};

export default Product;