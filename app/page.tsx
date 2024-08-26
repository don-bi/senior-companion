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
            <div className="flex flex-col justify-center items-center text-center gap-5 px-[7.5%] py-14 w-full">
                <h1 className="text-4xl font-semibold overflow-hidden w-3/6">Our Committment to a More Interconnected World</h1>
                <div className="text-2xl leading-10 tracking-wide text-center">Our journey is continually propelled by a simple and single idea: to bridge the gaps between generations and bring companionship, joy and understanding to our older adults.</div>
                <div className="flex relative gap-10 mt-6 w-full">
                  <div className={`relative w-[180rem] h-[20rem] rounded-[25px] ${generic.shadow}`}>
                    <Image src={kid} alt="kid looking at screen" fill={true} style={{objectFit: "cover", borderRadius: "25px"}}/>
                  </div>
                  <div className="text-2xl leading-10 tracking-wide text-left">Recognizing the general lack and need for intergenerational interactions, we aspire to connect young adult students with older adults. Primarily, we work by establishing and mediating relationships between interested individuals from partner student volunteer associations and senior centers.
                  </div>
                </div >
            
                <div className="flex relative gap-10 mt-6 w-full">
                  <div className="text-2xl leading-10 tracking-wide text-right">We are a community. A community that values the wisdom of older adults and the energy of our youth, working together to further a world where everyone feels heard, valued, and included. Join us as we continue to grow, one conversation at a time.
                  </div>
                  <div className={`mt-6 relative w-[136rem] h-[16rem] rounded-[25px] ${generic.shadow}`}>
                  <Image src={elderlywoman} alt="elderly woman looking at screen" fill={true} style={{objectFit: "cover", borderRadius: "25px"}}/>
                </div>
                </div>
                {/* <div className={`mt-6 relative w-8/12 h-80 rounded-[25px] ${generic.shadow}`}>
                  <Image src={elderlywoman} alt="elderly woman looking at screen" fill={true} style={{objectFit: "cover", borderRadius: "25px"}}/>
                </div> */}
            </div>
            </AppearingBlock>
          </div>

          {/* statistics section */}
          <div className={`flex flex-col gap-12 items-center px-[7.5%] py-10 bg-[#edf4ee] relative`}>
            <h1 className="text-4xl font-semibold overflow-hidden w-3/6 text-center">Our Near Term Goals</h1>
            <div className="flex gap-12 items-center w-full">
              <div className={`mt-6 relative w-8/12 h-[32rem] rounded-[25px] ${generic.shadow}`}>
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
