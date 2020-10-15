import Head from 'next/head'

//styling
import styles from '../styles/pages/Home.module.scss'

export default function Ships() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Space B | Ships</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

          <main className={styles.main}>
              
              <h1>Ships</h1>
      </main>
        
    </div>
  )
}