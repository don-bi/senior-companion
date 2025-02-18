import Header from "@/components/header/header";
import StaffIcon from "@/components/staff-icon/staff-icon";
import styles from "./page.module.css";
import generic from "@/components/styles/generic.module.css";
import { craig, nafisa, donald } from "./image-exports";
import AppearingBlock from "@/components/appearingBlock/appearing-block";
import Footer from "@/components/footer/footer";
import Contact from "@/components/contact/contact";

export default function About() {
    return (
        <main className="bg-slate-50">
            <Header scroll={false}/>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <div className="bg-[#d3ecd3ff]">
                        <AppearingBlock>
                            <div className="pt-32 py-10 flex flex-col items-center">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold w-full text-center">Our Founders</h1>
                                <div className="flex items-center justify-center gap-20 mt-4 flex-wrap">
                                    <StaffIcon imageSrc={craig} imageAlt="Picture of Co-founder Craig Chen" name="Craig Chen" title=""/>
                                    <StaffIcon imageSrc={nafisa} imageAlt="Picture of Co-founder Nafisa Hoque" name="Nafisa Hoque" title=""/>
                                </div>
                            </div>
                        </AppearingBlock>
                    </div>
                    <div className={`bg-[#deefe2]`}>
                        <AppearingBlock>
                            <div className={`py-10 flex flex-col items-center`}>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold w-full text-center">Our Web Designer</h1>
                                <div className="flex items-center justify-center gap-20 mt-4 flex-wrap">
                                    <StaffIcon imageSrc={donald} imageAlt="Picture of WebDesigner" name="Donald Bi" title=""/>
                                </div>
                            </div>
                        </AppearingBlock>
                    </div>
                </div>
                
                <div className={`${styles.story} md:w-1/2 pt-32 pb-24 text-center flex flex-col gap-5 items-center px-[4.5%]`}>
                    <h1 className="w-8/12 font-bold text-3xl sm:text-5xl">Our Story</h1>
                    <AppearingBlock style="flex justify-center">
                        <p className="text-md tracking-wide leading-6">Student Companions sprung up not so long ago, in July 2024, but the seeds were planted years before. In 2022, Craig and Nafisa were high school friends who volunteered as student telephone companions for seniors. During the hours they spent on the phone each week with the seniors, they were brought out of their daily lives and their daily routine. In those conversations they saw through different perspectives. With seniors on the other end of the call, the phone took them through portals. Their calls were rich with the unspoken significance of building intergenerational bridges.
                        </p>
                    </AppearingBlock>
                    <AppearingBlock style="flex justify-center">
                        <p className="text-md tracking-wide leading-6">Oftentimes, we ask older adults for a piece of advice they'd give to their younger self. But that piece of advice is rarely enough for ourselves to understand their perspective. Understanding takes sitting down and listening to their stories. Nafisa and Craig wanted to share that understanding and on one day in 2022, their plan to do so was born.
                        </p>
                    </AppearingBlock>
                    <AppearingBlock style="flex justify-center">
                        <p className="text-md tracking-wide leading-6">In July 2024, we, Nafisa and Craig, have finally brought our plans to reality and it couldn't have been possible without much luck, support, and the care that we all possess. Everywhere we've turned we have found help and interest. Everywhere we turn, we're met with companionship — from the people we connect with, to the stories they share, and the bridges we continue to build.
                        </p>
                    </AppearingBlock>
                    <AppearingBlock style="flex justify-center">
                        <p className="text-md tracking-wide leading-6">Companionship fuels us, and we hope it moves you too. Welcome to Student Companions.
                        </p>
                    </AppearingBlock>
                </div>
            </div>
            
            <Contact />
            <Footer/>
        </main>
      );
}