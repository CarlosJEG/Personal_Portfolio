import styles from '@/styles/Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.Footer}>
        <div className={styles.FooterContainer}>
            <Link href='./'>
                <h1>CFOLIO.</h1>
            </Link>
            <p>@CarlosJEG</p>
        </div>
    </div>
  )
}

export default Footer