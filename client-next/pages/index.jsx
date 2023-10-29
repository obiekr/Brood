import Head from 'next/head'
import styles from '../styles/Home.module.css'
// https://www.youtube.com/watch?v=mTz0GXj8NN0
export default function Home() {
  return (
    <div>
      <Head>  
        <title>Broodmood</title>
        <meta name="keywords" content="broodmood test"/>
        
      </Head>
      <h1 className={styles.container}>Welcome</h1>
      <h2 className={styles.container}>index.jsx</h2>
    </div>
  )
}
