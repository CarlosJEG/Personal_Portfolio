import styles from '@/styles/projects.module.scss'
import Projects from '../projects/projects'

const ProjectsSection = () => {
  return (
    <section className={styles.projects}>
        <div className={styles.projectsContainer}>
            <h3 id='projects'>Mis Proyectos Realizados</h3>
            <div className={styles.projectsCardsContainer}>
                <Projects/>
                <Projects/>
                <Projects/>
                <Projects/>
                <Projects/>
                <Projects/>
            </div>
        </div>
    </section>
  )
}

export default ProjectsSection