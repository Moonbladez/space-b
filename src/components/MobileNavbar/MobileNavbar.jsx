//modules
import {useState} from "react"
import Link from "next/link"
import { RiMenuLine, RiCloseLine } from "react-icons/ri"

//styles
import styles from "./MobileNavbar.module.scss"

export function MobileNavbar() {
    const [isOpen, setIsOn] = useState(false)

    const handleToggle = () => {
        setIsOn(!isOpen)
    }
    
    return (
        <header className={styles.mobileNavbar}>
            <div onClick={handleToggle}>
                <Link href="/">
                    {(!isOpen) ?  <RiMenuLine/> : <RiCloseLine/>}
                   
                </Link>
            </div>
            {isOpen &&
                <nav>
                    <ul onClick={handleToggle}>
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/ships">
                                Ships
                            </Link>
                        </li>
                        <li>
                            <Link href="/crew">
                                Crew
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>    
            }
        </header>
    )
}

