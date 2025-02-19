import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import styles from "./page.module.css";
import PartnerIcon from "@/components/partner-icon";

import { jeff, ulster, peter, medlife, premed, sunshine, community } from "./image-exports";

export default function Branches() {
    return (
        <main className="bg-slate-50 h-full">
            <Header scroll={false}/>
            <div className={`${styles.branches} w-full flex flex-col items-center`}>
                <div className={`bg-[#bcdbbc] xl:pt-32 py-12 text-center flex flex-col gap-5 items-center px-[7.5%] w-full`}>
                    <h1 className="font-bold text-5xl">Partner Older Adult Centers</h1>
                </div>

                <div className="bg-[#e9f2eb] w-full flex flex-col items-start justify-center py-8 gap-36 px-14 md:px-32">
                    <PartnerIcon styles="h-10" imageSrc={peter} imageAlt="CCNS Peter J. Dellamonica Older Adult Center" link="https://www.ccbq.org/older-adult-centers/dellamonica-steinway-older-adult-center/" title="CCNS Peter J. Dellamonica Older Adult Center" description=""/>
                    <PartnerIcon styles="h-10" imageSrc={jeff} imageAlt="Jefferson County Office for the Aging" link="https://www.jeffersoncountyny.gov/departments/OfficefortheAging" title="Jefferson County Office for the Aging" description=""/>
                    <PartnerIcon styles="h-10" imageSrc={ulster} imageAlt="Ulster County Office for the Aging" link="https://ulstercountyny.gov/aging" title="Ulster County Office for the Aging" description=""/>
                </div>

                <div className="bg-[#bcdbbc] py-12 text-center flex flex-col gap-5 items-center px-[7.5%] w-full">
                    <h1 className="font-bold text-5xl">Partner Student Volunteer Organizations</h1>
                </div>

                <div className="bg-[#e9f2eb] w-full flex flex-col items-start justify-center py-8 gap-36 px-14 md:px-32">
                    <PartnerIcon styles="h-10" imageSrc={medlife} imageAlt="Medlife Chapter at Stony Brook" link="https://www.medlifemovement.org/ " title="Medlife Chapter at Stony Brook" description="MEDLIFE is a 501(c)(3) non-profit organization that partners with low-income communities in Latin America and Africa to improve access to medicine, education, and community development projects."/>
                    <PartnerIcon styles="h-10" imageSrc={premed} imageAlt="Pre-Med Society " link="https://stonybrook.campuslabs.com/engage/organization/premedsociety" title="Pre-Med Society " description="The Pre-Med Society of SBU supports the goals and interests of Stony Brook University students considering a career in medicine and to provide them with resources and information to help prepare them for this career."/>
                    <PartnerIcon styles="h-10" imageSrc={community} imageAlt="Community Service Club at Stony Brook " link="https://stonybrook.campuslabs.com/engage/organization/csc" title="Community Service Club at Stony Brook " description="The Community Service Club at Stony Brook University is dedicated to fostering a spirit of service, empathy, inclusion, and local engagement."/>
                    <PartnerIcon styles="h-10" imageSrc={sunshine} imageAlt="Project Sunshine" link="https://projectsunshine.org/" title="Project Sunshine " description="Project Sunshine brings volunteer-led programming to pediatric patients and their families in a variety of medical settings."/>
                </div>
            </div>

            <Contact />
            <Footer/>
        </main>
    )
}