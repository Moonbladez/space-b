//components
import { MobileNavbar } from "../MobileNavbar/MobileNavbar"
import {Footer} from "../Footer/Footer"

export function Layout({children}) {

    return (
        <>
        <MobileNavbar />
            {children}
        <Footer/> 
        </>
    )
}
