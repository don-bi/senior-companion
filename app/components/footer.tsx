'use client'

import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import styles from "./footer.module.css"
import { useState } from "react";
import MediaLink from "./media-link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <MediaLink 
            href="https://www.instagram.com/perennialprep"
            words="@Seniorswhateverbl"
            color={styles.mediaColors}
            hoverColor={styles.mediaColorsHover}
            >
                <FaInstagram size={30}/>
            </MediaLink>
        </footer>
    )
}