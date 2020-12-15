//components
import {VscLinkExternal} from "react-icons/vsc"

//styling
import styles from "./TimelineItem.module.scss";

const formateDate = (date) => {
	let unixDate = date;
	const milliseconds = unixDate * 1000;
	const dateObject = new Date(milliseconds);

	const formatedDate = dateObject.toLocaleDateString("en-UK");
	return formatedDate;
};

export default function TimelineItem({timelineData}) {
	const link = timelineData.links.article
	//  const dateFormat = formateDate(date);
	return (
		<article className={styles.TimelineItem}>
			<div className={styles.content}>
				<h2>{timelineData.title}</h2>
				<div className={styles.date}>{timelineData.dateFormat}</div>
				<p>{timelineData.details}</p>
				{link && 
					<a href={link} target='_blank' rel="noreferrer noopener" aria-label="This is an external link (opens in a new tab)" className={styles.link}>   
					Read more <span><VscLinkExternal/></span>
				</a> 
				}
				<span className={styles.circle}></span>
			</div>
		</article>
	)
}
