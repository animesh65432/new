import React from 'react'
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"

const Newsletter: React.FC = () => {
    return (
        <div style={{
            backgroundImage: `url('/images/newsletter/image.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }} className='h-[24rem] flex justify-center items-center'>

            <div >
                <p className='text-customwhite-color-50 text-[2.2rem] font-semibold'>SIGN UP FOR OUR NEWSLETTER</p>
                <div className='flex mt-[2rem] gap-[2rem]'>
                    <div>
                        <Input placeholder='Your E-Mail' className='h-[3rem] w-[25rem] bg-customwhite-color'></Input>
                    </div>
                    <div>
                        <Button className='rounded-none w-[8rem] h-[3rem]'>SUBMIT</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter