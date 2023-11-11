"use client"

import { StarCanvas } from '@/components/Canvas'
import Section from '@/components/Section'
import Contact from '@/components/contact'
import Github from '@/components/svg/github'
import Linkedin from '@/components/svg/linkedin'
import Work from '@/components/work'
import About from '@/components/About'
import HeroSection from '@/components/HeroSection'

export default function Portfolio1() {
    return (
        <div className="snap-y snap-mandatory scroll-smooth overflow-y-auto h-screen" id='main-container'>

            {/* Header */}
            <div className="absolute top-0 w-full text-white h-[100px] grid grid-cols-2 px-20">
                <div className="h-full flex items-center">
                    <span className='font-semibold text-4xl cursor-pointer select-none'
                        onClick={() => {
                            document.querySelector('#main-container')?.scrollTo(0, 0)
                        }}
                    >Adil Rehman</span>
                </div>
                <div className="flex justify-center items-center">
                    <ul className="list-none flex flex-wrap">
                        <li className="mx-10">
                            <span className="text-2xl font-medium">About</span>
                        </li>

                        <li className="mx-10">
                            <span className="text-2xl font-medium">Portfolio</span>
                        </li>

                        <li className="mx-10">
                            <span className="text-2xl font-medium">Contact</span>
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
