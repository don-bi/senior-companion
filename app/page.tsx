import Image from "next/image";
import styles from "./page.module.css";
import seniors from './public/seniors.jpg';
import Header from "./components/header";
import RoundLinkButton from "./components/round-link-button";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="bg-teal-50">
        <div className={styles.imageContainer}>
          <Header/>
          <Image src={seniors} alt={"senior citizens"} layout="fill" objectFit="cover" style={{filter: 'brightness(50%)'}}/>
        </div>
        <div className="flex-col items-center px-40 py-10">
            <div className="flex justify-between gap-20">
              <RoundLinkButton href="/about" color="lightblue">Go to ABout</RoundLinkButton>
              <RoundLinkButton href="/about" color="yellow">GOOO to about</RoundLinkButton>
            </div>
            <h1 className="mt-16 text-center text-5xl font-medium overflow-hidden/">Join our board!</h1>
            <p className="mt-16 font-medium text-lg tracking-wide">
                Perennial Prep is building a board committed to our core mission of accessible education. 
                We are currently seeking applications for our Marketing and Ambassadors teams, looking for individuals who can contribute to our growth and outreach. 
                Join our team by applying here:
            </p>
            <a href="/about.html" className="link-button">Apply Now</a>
        </div>
        <Footer/>
    </main>
  );
}
