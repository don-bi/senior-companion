'use client'

import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import styles from "./footer.module.css"
import { useState } from "react";

export default function Footer() {
    const [colorClass, setColorClass] = useState(styles.mediaColors);
    
    return (
        <footer className={styles.footer}>
            <a href="https://www.instagram.com/perennialprep" 
            onMouseOver={() => {
                setColorClass(styles.mediaColorsHover)
            }}
            onMouseOut={() => {
                setColorClass(styles.mediaColors)
            }}
            className="flex items-center gap-2"
            >
                <FaInstagram size={30} className={colorClass}/>
                <div className={colorClass}>@Seniorswhateverbl</div>
            </a>
        </footer>
    )
}