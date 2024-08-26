import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import styles from "./page.module.css";
import generic from "@/components/styles/generic.module.css";
import PartnerIcon from "@/components/partner-icon";
import partnertest from "@/public/partners/partnertest.png";

export default function Branches() {
    return (
        <main className="bg-slate-50 h-full">
            <Header scroll={false}/>
            <div className={`${styles.branches} w-full flex flex-col items-center`}>
                <div className={`bg-[#cfeacf] pt-32 pb-12 text-center flex flex-col gap-5 items-center px-[7.5%]`}>
                    <h1 className="font-bold text-5xl">Partner Branches</h1>
                    {/* <h2 className="font-semibold text-3xl tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2> */}
                    <p className="font-medium text-2xl tracking-wide leading-10">Discover the heart of our program by exploring our branches across New York State! Each location represents a unique connection between our college students and senior centers, where these meaningful relationships are nurtured. We are proud to partner with senior centers across the region to bring joy and companionship to our seniors.</p>
                </div>

                <div className="bg-[#e9f2eb] w-full flex flex-col justify-center py-8 gap-36">
                    <PartnerIcon styles="h-10" imageSrc={partnertest} imageAlt="test" link="/" title="hello" description="test"/>
                    <PartnerIcon styles="h-10" imageSrc={partnertest} imageAlt="test" link="/" title="hello" description="test"/>
                    <PartnerIcon styles="h-10" imageSrc={partnertest} imageAlt="test" link="/" title="hello" description="test"/>
                    <PartnerIcon styles="h-10" imageSrc={partnertest} imageAlt="test" link="/" title="hello" description="test"/>
                </div>

                <div className={`bg-[#bcdbbc] py-12 text-center flex flex-col gap-5 items-center px-[7.5%] w-full`}>
                    <h1 className="font-bold text-5xl">Partner Senior Centers</h1>
                </div>

                <div className="bg-[#e9f2eb] w-full flex flex-col justify-center py-8 gap-36">
                    <PartnerIcon styles="h-10" imageSrc={partnertest} imageAlt="test" link="/" title="hello" description="test"/>
                    <PartnerIcon styles="h-10" imageSrc={partnertest} imageAlt="test" link="/" title="hello" description="test"/>
                    <PartnerIcon styles="h-10" imageSrc={partnertest} imageAlt="test" link="/" title="hello" description="test"/>
                    <PartnerIcon styles="h-10" imageSrc={partnertest} imageAlt="test" link="/" title="hello" description="test"/>
                </div>

                <div className="bg-[#bcdbbc] py-12 text-center flex flex-col gap-5 items-center px-[7.5%] w-full">
                    <h1 className="font-bold text-5xl">Partner Student Volunteer Organizations</h1>
                </div>

                <div className="bg-[#e9f2eb] w-full flex flex-col justify-center py-8 gap-36">
                    <PartnerIcon styles="h-10" imageSrc={partnertest} imageAlt="test" link="/" title="hello" description="test"/>
                    <PartnerIcon styles="h-10" imageSrc={partnertest} imageAlt="test" link="/" title="hello" description="test"/>
                    <PartnerIcon styles="h-10" imageSrc={partnertest} imageAlt="test" link="/" title="hello" description="test"/>
                    <PartnerIcon styles="h-10" imageSrc={partnertest} imageAlt="test" link="/" title="hello" description="test"/>
                </div>
            </div>

            <Contact />
            <Footer/>
        </main>
    )
}