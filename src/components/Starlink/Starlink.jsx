//styles
import styles from "./Starlink.module.scss";

export default function Starlink({ starlinkData }) {
	return (
		<section className={styles.starlink}>
			<h2>
				Number of Satellites Currently in Space:
				<span>{starlinkData.length}</span>
			</h2>
		</section>
	);
}
