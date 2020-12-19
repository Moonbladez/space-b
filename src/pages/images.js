//modules
import Head from "next/head";

//components
import Banner from "../components/Banner/Banner";
import APOD from "../components/APOD/APOD";
import RoverImage from "../components/RoverImage/RoverImage";


export async function getStaticProps() {
	const apod = await fetch(
		`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_CODE}`
	);
	const apodData = await apod.json();

	const rover = await fetch(
		`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-11-11&page=2&api_key=${process.env.NASA_CODE}`
	);
	const roverData = await rover.json();

	console.log(roverData)

	return {
		props: {
			apodData,
			roverData,
		},
	};
}



export default function Images(props) {
	return (
		<div>
			<Head>
				<title>Space B | Images</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Banner title='Images from Space' imageUrl='images/images-banner.jpg' />
			<main>
				<APOD data={props.apodData} />
				<RoverImage roverData={props.roverData} />
			</main>
		</div>
	);
}
