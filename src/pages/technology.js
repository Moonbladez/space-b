import Head from "next/head";

//components
import Banner from "../components/Banner/Banner";
import Rockets from "../components/Rockets/Rockets";
import Dragons from "../components/Dragons/Dragons";
import Starlink from "../components/Starlink/Starlink";

//styling
import styles from "../styles/pages/Home.module.scss";

export async function getStaticProps() {
  const rocketsResponse = await fetch("https://api.spacexdata.com/v4/rockets");
  const rocketsData = await rocketsResponse.json();

  const dragonReponse = await fetch("https://api.spacexdata.com/v4/dragons");
  const dragonData = await dragonReponse.json();

  const starlinkReponse = await fetch("https://api.spacexdata.com/v4/starlink");
  const starlinkData = await starlinkReponse.json();

  return {
    props: {
      rocketsData,
      dragonData,
      starlinkData,
    },
  };
}

export default function Ships(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Space B | Technology</title>
        <html lang="en" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Space B" key="ogtitle" />
        <meta
          property="og:description"
          content="Discover the latest technology currently in space, and also technology that was used in past space"
          key="ogdesc"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@jegheterbekki" key="twhandle" />

        {/* OG */}
        <meta
          property="og:url"
          content="https://space-b.vercel.app/technology"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="https://i.imgur.com/9KTI4Ky.jpg"
          key="ogimage"
        />
        <meta property="og:site_name" content="Space B" key="ogsitename" />
        <meta
          property="og:title"
          content="Space B | Technology"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Discover the latest technology currently in space, and also technology that was used in past space"
          key="ogdesc"
        />
      </Head>

      <Banner
        title="Technology in Space"
        imageUrl="images/technology-banner.webp"
      />

      <main className={styles.main}>
        <Starlink starlinkData={props.starlinkData} />
        <Rockets data={props.rocketsData} />
        <Dragons dragonData={props.dragonData} />
      </main>
    </div>
  );
}
