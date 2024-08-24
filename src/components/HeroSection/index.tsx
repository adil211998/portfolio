import { inter, sora } from '@/app/fonts'
import React from 'react'
import style from "./hero-section.module.css";

const HeroSection = () => {
    return (
        <div id='hero-section' className={`grid grid-cols-2 fit-height items-center justify-center p-24 snap-center relative ${inter.className}`}>
            <div className={style.blob}>
                {/* <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{stopColor: "#f7f7f7"}}></stop>
                            <stop offset="100%" style={{stopColor: "#a2a2a2"}}></stop>
                        </linearGradient>
                    </defs>
                    <path id="blob" fill="url(#gradient)">
                        <animate 
                            attributeName='d' 
                            dur={"10000ms"} 
                            repeatCount={"indefinite"}
                            values='M455.5,299Q420,348,391,395.5Q362,443,306,469Q250,495,201.5,457Q153,419,99,394Q45,369,52.5,309.5Q60,250,61,195.5Q62,141,108.5,113Q155,85,202.5,59.5Q250,34,310,38Q370,42,406,90.5Q442,139,466.5,194.5Q491,250,455.5,299Z;
                            M452.98108,309.07567Q455.26485,368.15134,409.63999,408.09459Q364.01513,448.03784,307.00757,446.32974Q250,444.62164,200.99622,431.81082Q151.99243,419,101.51892,391.98487Q51.0454,364.96973,51.49243,307.48487Q51.93946,250,71.07567,204.06432Q90.21188,158.12864,121.09459,119.54919Q151.9773,80.96973,200.98865,46.90541Q250,12.84109,298.91676,46.56432Q347.83352,80.28755,376.27677,120.72702Q404.72001,161.16648,427.70866,205.58324Q450.69731,250,452.98108,309.07567Z;
                            M445,309.5Q456,369,406.5,402.5Q357,436,303.5,436.5Q250,437,195,439Q140,441,91,405.5Q42,370,40,310Q38,250,49.5,195.5Q61,141,110.5,117.5Q160,94,205,81Q250,68,309,57Q368,46,392.5,100Q417,154,425.5,202Q434,250,445,309.5Z;
                            M440.83715,301.63684Q428.24767,353.27368,399.09938,405.27523Q369.95109,457.27679,309.97554,464.25233Q250,471.22787,205.17585,438.53746Q160.35171,405.84705,113.20186,380.98544Q66.05202,356.12384,42.31269,303.06192Q18.57337,250,31.46099,190.41207Q44.3486,130.82415,91.53591,94.37306Q138.72321,57.92197,194.36161,34.74612Q250,11.57027,296.51145,50.06192Q343.0229,88.55357,379.08637,121.73932Q415.14984,154.92508,434.28824,202.46254Q453.42663,250,440.83715,301.63684Z;
                            M432.67636,301.52158Q428.0863,353.04315,401.10788,409.15103Q374.12946,465.25891,312.06473,460.24109Q250,455.22326,200.78424,437.97842Q151.56848,420.73358,108.74109,388.38837Q65.9137,356.04315,47.71576,303.02158Q29.51782,250,36.78049,190.52158Q44.04315,131.04315,86.87054,86.24109Q129.69794,41.43902,189.84897,50.29831Q250,59.1576,307.49625,54.71576Q364.9925,50.27392,386.86679,104.20169Q408.74109,158.12946,423.00375,204.06473Q437.26642,250,432.67636,301.52158Z;
                            M455.5,299Q420,348,391,395.5Q362,443,306,469Q250,495,201.5,457Q153,419,99,394Q45,369,52.5,309.5Q60,250,61,195.5Q62,141,108.5,113Q155,85,202.5,59.5Q250,34,310,38Q370,42,406,90.5Q442,139,466.5,194.5Q491,250,455.5,299Z;
                            '></animate>
                    </path>
                </svg> */}
            </div>
            <div className='flex flex-col'>
                <h2 className={`text-8xl text-white font-bold uppercase ${sora.className}`} style={{letterSpacing: "2px"}}>Creative</h2>
                <p className={`text-6xl text-gray-50 my-4 heading-text font-bold uppercase ${sora.className}`} style={{letterSpacing: "2px"}}>Web developer.</p>
                <p className="text-4xl text-gray-50 my-4 font-light">Adil Rehman</p>
            </div>

            {/* Scroll Down arrow button */}
            <span className="absolute bottom-[50%] right-[1rem] -translate-y-1/2 text-white flex items-center rotate-90 cursor-pointer select-none"
                onMouseEnter={() => {
                    if(!document.querySelector("#scroll-down-arrow-svg")?.classList.contains('translate-x-1'))
                    {
                        document.querySelector("#scroll-down-arrow-svg")?.classList.add("translate-x-1")
                    }
                }}

                onMouseLeave={() => {
                    if(document.querySelector("#scroll-down-arrow-svg")?.classList.contains('translate-x-1'))
                    {
                        document.querySelector("#scroll-down-arrow-svg")?.classList.remove("translate-x-1")
                    }
                }}
                
                onClick={() => {
                    document.querySelector('#main-container')?.scrollTo(0, document.querySelector('#hero-section')?.scrollHeight ?? 0)
                }}
            >
                <span className="font-medium uppercase text-sm" style={{letterSpacing: "3px"}}>Scroll Down</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2 transition-all duration-300" id='scroll-down-arrow-svg'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </span>
        </div>
    )
}

export default HeroSection