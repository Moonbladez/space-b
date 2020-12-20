//modules
import Head from "next/head";

//components
import Banner from "../components/Banner/Banner";
import Timeline from "../components/Timeline/Timeline";

export async function getStaticProps() {
  const history = await fetch(`https://api.spacexdata.com/v4/history`);
  const historyData = await history.json();

  return {
    props: {
      historyData,
    },
  };
}

export default function Images(props) {
  return (
    <div>
      <Head>
        <title>Space B | History</title>
        <meta charset="utf-8" />
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Space B" key="ogtitle" />
        <meta
          property="og:description"
          content="The history of the Space X project"
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
        <meta property="og:title" content="Space B | History" key="ogtitle" />
        <meta
          property="og:description"
          content="The history of the Space X project"
          key="ogdesc"
        />
      </Head>
      <Banner
        title="The History of Space X"
        imageUrl="images/images-banner.webp"
      />
      <main>
        <section>
          <Timeline timelineData={props.historyData} />
        </section>
      </main>
    </div>
  );
}
