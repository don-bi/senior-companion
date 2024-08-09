import Carousel from "@/components/carousel/carousel";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import styles from "./page.module.css";
import { IoIosArrowDown } from "react-icons/io";

export default function Branches() {
    return (
        <main className="bg-slate-50 h-full">
            <Header scroll={false}/>
            <div className={`${styles.branches} w-full flex flex-col items-center snap-start`}>
                <div className="pt-32 pb-12 text-center flex flex-col gap-5 items-center w-9/12">
                    <h1 className="font-bold text-5xl">Our Partner Branches</h1>
                    <h2 className="font-semibold text-3xl tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                    <p className="font-medium text-xl tracking-wider">Discover the heart of our program by exploring our branches across different communities. Each location represents a unique connection between college students and senior homes, where meaningful relationships are nurtured. We are proud to partner with senior centers across the region to bring joy and companionship to our seniors, and we invite you to see the impact we're making and encourage more to join us in bridging generations and building lasting connections.</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center py-10">
                    <p className="font-semibold text-3xl tracking-wide">Learn more about our branches below</p>
                    <IoIosArrowDown size={50} className={styles.downArrow}/>
            </div>
            <Carousel />
            <Contact />
            <Footer snap={true}/>
        </main>
    )
}