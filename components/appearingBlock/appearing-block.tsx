"use client"

import { useEffect } from "react"
import styles from "./appearingBlock.module.css"

export default function AppearingBlock({children, style}: {children: React.ReactNode, style?: string}) {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(`${styles.appear}`)
                }
            })
        }, {threshold: 0.3})

        const elements = document.querySelectorAll(`.${styles.div}`)
        elements.forEach((element) => {
            observer.observe(element)
        })
    }, [])


    return (
        <div className={`${styles.div} ${style}`} >
            {children}
        </div>
    )
}
