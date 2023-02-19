import styles from '@/styles/Contact.module.scss'

const Contact = () => {
  return (
    <div className={styles.Contact}>
        <div className={styles.ContactContainer}>
            <div className={styles.ContactInfo}>
                <h3>Contactame</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Doloribus, pariatur eius maxime voluptatem</p>
                <div className={styles.ContactEmail}>
                    <p>Carlos.jeg98@gmail.com</p>
                </div>
                <div className={styles.ContactNro}>
                    <p>+56920432378</p>
                </div>
            </div>
            <div className={styles.Contactform}>
                <label htmlFor="name">Nombre: </label>
                <input type="text" name="name" placeholder='Tu Nombre'/>
                <label htmlFor="lastName">Apellido: </label>
                <input type="text" name="lastName" placeholder='Tu Apellido'/>
                <label htmlFor="Email">Correo: </label>
                <input type="email" name="Email" placeholder='Tu Correo'/>
                <label htmlFor="Comment">Comentario: </label>
                <textarea name="Comment" cols="30" rows="10"></textarea>
                <button>Enviar</button>
            </div>
        </div>
    </div>
  )
}

export default Contact