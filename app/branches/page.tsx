import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Branches() {
    return (
        <main className="bg-slate-50 h-full">
            <Header scroll={false}/>
            <div className="w-full flex flex-col items-center">
                <div className="pt-32 pb-24 text-center flex flex-col gap-5 items-center w-9/12">
                    <h1 className="font-bold text-5xl">Our Partner Branches</h1>
                    <h2 className="font-semibold text-3xl tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                    <p className="font-medium text-xl tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <Carousel />
            </div>
            <Footer />
        </main>
    )
}