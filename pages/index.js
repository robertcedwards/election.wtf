import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="elections.wtf" />
        <p className="description">
        <a href="https://prop.house/nouns/hack-week-developers-developers-developers/5238">
          <img src="/image.png"/>
        </a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
