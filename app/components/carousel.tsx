"use client"

import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import seniors from "../public/seniors.jpg";
import generic from "./styles/generic.module.css"
import CarouselText from "./carousel-text";
import styles from "./styles/carousel.module.css"

export default function Carousel() {
    //branch images
    const imgs: StaticImageData[] = [
        seniors,
        seniors,
        seniors
    ]

    //branch information
    const branchInfo: {name: string, address: string, desc: string, identifier: string}[] = [
        {name: "Branch 1", address: "1234 Branch St", desc: "This is the first branch", identifier: "zero"},
        {name: "Branch 2", address: "5678 Branch St", desc: "This is the second branch", identifier: "one"},
        {name: "Branch 3", address: "91011 Branch St", desc: "This is the third branch", identifier: "two"}
    ]

    const [slide, setSlide] = useState(0);
    const wrapperRef = useRef(null);

    const prev = () => {
        if (wrapperRef.current) {
            const element = (wrapperRef.current as HTMLElement).querySelector(`#${branchInfo[slide].identifier}`);
            if (element) {
                element.classList.remove(`${styles.show}`);
                element.classList.add(`${styles.hide}`);
            }
        }
        const newSlide = slide - 1 < 0 ? imgs.length - 1 : slide - 1;
        setSlide(newSlide);
        if (wrapperRef.current) {
            const element = (wrapperRef.current as HTMLElement).querySelector(`#${branchInfo[newSlide].identifier}`);
            if (element) {
                element.classList.remove(`${styles.hide}`);
                element.classList.add(`${styles.show}`);
            }
        }
    }

    const next = () => {
        setSlide(slide + 1 >= imgs.length ? 0 : slide + 1);
    }
    
    return (
        <div className="flex">
            <div className={`flex relative w-7/12 aspect-video ${generic.shadow} overflow-hidden`}>
                {imgs.map((img, index) => {
                    return (
                        <Image key={index} src={img} alt="seniors" style={{objectFit: "cover", translate: `-${slide * 100}%`}} className="duration-300"/>
                    )
                })}
                <div className="absolute flex top-2/4 -translate-y-2/4 p-4 w-full justify-between">
                    <button className="bg-slate-50 rounded-full opacity-80 p-1 hover:opacity-100 duration-200">
                        <IoIosArrowBack onClick={prev} size={30}/>
                    </button>
                    <button className="bg-slate-50 rounded-full opacity-80 p-1 hover:opacity-100 duration-200">
                        <IoIosArrowForward onClick={next} size={30}/>
                    </button>
                </div>
                <div className="absolute flex items-center gap-2 bottom-4 left-2/4 -translate-x-2/4">
                    {imgs.map((img, index) => {
                        return (
                            <button key={10+index} className={`bg-slate-50 p-1.5 ${slide === index ? "opacity-100" : "opacity-50"} hover:opacity-100 hover:bg-white rounded-full border border-slate-400`}
                            onClick={() => {
                                setSlide(index);
                            }}
                            >
                            </button>
                        )
                    })}
                </div>
            </div>
            <div className="relative flex" ref={wrapperRef}>
                {branchInfo.map((branch, index) => {
                    return (
                        <CarouselText key={100+index} name={branch.name} address={branch.address} description={branch.desc} identifier={branch.identifier}/>
                    )
                })}
            </div>
        </div>
    )
}