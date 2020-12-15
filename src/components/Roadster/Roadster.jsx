//modules
import { useState } from "react";
import { AiOutlineSwap } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";

//components
import Button from "../Button/Button";

//styles
import styles from "./Roadster.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Roadster(props) {
	const [speed, setSpeed] = useState(false);
	const [marsDistance, setMarsDistance] = useState(false);
	const [earthDistance, setEarthDistance] = useState(false);

	const getTime = () => {
		let timeStamp = props.data.launch_date_unix;
		const date = new Date(timeStamp * 1000);
		return date.toDateString();
	};

	const numberWithCommas = (number) => {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};

	const kph = `${Math.ceil(props.data.speed_kph)} kph`;
	const mph = `${Math.ceil(props.data.speed_mph)} mph`;
	const days = `${Math.round(props.data.period_days)} days`;
	const mDistanceKm = `${numberWithCommas(
		Math.round(props.data.mars_distance_km)
	)} km`;
	const mDistanceMi = `${numberWithCommas(
		Math.round(props.data.mars_distance_mi)
	)} mi`;
	const eDistanceKm = `${numberWithCommas(
		Math.round(props.data.earth_distance_km)
	)} km`;
	const eDistanceMi = `${numberWithCommas(
		Math.round(props.data.earth_distance_mi)
	)} mi`;

	

	return (
		<section className={styles.roadster}>
			<h2>{props.data.name}</h2>

			<div className={styles.image}>
				<LazyLoadImage
					src={props.data.flickr_images[2]}
					alt={props.data.name}
					effect='blur'
				/>
			</div>
			<div className={styles.details}>
				<p>{props.data.details}</p>
			</div>
			<div className={styles.facts}>
				<h3>Facts</h3>
				<div className={styles.facts__row}>
					Launch Date:
					<span>{getTime()}</span>
				</div>
				<div className={styles.facts__row}>
					Time in Space:
					<span>{days}</span>
				</div>
				<div className={styles.facts__row}>
					Current Speed:
					<AiOutlineSwap onClick={() => setSpeed(!speed)} />
					<span>{speed ? kph : mph}</span>
				</div>
				<div className={styles.facts__row}>
					Distance from Mars:
					<AiOutlineSwap onClick={() => setMarsDistance(!marsDistance)} />
					<span>{marsDistance ? mDistanceKm : mDistanceMi}</span>
				</div>
				<div className={styles.facts__row}>
					Distance from Earth:
					<AiOutlineSwap onClick={() => setEarthDistance(!earthDistance)} />
					<span>{earthDistance ? eDistanceKm : eDistanceMi}</span>
				</div>
			</div>
			<div className={styles.buttonWrapper}>
				<Button text='read more' href={props.data.wikipedia} />
				<Button text='see video' href={props.data.video} />
			</div>
		</section>
	);
}
