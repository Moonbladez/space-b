import Head from 'next/head'

//styling
import styles from '../styles/pages/Home.module.scss'

export default function Crew() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Space B | Crew</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

          <main className={styles.main}>
              <h1>Crew</h1>

      </main>
        
    </div>
  )
}