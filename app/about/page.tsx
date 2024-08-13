import Header from "@/components/header/header";
import StaffIcon from "@/components/staff-icon/staff-icon";
import styles from "./page.module.css";
import generic from "@/components/styles/generic.module.css";
import { craig } from "./image-exports";
import AppearingBlock from "@/components/appearingBlock/appearing-block";
import Footer from "@/components/footer/footer";
import Contact from "@/components/contact/contact";

export default function About() {
    return (
        <main className="bg-slate-50">
            <Header scroll={false}/>
            <div className={`${styles.story} w-full pt-32 pb-24 text-center flex flex-col gap-5 items-center`}>
                <h1 className="w-8/12 font-bold text-5xl sm:text-7xl">Our Story</h1>
                <p className="w-3/4 font-semibold text-2xl tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <AppearingBlock>
                <div className="py-10 flex flex-col items-center">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold w-full text-center">Co-Founders</h1>
                    <h2 className="text-2xl mt-3 w-full text-center">Lorem Ipsum Dolor</h2>
                    <div className="flex items-center justify-center gap-20 mt-4 flex-wrap">
                        <StaffIcon imageSrc={craig} imageAlt="Picture of Co-founder Craig Chen" name="Craig Chen" title="Co-Founder"/>
                        <StaffIcon imageSrc={craig} imageAlt="Picture of Co-founder Nafisa Hoque" name="Nafisa Hoque" title="Co-Founder"/>
                    </div>
                </div>
            </AppearingBlock>
            <div className={`${generic.backgroundPeach}`}>
                <AppearingBlock>
                    <div className={`py-10 flex flex-col items-center`}>
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold w-full text-center">Other Directors</h1>
                    <h2 className="text-2xl mt-3 w-full text-center">Lorem Ipsum Dolor</h2>
                        <div className="flex items-center justify-center gap-20 mt-4 flex-wrap">
                            <StaffIcon imageSrc={craig} imageAlt="Picture of WebDesigner" name="Donald Bi" title="Webmaster"/>
                        </div>
                    </div>
                </AppearingBlock>
            </div>
            <Contact />
            <Footer snap={true}/>
        </main>
      );
}