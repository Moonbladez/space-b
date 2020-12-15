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
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Banner title='Contact Us' imageUrl='images/contact-banner.jpg' />
			<main className={styles.main}>
				<ContactForm />
				<CompanyInfo data={companyInfoData} />
			</main>
		</div>
	);
}
