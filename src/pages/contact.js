import Head from 'next/head'

//styling
import styles from '../styles/pages/Home.module.scss'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Space B | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

          <main className={styles.main}>
              <h1>Contact</h1>

      </main>
        
    </div>
  )
}