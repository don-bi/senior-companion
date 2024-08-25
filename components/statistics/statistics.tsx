"use client"

import {  useEffect, useState } from "react";
import { FaBuildingCircleCheck, FaPeopleArrows, FaPersonCane } from "react-icons/fa6";
import styles from "./statistics.module.css";
import { FaHourglassHalf } from "react-icons/fa";

export default function Statistics() {
    // change these if the statistics ever change
    const totalPartneredCenters = 10;
    const totalStudents = 100;
    const totalAdults = 50;
    const totalHoursOfService = 1000;

    const [increasing, setIncreasing] = useState(false);
    const [partneredCenters, setPartneredCenters] = useState(0);
    const [students, setStudents] = useState(0);
    const [adults, setAdults] = useState(0);
    const [hoursOfService, setHoursOfService] = useState(0);


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
            if (partneredCenters < totalPartneredCenters) {
                setTimeout(() => {
                    setPartneredCenters(partneredCenters + 1);
                }, 100)
            }
            if (students < totalStudents) {
                setTimeout(() => {
                    setStudents(students + 1);
                }, 20)
            }
            if (adults < totalAdults) {
                setTimeout(() => {
                    setAdults(adults + 1);
                }, 40)
            }
            if (hoursOfService < totalHoursOfService) {
                setTimeout(() => {
                    setHoursOfService(hoursOfService + 4);
                }, 5)
            }
        }
        if (increasing) increaseStats()
        console.log([partneredCenters, students, adults, hoursOfService]);
    }, [increasing, partneredCenters, students, adults, hoursOfService])

    return (
        <div className="flex flex-col items-center gap-4 lg:gap-6">
            {/* <h1 className={styles.ebony}>All-time Statistics</h1> */}
            <div className={`stat-container ${styles.hidden} flex flex-col gap-10`}>
                <div className="flex items-center gap-4">
                    <FaBuildingCircleCheck className={`${styles.color} ${styles.icons}`}/>
                    <div className="flex-col items-center justify-center">
                        <p className={styles.color}>{partneredCenters}</p>
                        <p className="font-semibold text-lg text-medium text-green-950">Partnered Senior Centers</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <FaPeopleArrows className={`${styles.color} ${styles.icons}`}/>
                    <div className="flex-col items-center justify-center">
                        <p className={styles.color}>{students}</p>
                        <p className="font-semibold text-lg text-medium text-green-950">Student Companions</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <FaPersonCane className={`${styles.color} ${styles.icons}`}/>
                    <div className="flex-col items-center justify-center">
                        <p className={styles.color}>{adults}</p>
                        <p className="font-semibold text-lg text-medium text-green-950">Older Adult Companions</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <FaHourglassHalf className={`${styles.color} ${styles.icons}`}/>
                    <div className="flex-col items-center justify-center">
                        <p className={styles.color}>{hoursOfService}</p>
                        <p className="font-semibold text-lg text-medium text-green-950">Hours Spent Connecting</p>
                    </div>
                </div>
            </div>
        </div>
    )
}