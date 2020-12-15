//components
import { useState } from "react";
import RocketCard from "../RocketCard/RocketCard";

//styling
import styles from "./Rockets.module.scss";

export default function Rockets({ data }) {
	const [selected, setSelected] = useState("all");

	const getDataByStatus = (status) => {
		if (status === "all") {
			return data;
		}
		return data.filter((item) => (status === "active") === item.active);
	};

	return (
		<section className={styles.rockets}>
			<h2>Rockets</h2>
			<fieldset>
				<div>
					<label htmlFor='status-all'>All</label>
					<input
						onChange={({ currentTarget }) => setSelected(currentTarget.value)}
						type='radio'
						name='status'
						id='status-all'
						value='all'
						checked={selected === "all"}
					/>
				</div>
				<div>
					<label htmlFor='status-active'>Active</label>
					<input
						onChange={({ currentTarget }) => setSelected(currentTarget.value)}
						type='radio'
						name='status'
						id='status-active'
						value='active'
						checked={selected === "active"}
					/>
				</div>
				<div>
					<label htmlFor='status-all'>Inactive</label>
					<input
						onChange={({ currentTarget }) => setSelected(currentTarget.value)}
						type='radio'
						name='status'
						id='status-inactive'
						value='inactive'
						checked={selected === "inactive"}
					/>
				</div>
			</fieldset>

			{getDataByStatus(selected).map((rocket) => {
				return (
					<div className={styles.wrapper}>
						<RocketCard
							name={rocket.name}
							images={rocket.flickr_images}
							description={rocket.description}
							firstFlight={rocket.first_flight}
							costPerLaunch={rocket.cost_per_launch}
							link={rocket.wikipedia}
							weightMass={rocket.mass}
							country={rocket.country}
							heightOf={rocket.height}
							active={rocket.active}
							success={rocket.success_rate_pct}
						/>
					</div>
				);
			})}
		</section>
	);
}
