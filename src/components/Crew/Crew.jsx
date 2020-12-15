//components
import CrewCard from "../CrewCard/CrewCard";

//styles
import styles from "./Crew.module.scss";

export default function Crew({ data }) {
	return (
		<section className={styles.crew}>
			<h2>Space X Crew</h2>
			{data.map((member) => {
				return (
					<CrewCard
						image={member.image}
						name={member.name}
						link={member.wikipedia}
						agency={member.agency}
						launches={member.launches}
					/>
				);
			})}
		</section>
	);
}
