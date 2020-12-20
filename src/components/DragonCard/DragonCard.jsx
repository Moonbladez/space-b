//modules
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiOutlineSwap } from "react-icons/ai";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

//components

//styles
import styles from "./DragonCard.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function DragonCard({
  name,
  images,
  description,
  launchDate,
  crew,
  orbitDuration,
  link,
  launchMass,
  returnMass,
  type,
}) {
  const [mass, setMass] = useState(false);
  const [massReturn, setMassReturn] = useState(false);
  const [increment, setIncrement] = useState(0);

  const launchMassKgs = `${numberWithCommas(launchMass.kg)} kgs`;
  const launchMassLbs = `${numberWithCommas(launchMass.lb)} lbs`;

  const returnMassKgs = `${numberWithCommas(returnMass.kg)} kgs`;
  const returnMassLbs = `${numberWithCommas(returnMass.lb)} lbs`;
  return (
    <article className={styles.dragonCard}>
      <div className={styles.image}>
        <LazyLoadImage
          src={images[increment]}
          className={styles.images}
          effect="blur"
        />
        {increment > 0 && (
          <FaArrowAltCircleLeft
            className={`${styles.pagination} ${styles.paginationLeft}`}
            onClick={() => {
              setIncrement(increment - 1);
            }}
          />
        )}
        {increment < images.length - 1 && (
          <FaArrowAltCircleRight
            className={`${styles.pagination} ${styles.paginationRight}`}
            onClick={() => {
              setIncrement(increment + 1);
            }}
          />
        )}
      </div>
      <div className={styles.content}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.data}>
          Launch Date: <span>{launchDate}</span>
        </div>
        <div className={styles.data}>
          Crew: <span>{crew}</span>
        </div>
        <div className={styles.data}>
          Obit Duration <span>{`${orbitDuration} years`}</span>
        </div>
        <div className={styles.data}>
          Launch Payloud Mass <AiOutlineSwap onClick={() => setMass(!mass)} />
          <span>{mass ? launchMassKgs : launchMassLbs}</span>
        </div>
        <div className={styles.data}>
          Return Payloud Mass
          <AiOutlineSwap onClick={() => setMassReturn(!massReturn)} />
          <span>{massReturn ? returnMassKgs : returnMassLbs}</span>
        </div>
      </div>
      <a href={link} className={styles.button} target="_blank">
        {`More about ${name}`}
      </a>
    </article>
  );
}
