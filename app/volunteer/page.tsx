import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import VolunteerForm from "@/components/volunteer-form";

export default function Branches() {
    return (
        <main className="bg-slate-50 h-full">
            <Header scroll={false}/>
            <div className="pt-32 bg-[#e9f2eb]">
                <VolunteerForm />
            </div>

            <Contact />
            <Footer/>
        </main>
    )
}