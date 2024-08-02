import styles from "./page.module.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Statistics from "./components/statistics";
import Images from "./components/images";

export default function Home() {
  return (
    <main className="bg-teal-50">
        <div className={styles.imageContainer}>
          <Header/>
          <Images />
        </div>
        <div className="flex-col items-center px-5 py-5 md:px-40 md:py-10">
            <Statistics />
            <a href="/about.html" className="link-button">Apply Now</a>
        </div>
        <Footer/>
    </main>
  );
}
