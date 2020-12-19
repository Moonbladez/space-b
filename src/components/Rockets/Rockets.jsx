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
      <form>
        <fieldset>
          <legend>Status:</legend>
          <div className={styles.selection}>
            <label htmlFor="status-all">
              All
              <input
                onChange={({ currentTarget }) =>
                  setSelected(currentTarget.value)
                }
                type="radio"
                name="status"
                id="status-all"
                value="all"
                checked={selected === "all"}
              />
            </label>
          </div>
          <div className={styles.selection}>
            <label htmlFor="status-active">
              Active
              <input
                onChange={({ currentTarget }) =>
                  setSelected(currentTarget.value)
                }
                type="radio"
                name="status"
                id="status-active"
                value="active"
                checked={selected === "active"}
              />
            </label>
          </div>
          <div className={styles.selection}>
            <label htmlFor="status-all">
              Inactive
              <input
                onChange={({ currentTarget }) =>
                  setSelected(currentTarget.value)
                }
                type="radio"
                name="status"
                id="status-inactive"
                value="inactive"
                checked={selected === "inactive"}
              />
            </label>
          </div>
        </fieldset>
      </form>

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
