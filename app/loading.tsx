import Loader from "./components/loader"
import styles from "./components/styles/loader.module.css"
import generic from "./components/styles/generic.module.css"

export default function Loading() {
    return (
        <html className={`${generic.backgroundPeach} h-full flex items-center justify-center`}>
            <div className={styles.div}>
                <Loader />
            </div>
        </html>
    )
}