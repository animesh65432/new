import React from 'react'
import SpotiyPodcastIcon from "../assets/podcast/Vector.svg"
import Image from 'next/image'

const PodCast: React.FC = () => {
    return (
        <div className='mt-[3rem]'>
            <div className='flex justify-center items-center gap-[1rem]'>
                <div className='w-[174px] h-[54px]'>
                    <Image src={SpotiyPodcastIcon} width={174} height={54} alt='spotifyicon' />
                </div>
                <div>
                    <p className='text-custom-green font-semibold text-[2rem]'>PODCASTS</p>
                </div>
            </div>
        </div>
    )
}

export default PodCast
