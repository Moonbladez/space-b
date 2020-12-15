//components
import { MobileNavbar } from "../MobileNavbar/MobileNavbar";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

export function Layout({ children }) {
	return (
		<>
			<MobileNavbar />
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
