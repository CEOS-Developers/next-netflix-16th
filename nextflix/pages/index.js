import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { createGlobalStyle } from 'styled-components'
import logoanimation from '../public/netflix.gif'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const GlobalStyle = createGlobalStyle`
html, body {
  height: 100%;
  overflow: auto;
  
  h1{
    color: pink;
  }}
`

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/home')
    }, 2600)
  })

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
      <Image
        src={logoanimation}
        alt="netflix"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

//배포를 위한 커밋