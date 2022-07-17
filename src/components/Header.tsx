import igniteLogo from '../assets/header-logo.svg'
import styles from './Header.module.css'

export function Header() {
    return(
        <header className={styles.header}>
            <img src={igniteLogo}/>
            <strong>to</strong>
            <strong>do</strong>
        </header>
    )
}