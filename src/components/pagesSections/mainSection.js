import Image from 'next/image'
import perfil from '../../../public/profile.jpg'
import styles from '@/styles/main.module.scss'

const MainSection = () => {
  return (
    <main className={styles.main}>
        <div className={styles.mainContainer}>
            <div className={styles.mainPhoto}>
                <Image src={perfil} alt='perfil'/>
            </div>
            <div className={styles.mainGreeting}>
                <h2>Hola, Soy Carlos JEG, <br/> Desarrollador Web Front-End</h2>
            </div>
            <div className={styles.mainIntroduction}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing <br/> elit. Sed labore corruptia</p>
            </div>
            <div className={styles.mainBtn}>
                <button className={styles.mainBtn}>Comunicate Conmigo</button>
                <button>Mis Proyectos</button>
            </div>
        </div>
    </main>
  )
}

export default MainSection