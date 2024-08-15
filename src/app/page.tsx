"use client"

import { StarCanvas } from '@/components/Canvas'
import Contact from '@/components/contact'
import Github from '@/components/svg/github'
import Linkedin from '@/components/svg/linkedin'
import Work from '@/components/work'
import About from '@/components/About'
import HeroSection from '@/components/HeroSection'
import Link from 'next/link'
import { sora } from './fonts'

export default function Home() {
    return (
        // <div className="snap-y snap-mandatory scroll-smooth overflow-y-auto h-screen" id='main-container'>
        <div className="scroll-smooth overflow-y-auto h-screen" id='main-container'>
            {/* Header */}
            <div className={`header absolute top-[10px] left-1/2 -translate-x-1/2 w-max text-white h-[80px] grid grid-cols-2 px-20 ${sora.className}`}>
                <div className={`h-full flex items-center`}>
                    <span className='font-semibold text-4xl cursor-pointer select-none'
                        onClick={() => {
                            document.querySelector('#main-container')?.scrollTo(0, 0)
                        }}
                    >Adil Rehman</span>
                </div>
                <div className="flex justify-center items-center">
                    <ul className="list-none flex flex-wrap">
                        <li className="mx-10">
                            <Link href={'#about'} className="text-xl font-medium">About</Link>
                        </li>

                        <li className="mx-10">
                            <Link href={'#work'} className="text-xl font-medium">Portfolio</Link>
                        </li>

                        <li className="mx-10">
                            <Link href={'#contact'} className="text-xl font-medium">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Social links */}
            <div className="absolute top-[50%] left-[20px] -translate-y-1/2">
                <ul>
                    <li className="my-3">
                        <Linkedin />
                    </li>
                    <li className="my-3">
                        <Github />
                    </li>
                </ul>
            </div>

            {/* Hero section */}
            <HeroSection />

            {/* About Section */}
            <About />

            {/* Projects List Section */}
            <Work />

            {/* Contact us Section */}
            <Contact />
            
            {/* Stars Particles */}
            <StarCanvas />
        </div>
    )
}