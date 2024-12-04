import React from 'react'
import { Advertisement } from "../../components"
import BlogMainPhoto from "../../../public/images/blog/image.png"
import Image from 'next/image'
import blogpage from "../../assets/blog/Vector.svg"
import { Button } from "../../components/ui/button"
import StarIcon from "../../assets/HeroSectionstar.svg"
import { Card, CardHeader, CardContent } from "../../components/ui/card"
import ArroIcon from "../../assets/arrow_outward.svg"
import PrevLeftIcon from "../../assets/arrow_left_alt.svg"
import PrevRightIcon from "../../assets/arrow_right_alt(1).svg"

const Maincomponent = () => {
    return (
        <>
            <div className='mt-[75px] ml-[200px] h-full'>
                <div className='grid grid-cols-2 gap-[54px] '>

                    <div >
                        <Image src={BlogMainPhoto} alt='Blogmainphoto' width={1032} height={617} />

                        <div className='mt-[52px] flex items-center'>
                            <Image src={blogpage} alt='blogpage' width={24} height={24} />
                            <span className='font-oxygen text-[20px] ml-2'>Mermaid Beach, Central GC</span>
                        </div>

                        <div className='mt-[52px] flex justify-between items-center'>
                            <div className='font-oxygen text-[48px] text-custom-green'>
                                ETSU IZAKAYA
                            </div>
                            <div>
                                <p className='text-[24px]'>published jan 08</p>
                            </div>
                        </div>

                        <div className='mt-[37px]'>
                            <Button className='w-[331px] h-[50px] bg-custom-green rounded-none'>
                                Overall Qulture Star Rating: 4.8/5 <span><Image src={StarIcon} alt='star' width={20} height={20} /></span>
                            </Button>
                        </div>

                        <div className='mt-[57px]'>
                            <span className=' text-[44px] font-sans font-semibold'>Review</span>
                        </div>

                        <div className='mt-[45x] font-oxygen leading-[46px] text-[24px]'>
                            <div>
                                Tucked away behind a striking red door on the Gold Coast Highway, Etsu Izakaya immerses diners in the lively izakaya culture of Japan. This hidden gem boasts an inviting yet intimate atmosphere, with low lighting, wooden accents, and traditional Japanese decor that creates a cosy ambiance, perfect for gatherings with friends or a romantic evening out.
                            </div>
                            <div className='mt-[44px]'>The menu is a carefully curated journey through Japanese flavours, starting with the Wagyu beef tataki—a delicate dish that perfectly balances the richness of the beef with the zesty brightness of ponzu and crisp daikon. The robata-grilled skewers come highly recommended, featuring an array of options from succulent chicken thigh to earthy mushrooms, each grilled to perfection, delivering that irresistible smoky flavour.</div>
                            <div className='mt-[44px]'>
                                For those who love seafood, the sashimi platter presents an artful selection of the freshest tuna, kingfish, and salmon, arranged beautifully on ice and garnished with wasabi and pickled ginger, making it a feast for both the eyes and the palate.
                            </div>
                            <div className='mt-[44px]'>
                                To accompany your meal, don’t miss the Yuzu Sake Spritz—a refreshing cocktail that offers a delightful citrus burst, perfectly offsetting the rich flavours of the dishes.
                            </div>

                        </div>

                        <div className="bg-custom-pro-trip-background-color-50 h-[200px] mt-[56px] p-[30px] leading-[36px]">
                            <div className="text-[24px]">
                                <span>Pro Tip </span>: Arrive early to enjoy the vibrant atmosphere as the restaurant fills with the sounds of laughter and conversation, enhancing your dining experience.
                            </div>
                        </div>

                        <Card className='mt-[80px] rounded-none mb-[80px]'>
                            <CardHeader className='uppercase font-oxygen text-[28px]'>
                                Qulture Rating
                            </CardHeader>
                            <p className='border-t border-custom-black-50 ml-[60px] mr-[60px]'></p>
                            <CardContent>
                                <ul className='list-disc ml-[78px] text-[20px] mb-[18px]'>
                                    <li className="items-center list-item">
                                        Ambiance
                                    </li>
                                </ul>


                                <ul className='list-disc ml-[78px] text-[20px] mb-[18px]'>
                                    <li>Ambiance</li>
                                </ul>
                                <ul className='list-disc ml-[78px] text-[20px] mb-[18px]'>
                                    <li>Ambiance</li>
                                </ul>
                                <ul className='list-disc ml-[78px] text-[20px] mb-[18px]'>
                                    <li>Ambiance</li>
                                </ul>
                                <ul className='list-disc ml-[78px] text-[20px]'>
                                    <li>Ambiance</li>
                                </ul>
                            </CardContent>
                        </Card>



                    </div>
                    <div className='w-[569px]'>
                        <Advertisement />
                    </div>



                </div >
            </div>

            <div className='h-[474px] bg-Custom-White-Color p-[35px] overflow-hidden'>
                <Card className='w-[787px] h-[327px]'>
                    <div className='flex'>
                        <div></div>
                    </div>
                </Card>
            </div>

            <div className="flex justify-center items-center mt-[50px] mb-[131px]">
                <Button className="bg-custom-green w-[220px] h-[65px] rounded-none text-[18px] flex items-center gap-2 font-medium">
                    VIEW MORE
                    <Image
                        src={ArroIcon}
                        alt="arrow"
                        width={13}
                        height={13}
                    />
                </Button>
            </div>

        </>

    )
}

export default Maincomponent