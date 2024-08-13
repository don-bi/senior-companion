import styles from "./page.module.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Statistics from "@/components/statistics/statistics";
import Images from "@/components/images/images";
import AppearingBlock from "@/components/appearingBlock/appearing-block";
import Image from "next/image";
import senior from "@/public/seniors.jpg";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <main className="bg-slate-50  ">
        <Header scroll={true}/>
        <Images />

        <div className="flex-col items-center px-5 py-5 md:py-10 overflow-visible">

          {/* mission statement section */}
          <AppearingBlock style="flex justify-center">
            <div className="mission-statement flex flex-col justify-center text-center gap-5 border-b-2 border-yellow-950 pb-8 w-3/4">
                <h1 className="text-4xl font-semibold overflow-hidden">Mission Statement</h1>
                <p className="text-xl">
                  Our students foster meaningful connections with their older adult companions,
                  enhancing the quality of life for both through shared experiences,
                  respect and mutual learning. We aim to bridge generational gaps, promote empathy,
                  and create a supportive community where every story is valued and every moment is cherished.
                </p>
            </div>
          </AppearingBlock>

          {/* statistics section */}
          <div className={`${styles.statSection} flex mt-10 gap-12 items-center`}>
            <div className={`${styles.shadow} w-11/12 md:w-8/12`}>
              <Image src={senior} alt="senior picture" />
            </div>
            <Statistics />
          </div>

        </div>
        <Contact />
        <Footer snap={true}/>
    </main>
  );
}
