"use client"

import Image from "next/image";
import left from '@/public/left.png';
import right from '@/public/right.png';
import { useEffect } from "react";
import styles from "./images.module.css"

export default function Images() {
    useEffect(() => {
        const left = document.querySelector(`.${styles.leftScreen}`);
        const right = document.querySelector(`.${styles.rightScreen}`);
        if (left && right) {
            left.classList.add(`${styles.show}`);
            right.classList.add(`${styles.show}`);
        }
        let words = document.querySelectorAll(`.${styles.span}`);
        words.forEach((word) => {
            word.classList.add(`${styles.fadeIn}`);
        })
        words = document.querySelectorAll(`.${styles.spanTwo}`);
        words.forEach((word) => {
            word.classList.add(`${styles.fadeIn}`);
        })
    }, [])

    return (
        <div>
            <h1 className={styles.h1}><span className={styles.span}>Meet</span> <span className={styles.span}>Your</span> <span className={styles.span}>Very</span> <span className={styles.span}>Own</span></h1>
            <h1 className={styles.h2}><span className={styles.spanTwo}>Student</span> <span className={styles.spanTwo}>Companion</span></h1>
            <Image src={left} alt={"senior looking at computer"} layout="fill" objectFit="cover" className={styles.leftScreen} />
            <Image src={right} alt={"senior looking at computer"} layout="fill" objectFit="cover" className={styles.rightScreen} />
        </div>
    )
}