"use client"

import {  useEffect, useState } from "react";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaBuildingCircleCheck, FaPeopleArrows} from "react-icons/fa6";
import styles from "./statistics.module.css";

export default function Statistics() {
    // change these if the statistics ever change
    const totalPartneredCenters = 10;
    const totalPairs = 31;
    const totalStudentOrgs = 4;
    const totalSeniorOrgs = 3;

    const [increasing, setIncreasing] = useState(false);
    const [pairs, setPairs] = useState(0);
    const [studentOrgs, setStudentOrgs] = useState(0);
    const [seniorOrgs, setSeniorOrgs] = useState(0);


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIncreasing(true);
                    entry.target.classList.add(`${styles.show}`);
                }
            })
            
        }, {threshold: 0.2})
    
        const container = document.querySelectorAll(".stat-container");
        container.forEach((c) => {
            observer.observe(c);
        })
    }, [])

    useEffect(() => {
        const increaseStats = () => {
            if (pairs < totalPairs) {
                setTimeout(() => {
                    setPairs(pairs + 1);
                }, 35)
            }
            if (studentOrgs < totalStudentOrgs) {
                setTimeout(() => {
                    setStudentOrgs(studentOrgs + 1);
                }, 300)
            }
            if (seniorOrgs < totalSeniorOrgs) {
                setTimeout(() => {
                    setSeniorOrgs(seniorOrgs + 1);
                }, 400)
            }
        }
        if (increasing) increaseStats()
        console.log([pairs, studentOrgs, seniorOrgs]);
    }, [increasing, pairs, studentOrgs, seniorOrgs])

    return (
        <div className="flex flex-col items-center gap-4 lg:gap-6">
            {/* <h1 className={styles.ebony}>All-time Statistics</h1> */}
            <div className={`stat-container ${styles.hidden} flex flex-col gap-10`}>
                <div className="flex items-center gap-4">
                    <FaPeopleArrows className={`${styles.color} ${styles.icons}`}/>
                    <div className="flex-col items-center justify-center">
                        <p className={styles.color}>{pairs}</p>
                        <p className="font-semibold text-lg text-medium text-green-950">Student-Senior Pairs</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <HiMiniUserGroup className={`${styles.color} ${styles.icons}`}/>
                    <div className="flex-col items-center justify-center">
                        <p className={styles.color}>{studentOrgs}</p>
                        <p className="font-semibold text-lg text-medium text-green-950">Partnered Student Organizations</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <FaBuildingCircleCheck className={`${styles.color} ${styles.icons}`}/>
                    <div className="flex-col items-center justify-center">
                        <p className={styles.color}>{seniorOrgs}</p>
                        <p className="font-semibold text-lg text-medium text-green-950">Partnered Senior Centers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}