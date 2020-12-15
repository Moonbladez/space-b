//styles
import styles from "./Banner.module.scss";

function Banner(props) {
	return (
		<div
			className={styles.banner}
			role='banner'
			style={{
				backgroundImage: "url(" + props.imageUrl + ")",
				background: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.9)100%), url(${props.imageUrl})  `,
			}}
		>
			<div className={styles.container}>
				<h1>{props.title}</h1>
				<p>{props.subtitle}</p>
			</div>
		</div>
	);
}

export default Banner;
