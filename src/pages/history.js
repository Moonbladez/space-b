//modules
import Head from "next/head";

//components
import Banner from "../components/Banner/Banner";
import Timeline from "../components/Timeline/Timeline"

export async function getStaticProps() {
	const history = await fetch(`https://api.spacexdata.com/v4/history`);
	const historyData = await history.json();

	return {
		props: {
			historyData,
		},
	};
}

export default function Images(props) {
	return (
		<div>
			<Head>
				<title>Space B | History</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Banner
				title='The History of Space X'
				imageUrl='images/images-banner.webp'
			/>
			<main>
				<section>
					<Timeline timelineData={props.historyData}/>
					
				</section>
			</main>
		</div>
	);
}
