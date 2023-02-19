import { html, css, express, figma, git, javascript, materialui, nextjs, nodejs, react, typescript, vscode } from "../../../public/index"
import Cards from './Cards'
import styles from '@/styles/whatIdo.module.scss'

const WhatIdo = () => {
  return (
    <div className={styles.whatIdo}>
        <h3>Mi Stack de Tecnologias</h3>
        <div className={styles.whatIdoContainer}>
            <Cards logo={html} name={'HTML'}/>
            <Cards logo={css} name={'CSS'}/>
            <Cards logo={materialui} name={'Material UI'}/>
            <Cards logo={javascript} name={'JavaScript'}/>
            <Cards logo={typescript} name={'TypeScript'}/>
            <Cards logo={react} name={'ReactJS'}/>
            <Cards logo={nextjs} name={'NextJS'}/>
            <Cards logo={nodejs} name={'NodeJS'}/>
            <Cards logo={express} name={'ExpressJS'}/>
            <Cards logo={vscode} name={'VScode'}/>
            <Cards logo={git} name={'Git'}/>
            <Cards logo={figma} name={'Figma'}/>
        </div>
    </div>
  )
}

export default WhatIdo