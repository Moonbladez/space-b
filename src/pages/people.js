//modules
import Head from "next/head";

//components
import Banner from "../components/Banner/Banner";
import PeopleInSpace from "../components/PeopleInSpace/PeopleInSpace";
import Crew from "../components/Crew/Crew";

//styling
import styles from "../styles/pages/Home.module.scss";

export async function getStaticProps() {
  const peopleRequest = await fetch("http://api.open-notify.org/astros.json");
  const peopleData = await peopleRequest.json();

  const crewRequest = await fetch("https://api.spacexdata.com/v4/crew");
  const crewData = await crewRequest.json();

  return {
    props: {
      peopleData,
      crewData,
    },
  };
}

export default function People({ peopleData, crewData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Space B | Technology</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <html lang="en" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Space B" key="ogtitle" />
        <meta
          property="og:description"
          content="Find out the current people in space, and the current crew at Space X"
          key="ogdesc"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@jegheterbekki" key="twhandle" />

        {/* OG */}
        <meta
          property="og:url"
          content="https://space-b.vercel.app/people"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="https://i.imgur.com/9KTI4Ky.jpg"
          key="ogimage"
        />
        <meta property="og:site_name" content="Space B" key="ogsitename" />
        <meta property="og:title" content="Space B | People" key="ogtitle" />
        <meta
          property="og:description"
          content="Find out the current people in space, and the current crew at Space X"
          key="ogdesc"
        />
      </Head>
      <Banner title="people in space" imageUrl="images/people-banner.webp" />
      <main className={styles.main}>
        <PeopleInSpace data={peopleData} />
        <Crew data={crewData} />
      </main>
    </div>
  );
}
