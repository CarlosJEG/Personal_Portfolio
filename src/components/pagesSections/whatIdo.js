import { html, css, express, figma, git, javascript, materialui, nextjs, nodejs, react, typescript, vscode } from "../../../public/index"
import LogoTegnologies from '../whaIdo/logoTegnologies'
import styles from '@/styles/whatIdo.module.scss'

const WhatIdo = () => {
  return (
    <div className={styles.whatIdo}>
        <h3>Mi Stack de Tecnologias</h3>
        <div className={styles.whatIdoContainer}>
            <LogoTegnologies logo={html} name={'HTML'}/>
            <LogoTegnologies logo={css} name={'CSS'}/>
            <LogoTegnologies logo={materialui} name={'Material UI'}/>
            <LogoTegnologies logo={javascript} name={'JavaScript'}/>
            <LogoTegnologies logo={typescript} name={'TypeScript'}/>
            <LogoTegnologies logo={react} name={'ReactJS'}/>
            <LogoTegnologies logo={nextjs} name={'NextJS'}/>
            <LogoTegnologies logo={nodejs} name={'NodeJS'}/>
            <LogoTegnologies logo={express} name={'ExpressJS'}/>
            <LogoTegnologies logo={vscode} name={'VScode'}/>
            <LogoTegnologies logo={git} name={'Git'}/>
            <LogoTegnologies logo={figma} name={'Figma'}/>
        </div>
    </div>
  )
}

export default WhatIdo