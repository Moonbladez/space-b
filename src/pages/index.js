//libraries
import Head from "next/head";

//components
import Banner from "../components/Banner/Banner";
import Countdown from "../components/Countdown/Countdown";
import Roadster from "../components/Roadster/Roadster";
import APOD from "../components/APOD/APOD";

//styling
import styles from "../styles/pages/Home.module.scss";

export async function getStaticProps() {
	const request = await fetch("https://api.spacexdata.com/v4/launches/next");
	const data = await request.json();

	const roadsterRequest = await fetch("https://api.spacexdata.com/v4/roadster");
	const roadsterData = await roadsterRequest.json();

	const apod = await fetch(
		`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_CODE}`
	);
	const apodData = await apod.json();

	return {
		props: {
			data,
			roadsterData,
			apodData,
		},
	};
}

export default function Home(props) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Space B | Home</title>
				<meta name="description" content="Space B site provides information and news about the latest space technologies. Including, satellities, and images." />
				<link rel='icon' href='/favicon.ico' />
				<meta property="og:title" content="Space B" key="ogtitle" />
			    <meta property="og:description" content="Space B site provides information and news about the latest space technologies. Including, satellities, and images." key="ogdesc" />
				<html lang="en"/>
				{/* Twitter */}
				<meta name="twitter:card" content="summary" key="twcard" />
				<meta name="twitter:creator" content="@jegheterbekki" key="twhandle" />

				{/* OG */}
				<meta property="og:url" content="https://space-b.vercel.app/" key="ogurl" />
				<meta property="og:image" content="https://i.imgur.com/FhFhPvj.jpg" key="ogimage" />
				<meta property="og:site_name" content="Space B" key="ogsitename" />
				<meta property="og:title" content="Space B" key="ogtitle" />
				<meta property="og:description" content="Space B site provides information and news about the latest space technologies. Including, satellities, and images." key="ogdesc" />
			</Head>

			<Banner
				title='Space-B'
				subtitle='discovering the beyond'
				imageUrl='images/home-banner.jpg'
			/>

			<main className={styles.main}>
				<Countdown data={props.data} />
				<Roadster data={props.roadsterData} />
				<APOD data={props.apodData} />
			</main>
		</div>
	);
}
