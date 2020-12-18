//modules
import { useState } from "react";

//components
import RoverImageCard from "../RoverImageCard/RoverImageCard";
import {Pagination} from "../Pagination/Pagination";

//styles
import styles from "./RoverImage.module.scss";

export default function RoverImage({ roverData, photos, range }) {
	console.log({roverData})

	const rover = roverData.photos[0].rover;
	// const [page, setPage] = useState(0)
	// const numberOfPages = Math.floor(photos.length / range)

	// const getPageSlice = (page) => {
	// 	const offset = page * range
	// 	return photos.slice(offset, offset + range)
	// }


	return (

		<section className={styles.roverImage}>
			<h2>Images from Rover</h2>
			<h3>{`About ${rover.name}`}</h3>

			<div className={styles.about}>
				<ul>
					<li>
						Launch date: <span>{rover.launch_date}</span>
					</li>
					<li>
						Landing date: <span>{rover.landing_date}</span>
					</li>
					<li>
						Status: <span>{rover.status}</span>
					</li>
				</ul>
			</div>
			{roverData.photos.map((item) => {
				return (
					<>
						<RoverImageCard
							image={item.img_src}
							key={item.id}
							earthDate={item.earth_date}
							cameraName={item.camera.full_name}
						/>
					</>
				);
			})}
			{/* <Pagination page={page} numberOfPages={numberOfPages} handlePageSet={setPage}/> */}
		</section>
	);
}
