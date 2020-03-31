import Layout from '../../components/layout'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

export default (props) => (<Layout>
  <Head>
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="apple-touch-icon" type="image/png" href="/apple-touch-icon.png" />
  </Head>
  <NextSeo
    title="Donate · George Bougakov"
    description="Automation geek, iOS and frontend developer"
    openGraph={{
      title: 'Donate · George Bougakov',
      description: 'Automation geek, iOS and frontend developer',
      images: [
        {
          url: 'https://gbougakov.dev/opengraph.jpg',
          width: 1200,
          height: 600,
          alt: 'George Bougakov',
        }
      ]
    }}
    twitter={{
      handle: '@gbougakov',
      cardType: 'summary_large_image',
    }}
    noindex={true}
  />
  <div className="w-full">
    <div>
      <span role="img" className="text-6xl md:text-10xl leading-none -ml-1">
        🤗
      </span>
    </div>
    <div className="mt-4 md:mt-8">
      <p>
        <Link href="/">
          <a className="accent-text">← Home</a>
        </Link>
      </p>
      <h1 className="font-black text-4xl md:text-6xl">Thanks for donating!</h1>
      <p>
        Your transaction has been completed, and a receipt for your donation has been emailed to you if you donated via PayPal. Hugs!
      </p>
    </div>
  </div>
</Layout>)