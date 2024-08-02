'use client'

import { FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import styles from "./styles/footer.module.css"
import MediaLink from "./media-link";

export default function Footer() {
    return (
        <footer className={`${styles.footer} flex gap-2`}>
            <div className="flex gap-2 w-3/6">
                <MediaLink
                href="https://www.instagram.com/perennialprep"
                words=""
                color={styles.mediaColors}
                hoverColor={styles.mediaColorsHover}
                >
                    <FaInstagram size={40}/>
                </MediaLink>
                
                <MediaLink
                href="/"
                words=""
                color={styles.mediaColors}
                hoverColor={styles.mediaColorsHover}
                >
                    <FaLinkedin size={40}/>
                </MediaLink>
                <MediaLink
                href="/"
                words=""
                color={styles.mediaColors}
                hoverColor={styles.mediaColorsHover}
                >
                    <FaFacebookSquare size={40}/>
                </MediaLink>
            </div>
            <div className={styles.motto}>
                Connecting Hearts,<br/> Enriching Lives
            </div>
        </footer>
    )
}