"use client"

import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import seniors from "@/public/seniors.jpg";
import generic from "../styles/generic.module.css"
import CarouselText from "./carousel-text";
import styles from "./carousel.module.css"

export default function Carousel() {
    //branch images
    const imgs: StaticImageData[] = [
        seniors,
        seniors,
        seniors
    ]

    //branch information
    const branchInfo: {name: string, address: string, desc: string, phone?: string, email?: string, link?: string, identifier: string}[] = [
        {name: "Upper East Side Branch", 
            address: "1234 Branch St", 
            desc: "This is the first branch", 
            phone: "718-111-1111", 
            identifier: "zero"},
        {name: "Branch 2", 
            address: "5678 Branch St", 
            desc: "This is the second branch", 
            email: "joe@doe", 
            identifier: "one"},
        {name: "Branch 3", 
            address: "91011 Branch St", 
            desc: "This is the third branch", 
            link: "/", 
            identifier: "two"},
    ]

    const [slide, setSlide] = useState(0);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const e = document.querySelector(`#zero`);
        if (e) {
            e.classList.add(`${styles.show}`);
        }
    }, [])

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
        if (wrapperRef.current) {
            const element = (wrapperRef.current as HTMLElement).querySelector(`#${branchInfo[slide].identifier}`);
            if (element) {
                element.classList.remove(`${styles.show}`);
                element.classList.add(`${styles.hide}`);
            }
        }
        const newSlide = slide + 1 >= imgs.length ? 0 : slide + 1;
        setSlide(newSlide);
        if (wrapperRef.current) {
            const element = (wrapperRef.current as HTMLElement).querySelector(`#${branchInfo[newSlide].identifier}`);
            if (element) {
                element.classList.remove(`${styles.hide}`);
                element.classList.add(`${styles.show}`);
            }
        }
    }
    
    return (
        <div className={`flex pt-8 pb-8 ${styles.carouselWrapper}`}>
            <div className={`${styles.imageWrapper} flex relative w-7/12 aspect-video ${generic.shadow} overflow-hidden z-10`}>
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
            <div className={`${styles.textWrapper} relative flex w-5/12`} ref={wrapperRef}>
                {branchInfo.map((branch, index) => {
                    return (
                        <CarouselText 
                        key={100+index} 
                        name={branch.name} 
                        address={branch.address} 
                        description={branch.desc} 
                        identifier={branch.identifier} 
                        phone={branch.phone}
                        email={branch.email}
                        link={branch.link}
                        />
                    )
                })}
            </div>
        </div>
    )
}