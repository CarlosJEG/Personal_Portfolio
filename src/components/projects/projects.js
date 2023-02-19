import Image from 'next/image'
import styles from '@/styles/projects.module.scss'
import landingPage from '../../../public/landingPage.png'

const Projects = () => {
  return (
    <div className={styles.projectsCards}>
        <div className={styles.projectsCardsImg}>
            <Image src={landingPage} alt='Card'/>
        </div>
        <div className={styles.projectsTitle}>
            <p className={styles.projectsName}>Titulo del Proyecto</p>
            <p className={styles.projectsInfo}>Lorem ipsum dolor sit amet</p>
        </div>
    </div>
  )
}

export default Projects