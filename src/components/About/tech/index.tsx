import React, { useState } from 'react'
import style from '../tech.module.css';
import { technologies } from './technologies';

declare module "react" {
    interface CSSProperties {
      "--i"?: number;
    }
}
 
const Tech = () => {

    const [activeTechnology, setActiveTechnology] = useState('tech0')

    return (
        <div className={style.techCircleContainer}>
            <div className={`flex flex-wrap justify-center items-center gap-10 ${style.techCircleWrapper}`}>
                {
                    technologies.map((technology, index) => {
                        let id = 'tech'+index;
                        const customStyle = {
                            "--i": index
                        }

                        return <div key={index} className={`relative h-max rounded-full overflow-hidden flex justify-center items-center ${style.techCircle} ${activeTechnology == id && style.active}`} style={customStyle}>
                            <img src={technology.icon.src} alt={technology.name} width={"70px"} className="p-2 z-[1]"
                            onClick={() => setActiveTechnology(id)}
                            />
                            <div className="absolute inset-0 bg-gray-100 hover:bg-transparent bg-opacity-40 transition-all duration-200"></div>
                        </div>
                    })
                }
            </div>

            <div className={style.content}>
                {
                    technologies.map((technology, index) => {
                        let id = 'tech'+index;

                        return <div key={index} className={`${style.techItem} ${activeTechnology == id && style.active} p-2`}>
                            <img src={technology.icon.src} alt={technology.name} width={"150px"}
                            />
                            <p className='text-black w-max m-auto'>{technology.name}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Tech