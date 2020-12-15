//modules
import { LazyLoadImage } from "react-lazy-load-image-component";

//styless
import styles from "./Countdown.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Countdown(props) {
	const getTime = () => {
		let timeStamp = props.data.date_unix;
		const date = new Date(timeStamp * 1000);
		return date.toDateString();
	};

	console.log(props)

	return (
		<section className={styles.countdown}>
			<h2>Next Launch: {props.data.name}</h2>
			<div className={styles.timer}>
				<p>{getTime()}</p>
			</div>
			<div className={styles.info}>
				<div className={styles.image}>
					{props.data.links.patch.small ? 
					
					<LazyLoadImage
						src={props.data.links.patch.small}
						alt={props.data.name}
						effect='blur'
					/>: 
					<LazyLoadImage
					src="https://i.imgur.com/uUHXqZO.png"
					alt="image not found"
					effect='blur'
				/>
				}
				
				</div>
			</div>

			<div className={styles.details}>
				<p>{props.data.details}</p>
			</div>
		</section>
	);
}
