import { LazyLoadImage } from "react-lazy-load-image-component";

//styles
import styles from "./RoverImageCard.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function RoverImageCard(props) {
	return (
		<div className={styles.RoverImageCard}>
			<div className={styles.wrapper}>
				<LazyLoadImage src={props.image} alt='' effect='blur' />
				<div className={styles.information}>
					<span> {props.earthDate}</span>
					<span>{props.cameraName}</span>
				</div>
			</div>
		</div>
	);
}
