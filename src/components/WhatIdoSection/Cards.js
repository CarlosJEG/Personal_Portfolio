import styles from '@/styles/whatIdo.module.scss'
import Image from "next/image"

const Cards = ({ logo, name }) => {
  return (
    <div className={styles.whatIdoCards}>
      <Image src={logo} alt={name}/>
      <p>{name}</p>
    </div>
  )
}

export default Cards