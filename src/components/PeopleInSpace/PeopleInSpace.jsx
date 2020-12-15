//modules
import { v4 as uuidv4 } from "uuid";

//styles
import styles from "./PeopleInSpace.module.scss";

export default function PeopleInSpace({ data }) {
	return (
		<section className={styles.peopleInSpace}>
			<h2>
				Total of Number of People current in space: <span>{data.number} </span>
			</h2>
			<div className={styles.peopleInSpace__wrapper}>
				<ol>
					{data.people.map((person) => {
						return (
							<li key={uuidv4()}>
								{person.name} on the {person.craft}
							</li>
						);
					})}
				</ol>
			</div>
		</section>
	);
}
