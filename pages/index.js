
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Card from '../components/Card'
import { Typewriter } from 'react-simple-typewriter';

import JSON from '../data.json';


export default function Home() {



     const title = (
          <h1 className={styles.title}>
               Cocktails
          </h1>
     )
     const description = (
          <p className={styles.description}>
               <Typewriter
                    words={['How to make cocktails']}
                    cursor
                    cursorStyle='_'
                    typeSpeed={80}
               />
          </p>
     )

     const main = (
          <div className={styles.grid}>
               {
                    // JSON.filter(el => el.name.includes(' ')).map((el) =>
                    JSON.map((el) =>
                         <div key={el.name}>
                              <Card
                                   name={el.name}
                                   picture={el.picture}
                                   ingredients={el.ingredients}
                              />
                         </div>
                    )
               }
          </div>
     )

     const footer = (
          <footer className={styles.footer}>
               <a
                    href="https://www.houseofho.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
               >
                    Powered by 
                    <div style={{ color: '#db0000', marginLeft: 10, fontWeight: 600 }} >
                         THE HOUSE OF HÔ
                    </div>
               </a>
          </footer>
     )

     return (
          <div className={styles.container}>
               <Head>
                    <title>🍸 How to make cocktails 🍹</title>
                    <meta name="description"/>
               </Head>
               <main className={styles.main}>
                    {title}
                    {description}
                    {main}
               </main>
               {footer}
          </div>
     )
}
