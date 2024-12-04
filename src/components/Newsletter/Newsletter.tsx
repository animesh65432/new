import React from 'react'
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"

const Newsletter: React.FC = () => {
    return (
        <div style={{
            backgroundImage: `url('/images/newsletter/image.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }} className='h-[24rem] flex justify-center items-center mt-[100px]'>

            <div >
                <p className='text-customwhite-color-50  font-oxygen font-bold text-[44px]'>SIGN UP FOR OUR NEWSLETTER</p>
                <div className='flex mt-[2rem] gap-[12px]'>
                    <div>
                        <Input placeholder='Your E-Mail' className='h-[62px] w-[440px] bg-customwhite-color rounded-none'></Input>
                    </div>
                    <div>
                        <Button className='rounded-none w-[145px] h-[62px] font-sans text-[20px] font-medium'>SUBMIT</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter