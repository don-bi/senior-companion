"use client"

import Link from "next/link"
import styles from "./header.module.css";
import contact from "@/components/contact/contact.module.css";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "@/public/studentcompanionlogo.png";
import Image from "next/image";

export default function Header({scroll}: {scroll: boolean}) {

    //if scroll is true, the header will change color when the user scrolls

    useEffect(() => {
        if (scroll) {
            const header = document.querySelector("header");
            window.addEventListener("scroll", () => {
                if (header && window.scrollY > 0) {
                    header.classList.add(`${styles.scrolled}`);
                }
                if (header && window.scrollY === 0) {
                    header.classList.remove(`${styles.scrolled}`);
                }
            }
            );
        }
    }, [scroll])

    const [hamburgerShow, setHamburgerShow] = useState("");


    return (
    <div>
        <header className={`${styles.header} ${scroll ? "" : styles.scrolled}`}>
            <Link href={"/"} className="h-[76.8px]">
                <Image src={logo} alt={"logo"} style={{height: "76.8px", width: "auto"}}/>
            </Link>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li><Link href={"/"} className={styles.a}>Home</Link></li>
                    <li><Link href={"/about"} className={styles.a}>About Us</Link></li>
                    <li><Link href={"/partners"} className={styles.a}>Our Partners</Link></li>
                    <li><a href="#contact" className={styles.a}>Contact Us</a></li>
                </ul>
            </nav>
            <nav className={styles.mobile} onClick={()=> {
                if (hamburgerShow === "") {
                    setHamburgerShow(styles.show);
                } else {
                    setHamburgerShow("");
                }
            }}>
                <GiHamburgerMenu size={30} fill="white" className="cursor-pointer"/>
            </nav>
        </header>
        <ul className={`${styles.mobileul} ${hamburgerShow}`}>
            <li className={styles.li}><Link href={"/"} className={styles.a}>Home</Link></li>
            <li className={styles.li}><Link href={"/about"} className={styles.a}>About Us</Link></li>
            <li className={styles.li}><Link href={"/branches"} className={styles.a}>Our Branches</Link></li>
            <li className={styles.li}><a href="#contact" className={styles.a}>Contact Us</a></li>
        </ul>
    </div>
    )
}