import styles from '@/styles/Header.module.scss'
import ListIcon from '@mui/icons-material/List';
import Navbar from './Navbar';
import { useState } from 'react';
import Link from 'next/link'


const Header = () => {

    const [ openMenu, setOpenMenu ] = useState(false)

  return (
    <header className={styles.header}>
        <div className={styles.headerContainer}>
            <div>
                <Link href='./'>
                    <h1>CFOLIO.</h1>
                </Link>
            </div>
            <Navbar style={styles.headerNavbar}/>
            {openMenu ? <Navbar style={styles.headerNavbarMenu}/> : null}
            <ListIcon className={styles.headerMenu} onClick={() => setOpenMenu(!openMenu)}/>
        </div>
    </header>
  )
}

export default Header