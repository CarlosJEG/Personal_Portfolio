import Link from 'next/link'
import styles from '@/styles/header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.headerContainer}>
            <div>
                <Link href='./'>
                    <h1>CFOLIO.</h1>
                </Link>
            </div>
            <nav className={styles.headerNavbar}>
                <ul>
                    <li>
                        <Link href="./">Inicio</Link>
                    </li>
                    <li>
                        <Link href="#projects">Proyectos</Link>
                    </li>
                    <li>
                        <Link href="./">Mi stack</Link>
                    </li>
                    <li>
                        <Link href="./">Contactame</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header