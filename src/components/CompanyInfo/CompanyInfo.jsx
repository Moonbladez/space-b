//modules
import { RiTwitterLine } from "react-icons/ri";
import { ImFlickr2 } from "react-icons/im";
import { SiSpacex } from "react-icons/si";

//styles
import styles from "./CompanyInfo.module.scss";

export default function CompanyInfo({ data }) {
	const numberWithCommas = (number) => {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};

	return (
		<section className={styles.companyInfo}>
			<h2>About {data.name}</h2>
			<div className={styles.content}> 
				<p className={styles.summary}>{data.summary}</p>
				<div className={styles.description}>
					<p>
						<span>Founded:</span>
						{data.founded}
					</p>
					<p>
						<span>Founder:</span> {data.founder}
					</p>
					<p>
						<span>Headquaters:</span>
						<address>
							{data.headquarters.address}
							{data.headquarters.city}
							{data.headquarters.state}
						</address>
					</p>
					<p>
						<span>CEO:</span>
						{data.ceo}
					</p>
					<p>
						<span>COO:</span>
						{data.coo}
					</p>
					<p>
						<span>CTO:</span>
						{data.cto}
					</p>
					<p>
						<span>Current Employees: </span>
						{numberWithCommas(data.employees)}
					</p>
					<p>
						<span>Current Value:</span>
						{`$ ${numberWithCommas(data.valuation)}`}
					</p>
				</div>
			</div>
			<div className={styles.socialWrapper}>
			<h3>Follow us on social media</h3>
			<div className={styles.socialMedia}>
				<span>
					<a href={data.links.twitter} target='_blank'>
						<RiTwitterLine />
					</a>
				</span>
				<span>
					<a href={data.links.flickr} target='_blank'>
						<ImFlickr2 />
					</a>
				</span>
				<span>
					<a href={data.links.website} target='_blank'>
						<SiSpacex />
					</a>
				</span>
				</div>
			</div>
		</section>
	);
}
