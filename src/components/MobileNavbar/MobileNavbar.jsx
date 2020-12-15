//modules
import { useState } from "react";
import NavLink from "next/link";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

//styles
import styles from "./MobileNavbar.module.scss";

export function MobileNavbar() {
	const [isOpen, setIsOn] = useState(false);

	const handleToggle = () => {
		setIsOn(!isOpen);
	};

	return (
		<header className={styles.mobileNavbar}>
			<div onClick={handleToggle}>
				<NavLink href='/'>{!isOpen ? <RiMenuLine /> : <RiCloseLine />}</NavLink>
			</div>
			{isOpen && (
				<nav>
					<ul onClick={handleToggle}>
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
			)}
		</header>
	);
}
