import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { createGlobalStyle } from 'styled-components'
import logoanimation from '../public/netflix.gif'


const GlobalStyle = createGlobalStyle`
html, body {
  height: 100%;
  overflow: auto;
  
  h1{
    color: pink;
  }}
`

export default function Home() {
  return (
    <div className={styles.container}>
      <GlobalStyle />
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>Nextflix</title>

        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/testComponents">
        {/* link 연습하기 ㅋㅋ */}
        <h1>main page test</h1>
      </Link>
      {/* <Image src={logoanimation} alt='netflix' style={{width:'100%',height:'100%'}}/> */}
    </div>
  )
}
