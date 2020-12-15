//modules
import { LazyLoadImage } from "react-lazy-load-image-component";

//styles
import styles from "./APOD.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function APOD({ data }) {
	return (
		<section className={styles.apod}>
			<h2>Astronomy Picture of the Day</h2>
			<div className={styles.apod__image}>
				<LazyLoadImage src={data.url} alt={` ${data.title}`} />
				<span>
					&#169; {data.copyright} - {data.date}
				</span>
			</div>
			<div className={styles.info}>
				<h3>{data.title}</h3>
				<div>
					<p>{data.explanation}</p>
				</div>
			</div>
		</section>
	);
}
