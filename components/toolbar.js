import { useRouter } from "next/router"
import styles from '../styles/Toolbar.module.css'

export const Toolbar = () => {
    const router = useRouter();

    return(
        <div className={styles.main}>
            <div onClick={() => router.push('/')}>Home</div>
            <div>Feed</div>
            <div>EOM</div>
            <div>Twitter</div>
        </div>
    )
}