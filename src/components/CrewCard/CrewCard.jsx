//modules
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FiChevronsUp, FiChevronsDown } from "react-icons/fi";

//styles
import styles from "./CrewCard.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function CrewCard({ image, link, name, agency, launches }) {
  const [isOpen, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOpen);
  };

  return (
    <div className={styles.CrewCard}>
      <div className={styles.outer}>
        <LazyLoadImage src={image} effect="blur" alt={name} />
        <div
          onClick={handleToggle}
          className={isOpen ? styles.wrapperExpanded : styles.wrapper}
        >
          {!isOpen ? (
            <div className={styles.name}>
              {name}
              <span tabIndex="0" onKeyPress={handleToggle}>
                <FiChevronsUp aria-label="toggle information up" />
              </span>
            </div>
          ) : (
            <div className={styles.description}>
              <span>
                <FiChevronsDown
                  tabIndex="0"
                  onKeyPress={handleToggle}
                  aria-label="toggle information down"
                />
              </span>
              <ul>
                <li>
                  Name:
                  <span>{name}</span>
                </li>
                {launches.length > 0 && (
                  <li>
                    Launches:
                    <span>{launches.length}</span>
                  </li>
                )}
                <li>
                  Agency:
                  <span>{agency}</span>
                </li>
                <li>
                  <a href={link}>Wikipedia </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
