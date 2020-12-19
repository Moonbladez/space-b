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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner title="Images from Space" imageUrl="images/images-banner.jpg" />
      <main>
        <APOD data={apodData} />
        <RoverImage photos={simplifyImages(roverData)} range={5} />
      </main>
    </div>
  );
}
