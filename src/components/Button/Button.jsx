//modules
import Link from "next/link";

//styling
import styles from "./Button.module.scss";

export default function Button(props) {
	return (
		<Link href={props.href}>
			<a className={styles.button}>{props.text}</a>
		</Link>
	);
}
