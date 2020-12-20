//modules
import Head from "next/head";

//components
import Banner from "../components/Banner/Banner";
import CompanyInfo from "../components/CompanyInfo/CompanyInfo";
import ContactForm from "../components/ContactForm/ContactForm";

//styling
import styles from "../styles/pages/Home.module.scss";

export async function getStaticProps() {
  const companInfoRequest = await fetch(
    "https://api.spacexdata.com/v4/company"
  );
  const companyInfoData = await companInfoRequest.json();

  return {
    props: {
      companyInfoData,
    },
  };
}

export default function Contact({ companyInfoData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Space B | Contact</title>
        <meta charset="utf-8" />
        <html lang="en" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Space B" key="ogtitle" />
        <meta
          property="og:description"
          content="Contact Space X and also follow us on social media"
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
        <meta property="og:title" content="Space B | Contact" key="ogtitle" />
        <meta
          property="og:description"
          content="Contact Space X and also follow us on social media"
          key="ogdesc"
        />
      </Head>
      <Banner title="Contact Us" imageUrl="images/contact-banner.webp" />
      <main className={styles.main}>
        <ContactForm />
        <CompanyInfo data={companyInfoData} />
      </main>
    </div>
  );
}
