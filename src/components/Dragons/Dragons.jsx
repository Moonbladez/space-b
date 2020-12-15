//components
import DragonCard from "../DragonCard/DragonCard";

//styling
import styles from "./Dragons.module.scss";

export default function Dragons({ dragonData }) {
	return (
		<section className={styles.dragons}>
			<h2>Dragons</h2>
			{dragonData.map((dragon) => {
				return (
					<DragonCard
						name={dragon.name}
						images={dragon.flickr_images}
						description={dragon.description}
						launchDate={dragon.first_flight}
						crew={dragon.crew_capacity}
						orbitDuration={dragon.orbit_duration_yr}
						link={dragon.wikipedia}
						launchMass={dragon.launch_payload_mass}
						returnMass={dragon.return_payload_mass}
					/>
				);
			})}
		</section>
	);
}
