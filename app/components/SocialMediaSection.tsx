import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import StatisticsSection from "./StatisticsSection";

export default function SocialMediaSection() {
    return (
        <div className='bg-white h-fit flex flex-col text-black gap-8'>

            {/* Secțiunea cu statistici */}
            <div className="w-full mx-auto">
                <StatisticsSection />
            </div>

            {/* Conținutul principal - text și linkuri */}
            <div className='flex flex-col md:flex-row items-center w-full max-w-screen-lg mx-auto gap-8'>

                {/* Text și linkuri */}
                <div className='w-full p-6 flex flex-col gap-4 xl:gap-8 xl:p-12 md:w-1/2'>
                    <h1 className='font-extrabold sm:text-2xl lg:text-3xl xl:text-4xl'>
                        Follow us on Social Media!
                    </h1>
                    <p className='text-base sm:text-lg lg:text-xl text-gray-700'>
                        Fii la zi cu activitățile noastre, alătură-te conversației și fă parte din<br />
                        comunitatea noastră pe Instagram, Facebook și TikTok!
                    </p>

                    <div className="flex flex-col gap-4 sm:gap-6 mt-6">
                        <Link href="/" target="_blank" className="flex items-center gap-4">
                            <Image width={39} height={33} src="/assets/facebookbl.png" alt="Facebook" />
                            <p className="text-xs sm:text-sm md:text-base text-gray-700">facebook.com/RoEtCoInternational</p>
                        </Link>

                        <Link href="/" target="_blank" className="flex items-center gap-4">
                            <Image width={33} height={30} src="/assets/instagrambl.png" alt="Instagram" />
                            <p className="text-xs sm:text-sm md:text-base text-gray-700">instagram.com/RoEtCoInternational</p>
                        </Link>

                        <Link href="/" target="_blank" className="flex items-center gap-4 -ml-1">
                            <Image width={39} height={33} src="/assets/tiktokbl.png" alt="TikTok" />
                            <p className="text-xs sm:text-sm md:text-base text-gray-700">tiktok.com/@RoEtCoInternational</p>
                        </Link>
                    </div>
                </div>

                {/* Imagine */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        width={596}
                        height={382}
                        src="/assets/socialmedia.jpg"
                        alt='socialmedia'
                        className="w-full h-auto max-w-md"
                    />
                </div>
            </div>

        </div>
    )
}
