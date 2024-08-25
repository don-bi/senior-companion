import Header from "@/components/header/header";
import StaffIcon from "@/components/staff-icon/staff-icon";
import styles from "./page.module.css";
import generic from "@/components/styles/generic.module.css";
import { craig, nafisa } from "./image-exports";
import AppearingBlock from "@/components/appearingBlock/appearing-block";
import Footer from "@/components/footer/footer";
import Contact from "@/components/contact/contact";

export default function About() {
    return (
        <main className="bg-slate-50">
            <Header scroll={false}/>
            <div className={`${styles.story} w-full pt-32 pb-24 text-center flex flex-col gap-5 items-center`}>
                <h1 className="w-8/12 font-bold text-5xl sm:text-7xl">Our Story</h1>
                <AppearingBlock style="flex justify-center">
                    <p className="w-3/4 text-2xl tracking-wide leading-10">Within us all, within the warm depths of all our kind hearts, lies a tender spot reserved for the older adults of the world. Our very instinct is to look on them with gentle eyes and hear their stories readily with open ears.
                    </p>
                </AppearingBlock>
                <AppearingBlock style="flex justify-center">
                    <p className="w-3/4 text-2xl tracking-wide leading-10">We, Craig and Nafisa, in founding Student Companions, felt urged into action by our compassion and admiration for older adults. Back in highschool, we were introduced by our honor society into a similar older adult telephone reassurance program. The calls sent from our phones to paired seniors blossomed into flourishing conversations and lasting relationships. Hours passed sitting by the window, with a senior on call, watching the sun set. Hours, days, weeks, months, years of conversations brought out stories of joy, grief, pain, celebration, and regret.
                    </p>
                </AppearingBlock>
                <AppearingBlock style="flex justify-center">
                    <p className="w-3/4 text-2xl tracking-wide leading-10">When highschool ended, so did our time with those seniors. Moving on from those connections and caring moments was hard; we felt incomplete without those friends on the phone, their ever-rewarding insights. So we found the perfect resolution, brought the older adult telephone companion program to college and created Student Companions.
                    </p>
                </AppearingBlock>
                <AppearingBlock style="flex justify-center">
                    <p className="w-3/4 text-2xl tracking-wide leading-10">We’re excited to spent hours on call while strolling through parks and lying on the couch, our minds open to stories from another world and time. And this time around, we’d like to share it with others!
                    </p>
                </AppearingBlock>
                <AppearingBlock style="flex justify-center">
                    <p className="w-3/4 text-2xl tracking-wide leading-10">By reaching out to senior centers and student volunteering organizations, we aspire to source populations of interested older adult participants and student volunteers. Such experiences were invaluable in our own lives and it is an honor for us to promote it to others.
                    </p>
                </AppearingBlock>
            </div>
            <div className="bg-[#d3ecd3ff]">
                <AppearingBlock>
                    <div className="py-10 flex flex-col items-center">
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold w-full text-center">Our Founders</h1>
                        <div className="flex items-center justify-center gap-20 mt-4 flex-wrap">
                            <StaffIcon imageSrc={craig} imageAlt="Picture of Co-founder Craig Chen" name="Craig Chen" title=""/>
                            <StaffIcon imageSrc={nafisa} imageAlt="Picture of Co-founder Nafisa Hoque" name="Nafisa Hoque" title=""/>
                        </div>
                    </div>
                </AppearingBlock>
            </div>
            <div className={`bg-[#e9f2ef]`}>
                <AppearingBlock>
                    <div className={`py-10 flex flex-col items-center`}>
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold w-full text-center">Webmaster</h1>
                        <div className="flex items-center justify-center gap-20 mt-4 flex-wrap">
                            <StaffIcon imageSrc={craig} imageAlt="Picture of WebDesigner" name="Donald Bi" title=""/>
                        </div>
                    </div>
                </AppearingBlock>
            </div>
            <Contact />
            <Footer/>
        </main>
      );
}