//modules
import Head from "next/head";

//components
import Banner from "../components/Banner/Banner";
import APOD from "../components/APOD/APOD";
import RoverImage from "../components/RoverImage/RoverImage";

export async function getStaticProps() {
  const apod = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_CODE}`
  );
  const apodData = await apod.json();

  const rover = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-11-11&page=2&api_key=${process.env.NASA_CODE}`
  );
  const roverData = await rover.json();

  return {
    props: {
      apodData,
      roverData: roverData.photos,
    },
  };
}

export default function Images({ apodData, roverData }) {
  // Only returns desired values from data
  const simplifyImages = (roverData) => {
    return roverData.map((data) => {
      return {
        id: data.id,
        date: data.earth_date,
        name: data.camera.full_name,
        src: data.img_src,
      };
    });
  };

  return (
    <div>
      <Head>
        <title>Space B | Images</title>
        <html lang="en" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Space B" key="ogtitle" />
        <meta
          property="og:description"
          content="Current images taken in space from Mars Rover"
          key="ogdesc"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@jegheterbekki" key="twhandle" />

        {/* OG */}
        <meta
          property="og:url"
          content="https://space-b.vercel.app/images"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="https://i.imgur.com/FhFhPvj.jpg"
          key="ogimage"
        />
        <meta property="og:site_name" content="Space B" key="ogsitename" />
        <meta property="og:title" content="Space B | Images" key="ogtitle" />
        <meta
          property="og:description"
          content="Current images taken in space from Mars Rover"
          key="ogdesc"
        />
      </Head>
      <Banner title="Images from Space" imageUrl="images/images-banner.jpg" />
      <main>
        <APOD data={apodData} />
        <RoverImage photos={simplifyImages(roverData)} range={5} />
      </main>
    </div>
  );
}
