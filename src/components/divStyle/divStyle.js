import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styles from '@/styles/div.module.scss'

const DivStyle = () => {

  return (
    <>
        <div className={styles.divStyle}>
          <p>Design</p>
          <ChevronRightIcon className={styles.divIcon}/>
          <p>Develop</p>
          <ChevronRightIcon className={styles.divIcon}/>
          <p>Discover</p>
          <ChevronRightIcon className={styles.divIcon}/>
          <p>Design</p>
          <ChevronRightIcon className={styles.divIcon}/>
          <p>Develop</p>
          <ChevronRightIcon className={styles.divIcon}/>
          <p>Discover</p>
        </div>
    </>
  )
}

export default DivStyle