import styles from '@/styles/Projects.module.scss'
import Cards from './Cards'

const Projects = () => {
  return (
    <section className={styles.projects}>
        <div className={styles.projectsContainer}>
            <h3 id='projects'>Mis Proyectos <span>Realizados</span></h3>
            <div className={styles.projectsCardsContainer}>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
        </div>
    </section>
  )
}

export default Projects