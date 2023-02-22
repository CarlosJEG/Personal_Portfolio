import Link from "next/link"

const Navbar = ({ style }) => {
  return (
    <nav className={style}>
        <ul>
            <li>
                <Link  href="./">Inicio</Link>
            </li>
            <li>
                <Link href="#projects">Proyectos</Link>
            </li>
            <li>
                <Link href="./">Mi stack</Link>
            </li>
            <li>
                <Link href="./">Contactame</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar