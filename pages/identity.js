import Layout from '../components/layout'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

export default (props) => (<Layout>
  <Head>
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="apple-touch-icon" type="image/png" href="/apple-touch-icon.png" />
  </Head>
  <NextSeo
    title="Identity · George Bougakov"
    description="Automation geek, iOS and frontend developer"
    openGraph={{
      title: 'Identity · George Bougakov',
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
  />
  <div className="w-full">
    <div>
      <span role="img" className="text-6xl md:text-10xl leading-none -ml-1">
        🛂
      </span>
    </div>
    <div className="mt-4 md:mt-8">
      <p>
        <Link href="/">
          <a className="accent-text">← Home</a>
        </Link>
      </p>
      <h1 className="font-black text-4xl md:text-6xl">My identity</h1>
      <p className="text-xl md:text-2xl leading-snug tracking-tight">
        According to Keybase, the owner of this domain also owns 
      </p>
    </div>
  </div>
</Layout>)

export async function getServerSideProps({ req }) {
  const res = await fetch('https://keybase.io/_/api/1.0/user/lookup.json?domain=gbougakov.dev').then(res => res.json())
  return {props: { 
    totalUpvotes: res.upvotes, 
    avgUpvotes: res.upvotes / res.products.length, 
    rank: res.rank,
    age: moment().diff(moment('2005-04-18'), 'years'),
    originRegion: process.env.NOW_REGION || 'n/a',
    edgeRegion: req.headers['x-now-trace'] || 'n/a'
  }}
}