import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styles from '@/styles/Bar.module.scss'

const Bar = () => {

  return (
    <>
        <div className={styles.Bar}>
          <p>Design</p>
          <ChevronRightIcon className={styles.BarIcon}/>
          <p>Develop</p>
          <ChevronRightIcon className={styles.BarIcon}/>
          <p>Discover</p>
        </div>
    </>
  )
}

export default Bar