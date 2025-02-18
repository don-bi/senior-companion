'use client'

import { HiMiniUserGroup } from "react-icons/hi2";
import { FaBuildingCircleCheck, FaPeopleArrows} from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { FaPersonCane } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { GiHeartPlus } from "react-icons/gi";
import styles from "./footer.module.css"
import MediaLink from "./media-link";

export default function Footer() {
    return (
        <footer className={`${styles.footer} flex flex-col items-center justify-center sm:flex-row gap-4 sm:gap-2 p-4`}>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-7 w-full sm:w-3/6">
                <MediaLink
                    color={styles.mediaColors}
                    hoverColor={styles.mediaColorsHover}
                >
                    <GiHeartPlus size={30} className={styles.mediaColors}/>
                </MediaLink>

                <MediaLink
                    color={styles.mediaColors}
                    hoverColor={styles.mediaColorsHover}
                >
                    <FaPersonCane size={30} className={styles.mediaColors}/>
                </MediaLink>
                
                <MediaLink
                    color={styles.mediaColors}
                    hoverColor={styles.mediaColorsHover}
                >
                    <FaPeopleArrows size={30} className={styles.mediaColors}/>
                </MediaLink>

                <MediaLink
                    color={styles.mediaColors}
                    hoverColor={styles.mediaColorsHover}
                >
                    <HiMiniUserGroup size={30} className={styles.mediaColors}/>
                </MediaLink>

                <MediaLink
                    color={styles.mediaColors}
                    hoverColor={styles.mediaColorsHover}
                >
                    <FaHandHoldingHeart size={30} className={styles.mediaColors}/>
                </MediaLink>
            </div>
            <div className={`${styles.motto} text-center flex items-center justify-center sm:text-left`}>
                Connecting Hearts,<br/> Enriching Lives
            </div>
        </footer>
    )
}