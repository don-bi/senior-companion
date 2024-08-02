import Link from "next/link";
import styles from "./styles/roundLinkButton.module.css";

export default function RoundLinkButton({children, color="lightblue", href}: {children: React.ReactNode, color: string, href: string}) {
    const colors: {[key: string]: string} = {
        lightblue: "bg-sky-500 hover:bg-sky-700",
        darkblue: "bg-blue-500 hover:bg-blue-700",
        yellow: "bg-yellow-500 hover:bg-yellow-700",
    }

    return (
        <button className={`${colors[color]} 
        px-8 py-4 
        rounded-3xl 
        duration-100 
        font-semibold 
        text-white
        text-3xl
        w-full`}>
            <Link href={href}>
                {children}
            </Link>
        </button>
    )
}