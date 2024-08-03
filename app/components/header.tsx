"use client"

import Link from "next/link"
import styles from "./styles/header.module.css";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header({scroll}: {scroll: boolean}) {

    //if scroll is true, the header will change color when the user scrolls

    if (scroll) {
        useEffect(() => {
            const header = document.querySelector("header");
            function checkScroll() {
            if (header && window.scrollY > 0) {
                header.classList.add(`${styles.scrolled}`);
            }
            if (header && window.scrollY === 0) {
                header.classList.remove(`${styles.scrolled}`);
            }
            }
            window.addEventListener("scroll", checkScroll);
        }, [])
    }

    const [hamburgerShow, setHamburgerShow] = useState("");


    return (
    <div>
        <header className={`${styles.header} ${scroll ? "" : styles.scrolled}`}>
            <Link href={"/"}>
                <div className="text-white">LOGOLOGO</div>
            </Link>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li><Link href={"/"} className={styles.a}>Home</Link></li>
                    <li><Link href={"/about"} className={styles.a}>About Us</Link></li>
                    <li><Link href={"/join"} className={styles.a}>Our Branches</Link></li>
                    <li><Link href={"/join"} className={styles.a}>Contact Us</Link></li>
                </ul>
            </nav>
            <nav className={styles.mobile} onClick={()=> {
                if (hamburgerShow === "") {
                    setHamburgerShow(styles.show);
                } else {
                    setHamburgerShow("");
                }
            }}>
                <GiHamburgerMenu size={30} fill="white"/>
            </nav>
        </header>
        <ul className={`${styles.mobileul} ${hamburgerShow}`}>
            <li className={styles.li}><Link href={"/join"} className={styles.a}>Join Us</Link></li>
            <li className={styles.li}><Link href={"/about"} className={styles.a}>About Us</Link></li>
            <li className={styles.li}><Link href={"/join"} className={styles.a}>Join Us</Link></li>
        </ul>
    </div>
    )
}