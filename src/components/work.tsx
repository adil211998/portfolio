import React from 'react'
import Section from './Section'
import Slider from './Slider/Slider'
import workData from "@/data/work.json"
import Image from 'next/image'
import GithubImage from "/public/github-mark-white.svg"

const Work = () => {

    return (
        <section id="work" className="fit-height snap-start flex flex-wrap items-center">
            <Section>
                <div className="py-10 pt-20">
                    <p className='text-gray-100 mb-2 heading-text'>Portfolio</p>
                    <h2 className="text-4xl text-white font-bold uppercase heading-text half-underline">Overview</h2>
                </div>
                <p className="text-lg text-white">Welcome to my portfolio showcasing a diverse range of full stack web development projects! As a passionate and proficient full stack web developer. In this portfolio, you'll find a selection of projects that demonstrate my expertise in front-end technologies, back-end frameworks, databases, and the seamless integration of these components to create cohesive and dynamic web applications. Each project is a testament to my commitment to delivering high-quality, scalable, and user-friendly web experiences that cater to a variety of needs and industries.</p>

                <div className="my-20">
                    <Slider Components={
                        workData.map((item, index) => {
                            return <div key={index} className="bg-[rgba(255,255,255,0)] p-3 rounded-xl text-white">
                                <div className="h-[250px] bg-gray-300 rounded-lg relative">
                                    <Image src={item.image} fill={true} alt={item.title} className="px-10" style={{objectFit: "contain"}} />

                                    <span className="block relative w-[30px] h-[30px] p-[2px] translate-y-1 -translate-x-1 rounded-full bg-[#000000] ml-auto shadow-sm cursor-pointer">
                                        <Image src={GithubImage} alt={'github'} className="w-full" />
                                    </span>
                                </div>
                                <div className="py-4">
                                    <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
                                    <p className="text-white w-[900px]">{item.desc}</p>

                                    <div className="montserrat-font mt-4" style={{letterSpacing: "1px"}}>
                                        <span className="text-indigo-800 font-semibold text-sm">#Reactjs</span> &nbsp;
                                        <span className="text-blue-800 font-semibold text-sm">#Typescript</span> &nbsp;
                                        <span className="text-red-800 font-semibold text-sm">#Laravel</span>
                                    </div>
                                </div>
                            </div>
                        })
                    } />
                </div>
            </Section>
        </section>
    )
}

export default Work