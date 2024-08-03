import Header from "../components/header";
import StaffIcon from "../components/staff-icon";
import styles from "./page.module.css";
import generic from "../components/styles/generic.module.css";
import { craig } from "./image-exports";
import AppearingBlock from "../components/appearing-block";
import Footer from "../components/footer";

export default function About() {
    return (
        <main className="bg-teal-50">
            <Header scroll={false}/>
            <div className={`${styles.story} px-40 pt-32 pb-24 text-center flex flex-col gap-5 items-center`}>
                <h1 className="font-bold text-7xl">Our Story</h1>
                <p className="font-semibold text-2xl tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <AppearingBlock>
                <div className="px-56 py-10 flex flex-col items-center">
                    <h1 className="text-6xl font-semibold">Co-Founders</h1>
                    <h2 className="text-2xl mt-3">Lorem Ipsum Dolor</h2>
                    <div className="flex items-center gap-20 mt-4">
                        <StaffIcon imageSrc={craig} imageAlt="Picture of Co-founder Craig Chen" name="Craig Chen" title="Co-Founder"/>
                        <StaffIcon imageSrc={craig} imageAlt="Picture of Co-founder Nafisa Hoque" name="Nafisa Hoque" title="Co-Founder"/>
                    </div>
                </div>
            </AppearingBlock>
            <div className={`${generic.backgroundPeach}`}>
                <AppearingBlock>
                    <div className={`px-56 py-10 flex flex-col items-center`}>
                        <h1 className="text-6xl font-semibold">Other Directors</h1>
                        <h2 className="text-2xl mt-3">Lorem Ipsum Dolor</h2>
                        <div className="flex items-center gap-20 mt-4">
                            <StaffIcon imageSrc={craig} imageAlt="Picture of WebDesigner" name="Donald Bi" title="Webmaster"/>
                        </div>
                    </div>
                </AppearingBlock>
            </div>
            <Footer />
        </main>
      );
}