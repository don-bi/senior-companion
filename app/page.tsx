import styles from "./page.module.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Statistics from "@/components/statistics/statistics";
import Images from "@/components/images/images";
import AppearingBlock from "@/components/appearingBlock/appearing-block";
import Image from "next/image";
import Contact from "@/components/contact/contact";
import generic from "@/components/styles/generic.module.css";

import senior from "@/public/seniors.jpg";
import kid from "@/public/home/kid.jpeg";
import woman from "@/public/home/woman.jpeg";
import elderlywoman from "@/public/home/elderlywoman.jpeg";
import seniorsoncouch from "@/public/home/seniorsoncouch.jpeg";

export default function Home() {
  return (
    <main className="bg-slate-50">
        <Header scroll={true}/>
        <Images />

        <div className="flex-col items-centermd:py-10 overflow-visible">

          {/* mission statement section */}
            <div className="bg-[#d3ecd3ff]">
            <AppearingBlock style="flex justify-center">
            <div className="flex flex-col justify-center items-center text-center gap-5 px-4 md:px-[7.5%] py-8 md:py-14 w-full">
              <h1 className="text-2xl md:text-4xl font-semibold overflow-hidden w-full md:w-3/6">Our Committment to a More Interconnected World</h1>
              
                <div className="flex flex-col md:flex-row w-full gap-4 md:gap-8">
                  <div className="flex flex-col relative gap-6 md:gap-10 mt-4 md:mt-6 items-center">
                  <img src="/home/kid.jpeg" alt="Kid" className={`w-full md:w-auto h-auto rounded-[25px] ${generic.shadow}`} />
          
                  <div className="text-base md:text-xl leading-8 md:leading-10 tracking-wide mt-16">
                  We are a community. A community that values the wisdom of older adults and the energy of our youth, working together to further a world where everyone feels heard, valued, and included. Join us as we continue to grow, one conversation at a time.
                  </div>
                </div>

                <div className="flex flex-col relative gap-6 md:gap-10 mt-4 md:mt-6 items-center">
                <div className="text-base md:text-xl leading-8 md:leading-10 tracking-wide">Our journey is continually propelled by a simple and single idea: to bring companionship, joy and understanding to our older adults. Recognizing the general lack and need for intergenerational interactions, we aspire to connect young adult students with older adults. Primarily, we work by establishing and mediating relationships between interested individuals from partner student volunteer associations and senior centers.
                </div>
                <img src="/home/elderlywoman.jpeg" alt="Elderly woman" className={`w-full md:w-auto h-auto rounded-[25px] ${generic.shadow}`} />
                </div>
              </div>
            </div>
            </AppearingBlock>
            </div>

          {/* statistics section */}
            <div className={`flex flex-col gap-8 md:gap-12 items-center px-4 md:px-[7.5%] py-8 md:py-10 bg-[#edf4ee] relative`}>
            <h1 className="text-2xl md:text-4xl font-semibold overflow-hidden w-full md:w-3/6 text-center">Where We Are</h1>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center w-full">
              <div className={`relative w-full md:w-8/12 h-[24rem] md:h-[32rem] rounded-[25px] ${generic.shadow}`}>
              <Image src={seniorsoncouch} alt="elderly woman looking at screen" fill={true} style={{objectFit: "cover", borderRadius: "25px"}}/>
              </div>
              <Statistics />
            </div>
            </div>

        </div>
        <Contact />
        <Footer/>
    </main>
  );
}
