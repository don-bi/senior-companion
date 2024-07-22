import Link from "next/link"
import styles from "./header.module.css";

export default function Header() {
    return (
    <header className={styles.header}>
        <div className="text-white">LOGOLOGO</div>
        <nav>
            <ul className={styles.ul}>
                <li><Link href={"/join"} className={styles.a}>Join Us</Link></li>
                <li><Link href={"/about"} className={styles.a}>About Us</Link></li>
                <li><Link href={"/join"} className={styles.a}>Join Us</Link></li>
            </ul>
        </nav>
    </header>
    )
}