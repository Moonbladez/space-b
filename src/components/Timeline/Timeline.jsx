//modules
import { v4 as uuidv4 } from 'uuid';

//components
import TimelineItem from "../TimelineItem/TimelineItem"

//styles
import styles from "./Timeline.module.scss"

export default function Timeline({timelineData}) {
    if(timelineData.length > 0) {
        return (
            <div className={styles.timeline}>
                {timelineData.map((details) => {
                        return <TimelineItem timelineData={details} key={uuidv4()}/>
                })}
            </div>
        )
    
    } 
}