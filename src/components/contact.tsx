import React from 'react'
import Section from './Section'
import { EarthCanvas } from './Canvas'

const Contact = () => {
    return (
        // <section id="contact" className="fit-height snap-center relative flex flex-wrap items-center">
        <section id="contact" className="relative flex flex-wrap items-center py-10">
            <Section>
                <div className="py-10 pt-20">
                    <p className='text-gray-100 mb-2 heading-text'>Contact</p>
                    <h2 className="text-4xl text-white font-bold uppercase heading-text half-underline">Get a Quote</h2>
                </div>
                <div className="grid grid-cols-2">
                    <div>
                        <input type="text" name="" className="w-full py-4 px-4 rounded-2xl bg-gray-200 text-black border border-[rgb(var(--g-lite-color))] outline-[rgb(var(--black-color))] my-2 placeholder-[rgba(0,0,0,0.5)]" placeholder="Name" id="" />
                        <input type="email" name="" className="w-full py-4 px-4 rounded-2xl bg-gray-200 text-black border border-[rgb(var(--g-lite-color))] outline-[rgb(var(--black-color))] my-2 placeholder-[rgba(0,0,0,0.5)]" placeholder="Email" id="" />
                        <input type="text" name="" className="w-full py-4 px-4 rounded-2xl bg-gray-200 text-black border border-[rgb(var(--g-lite-color))] outline-[rgb(var(--black-color))] my-2 placeholder-[rgba(0,0,0,0.5)]" placeholder="Subject" id="" />
                        <textarea name="" className="w-full py-4 px-4 rounded-2xl bg-gray-200 text-black border border-[rgb(var(--g-lite-color))] outline-[rgb(var(--black-color))] my-2 placeholder-[rgba(0,0,0,0.5)]" id="" cols={30} rows={8} placeholder="Write your message ..."></textarea>

                        <button className="px-8 py-2 text-lg font-medium text-white shadow-lg bg-[rgb(255,255,255,0.5)] hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 rounded-xl">Submit</button>
                    </div>
                    <div>
                        {/* World Round */}
                        <EarthCanvas />
                    </div>
                </div>

                {/* Scroll Down arrow button */}
                <span className="absolute bottom-[30%] right-[1rem] translate-y-1/2 text-white flex items-center rotate-90 cursor-pointer select-none"
                    onMouseEnter={() => {
                        if(!document.querySelector("#scroll-top-arrow-svg")?.classList.contains('-translate-x-1'))
                        {
                            document.querySelector("#scroll-top-arrow-svg")?.classList.add("-translate-x-1")
                        }
                    }}

                    onMouseLeave={() => {
                        if(document.querySelector("#scroll-top-arrow-svg")?.classList.contains('-translate-x-1'))
                        {
                            document.querySelector("#scroll-top-arrow-svg")?.classList.remove("-translate-x-1")
                        }
                    }}

                    onClick={() => {
                        document.querySelector('#main-container')?.scrollTo(0, 0)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition-all duration-300" id='scroll-top-arrow-svg'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span className="font-medium uppercase text-sm ml-2" style={{letterSpacing: "3px"}}>Scroll To Top</span>
                </span>
            </Section>
        </section>
    )
}

export default Contact