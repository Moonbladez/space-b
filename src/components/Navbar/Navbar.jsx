//modules
import NavLink from "next/link";
import { SiSpacex } from "react-icons/si";

//styles
import styles from "./Navbar.module.scss";

export function Navbar() {
	return (
		<header className={styles.navbar}>
			<div className={styles.logo}>
				<SiSpacex />
			</div>
			<nav>
				<ul>
					<li>
						<NavLink href='/'>Home</NavLink>
					</li>
					<li>
						<NavLink href='/technology'>Technology in Space</NavLink>
					</li>
					<li>
						<NavLink href='/people'>People in Space</NavLink>
					</li>
					<li>
						<NavLink href='/images'>Images</NavLink>
					</li>
					<li>
						<NavLink href='/history'>History</NavLink>
					</li>
					<li>
						<NavLink href='/contact'>Contact</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
