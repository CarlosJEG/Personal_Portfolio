import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styles from '@/styles/div.module.scss'

const DivStyle = () => {

    const div = ["Design", "Develop", "Discover", "Design", "Develop", "Discover", "Design", "Develop", "Discover", "Design", "Develop", "Discover"]

  return (
    <>
        <div className={styles.divStyle}/>
        <div className={styles.divStyleTwo}>
            {div.map((div, i) => (
              <>
                <p key={i}>{div}</p>
                <ChevronRightIcon key={i} className={styles.divIcon}/>
              </>
            ))}
        </div>
    </>
  )
}

export default DivStyle