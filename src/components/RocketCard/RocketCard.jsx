//modules
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiOutlineSwap } from "react-icons/ai";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

//styles
import styles from "./RocketCard.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

const numberWithCommas = (number) => {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function RocketCard({
	images,
	link,
	name,
	description,
	firstFlight,
	costPerLaunch,
	weightMass,
	country,
	heightOf,
	active,
	success,
}) {
	const [mass, setMass] = useState(false);
	const [height, setHeight] = useState(false);
	const [increment, setIncrement] = useState(0);

	const massKgs = `${numberWithCommas(weightMass.kg)} kgs`;
	const massLbs = `${numberWithCommas(weightMass.lb)} lbs`;

	const heightMs = `${numberWithCommas(heightOf.meters)} meters`;
	const heightFeet = `${numberWithCommas(heightOf.feet)} feet`;

	return (
		<article className={styles.rocketCard}>
			<div className={styles.image}>
				<LazyLoadImage
					src={images[increment]}
					alt={name}
					effect='blur'
					className={styles.blur}
				/>
				{increment > 0 && (
					<FaArrowAltCircleLeft
						className={`${styles.pagination} ${styles.paginationLeft}`}
						onClick={() => {
							setIncrement(increment - 1);
						}}
					/>
				)}
				{increment < images.length - 1 && (
					<FaArrowAltCircleRight
						className={`${styles.pagination} ${styles.paginationRight}`}
						onClick={() => {
							setIncrement(increment + 1);
						}}
					/>
				)}
			</div>
			<h3>{name}</h3>

			<p className={styles.description}>{description}</p>
			<div className={styles.data}>
				Launch Data: <span>{firstFlight}</span>
			</div>
			<div className={styles.data}>
				Success Rate: <span>{`${success} %`}</span>
			</div>
			<div className={styles.data}>
				Active Status:
				<span className={active ? `${styles.active}` : `${styles.inactive}`}>
					{active ? "active" : "inactive"}
				</span>
			</div>
			<div className={styles.data}>
				Cost per Launch: <span>$ {numberWithCommas(costPerLaunch)}</span>
			</div>
			<div className={styles.data}>
				Country: <span>{country}</span>
			</div>
			<div className={`${styles.data} ${styles.toggle}`}>
				Mass:
				<AiOutlineSwap onClick={() => setMass(!mass)} />
				<span>{mass ? massKgs : massLbs}</span>
			</div>
			<div className={`${styles.data} ${styles.toggle}`}>
				Height: <AiOutlineSwap onClick={() => setHeight(!height)} />
				<span>{height ? heightMs : heightFeet}</span>
			</div>
			<a
				href={link}
				target='_blank'
				className={styles.button}
			>{`more on ${name}`}</a>
		</article>
	);
}
