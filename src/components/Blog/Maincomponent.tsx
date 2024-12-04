import React from 'react'
import { Advertisement } from "../../components"
import BlogMainPhoto from "../../../public/images/blog/image.png"
import Image from 'next/image'
import blogpage from "../../assets/blog/Vector.svg"
import { Button } from "../../components/ui/button"
import StarIcon from "../../assets/HeroSectionstar.svg"
import { Card, CardHeader, CardContent } from "../../components/ui/card"
import ArroIcon from "../../assets/arrow_outward.svg"
import PrevLeftIcon from "../../assets/blog/arrow_left_alt.svg"
import FoodIcon from "../../assets/blog/Vector (1).svg"
import ShareIcon from "../../assets/blog/ios_share.svg"
import BlogStar from "../../assets/blog/Stars.svg"
import { Input } from "../../components/ui/input"
import { comments } from "../../helper"
import FiveStaricon from "../../assets/blog/Frame51.svg"

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

                            <Image src={FoodIcon} alt='foodicon' width={24} height={24} className='ml-[30px]' />
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

                        <div className='mt-[37px] flex'>
                            <div>
                                <div className="w-[331px] h-[50px] bg-custom-green-hover rounded-lg flex items-center justify-center text-slate-50 font-oxygen font-bold">
                                    Overall Qulture Star Rating: 4.8/5
                                    <span className="ml-2">
                                        <Image src={StarIcon} alt="star" width={20} height={20} />
                                    </span>
                                </div>

                            </div>


                            <div className='ml-[300px]'>
                                <Button className='bg-customblue-color-50 font-sans rounded-md font-medium w-[160px] h-[52px] text-[24px]'>Share<Image src={ShareIcon} alt='Thumsupright' width={26} height={26} /></Button>
                            </div>

                        </div>

                        <div className='mt-[57px]'>
                            <span className=' text-[44px] font-sans font-semibold italic '>Review</span>
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

                        <div className="bg-custom-pro-trip-background-color-50 h-[200px] mt-[56px] pl-[59px] leading-[36px] w-[1032] pr-[59px] pt-[30px] pb-[30px] border-l-[4px] border-customeyollow-color">
                            <div className="text-[24px] leading-[48px]">
                                <span className='font-bold '>Pro Tip </span>: Arrive early to enjoy the vibrant atmosphere as the restaurant fills with the sounds of laughter and conversation, enhancing your dining experience.
                            </div>
                        </div>

                        <Card className='mt-[80px] rounded-none mb-[80px]'>
                            <CardHeader className='uppercase font-oxygen text-[28px]'>
                                Qulture Rating
                            </CardHeader>
                            <p className='border-t border-custom-black-50 ml-[60px] mr-[60px]'></p>
                            <CardContent>
                                <ul className='list-disc ml-[78px] text-[20px] mb-[18px] mt-[20px]'>
                                    <li className="items-center list-item" >
                                        <div className='flex items-center'>
                                            Ambiance
                                            <div className='flex space-x-2 ml-2'>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>


                                <ul className='list-disc ml-[78px] text-[20px] mb-[18px] mt-[20px]'>
                                    <li className="items-center list-item" >
                                        <div className='flex items-center'>
                                            Food Quality
                                            <div className='flex space-x-2 ml-2'>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul className='list-disc ml-[78px] text-[20px] mb-[18px] mt-[20px]'>
                                    <li className="items-center list-item" >
                                        <div className='flex items-center'>
                                            Service
                                            <div className='flex space-x-2 ml-2'>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul className='list-disc ml-[78px] text-[20px] mb-[18px] mt-[20px]'>
                                    <li className="items-center list-item" >
                                        <div className='flex items-center'>
                                            Creativity of Dishes
                                            <div className='flex space-x-2 ml-2'>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul className='list-disc ml-[78px] text-[20px] mb-[18px] mt-[20px]'>
                                    <li className="items-center list-item" >
                                        <div className='flex items-center'>
                                            Overall Experinece
                                            <div className='flex space-x-2 ml-2'>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                                <span><Image src={StarIcon} alt="star" width={20} height={20} /></span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>



                    </div>
                    <div className='w-[569px]'>
                        <Advertisement />
                    </div>



                </div >
            </div>

            <div className='h-[474px] bg-Custom-White-Color p-[35px] overflow-hidden flex'>
                <Card className='w-[787px] h-[327px] p-[30px] ml-[132px] mt-[30px] hover:bg-custom-green hover:text-white'>
                    <div className='flex items-center gap-2 '>

                        <div ><Image src={PrevLeftIcon} alt='prevlefticon' width={26} height={24} />
                        </div>
                        <div><span className='text-custom-green font-oxygen text-[28px] font-semibold'>Previous</span></div>
                    </div>

                    <div>
                        <p className='font-sans text-[32px] font-semibold mt-[20px]'>Explore Vietnam: Top Destinations for an Unforgettable Adventure</p>
                        <p className='font-sans'>Vietnam  is   a country that brims with rich history, and vibrant culture.</p>
                    </div>

                    <div className='mt-[10px]'>
                        <Image src={FiveStaricon} alt='blogmainphoto' width={100} height={20} />
                    </div>

                    <div className='mt-[20px] flex space-x-6'>
                        <div>
                            by <span className=' font-oxygen '>James Locc</span>
                        </div>
                        <div>
                            Published : Jan 08
                        </div>
                    </div>
                </Card>

                <Card className='w-[787px] h-[327px] p-[30px] ml-[132px] mt-[30px] hover:bg-custom-green hover:text-white'>
                    <div className='flex items-center gap-2'>

                        <div><Image src={PrevLeftIcon} alt='prevlefticon' width={26} height={24} className='rotate-180' />
                        </div>
                        <div><span className='text-custom-green font-oxygen text-[28px] font-semibold'>Next</span></div>
                    </div>

                    <div>
                        <p className='font-sans text-[32px] font-semibold mt-[20px]'>Explore Vietnam: Top Destinations for an Unforgettable Adventure</p>
                        <p className='font-sans'>Vietnam  is   a country that brims with rich history, and vibrant culture.</p>
                    </div>

                    <div className='mt-[10px]'>
                        <Image src={FiveStaricon} alt='blogmainphoto' width={100} height={20} />
                    </div>

                    <div className='mt-[20px] flex space-x-6'>
                        <div>
                            by <span className=' font-oxygen '>James Locc</span>
                        </div>
                        <div>
                            Published : Jan 08
                        </div>
                    </div>
                </Card>
            </div>

            <div className='mt-[80px] ml-[132px]'>
                <p className='text-custom-black font-sans text-[44px] font-semibold'>Comments And Ratings</p>
            </div>

            <div className='flex justify-center mt-[40px] '>
                <Card className='w-[1665px] h-[538px] bg-Custom-White-Color'>
                    <CardHeader >
                        <p className='font-sans text-[30px] font-semibold'>Rate This Content</p>
                        <div>
                            <Image src={BlogStar} alt='star' width={400} height={80} />
                        </div>
                    </CardHeader>
                    <div className='mt-[24px] ml-[40px] mb-[30px] flex'>
                        <Input className='rounded-none bg-white w-[1314px] h-[304px] placeholder:font-oxygen placeholder:text-[26px] ' placeholder='Type Your Comment'>
                        </Input>
                        <Button className='bg-custom-green w-[185px] h-[64px] font-oxygen text-[26px] ml-[32px]'>Publish</Button>
                    </div>


                </Card>
            </div>

            <div className='mt-[59px] ml-[133px] mr-[133px]'>
                {
                    comments.map((Comment, index) => {
                        return < >
                            <div className=" mx-auto border px-6 py-4 rounded-lg w-[1665px] mb-[62px]" key={index}>
                                <div className="flex items-center mb-6">
                                    <img
                                        src={Comment.photo}
                                        alt="Avatar"
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <div className="text-lg font-medium text-gray-800">{Comment.name}</div>
                                        <div className="text-gray-500">2 hours ago</div>
                                    </div>
                                </div>
                                <p className="text-lg leading-relaxed mb-6">
                                    {Comment.comment}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">
                                            <i className="far fa-thumbs-up"></i> Like
                                        </a>
                                        <a href="#" className="text-gray-500 hover:text-gray-700">
                                            <i className="far fa-comment-alt"></i> Reply
                                        </a>
                                    </div>
                                    <div className="flex items-center">
                                        <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">
                                            <i className="far fa-flag"></i> Report
                                        </a>
                                        <a href="#" className="text-gray-500 hover:text-gray-700">
                                            <i className="far fa-share-square"></i> Share
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    })
                }
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