import '../styles/style.css'
import Head from 'next/head'
import Layout from '../components/layout'
import JumboLink from '../components/jumbolink'
import {faAt, faCamera, faCommentAlt} from '@fortawesome/free-solid-svg-icons'
import fetch from 'isomorphic-unfetch'
import { NextSeo } from 'next-seo'
import { faTwitter, faTelegram, faGithub, faInstagram, faKeybase, faProductHunt } from '@fortawesome/free-brands-svg-icons'
import moment from 'moment'
import Link from 'next/link'

const Home = props => {
  return <Layout>
    <Head>
      <link rel="icon" type="image/png" href="favicon.png" />
      <link rel="apple-touch-icon" type="image/png" href="apple-touch-icon.png" />
    </Head>
    <NextSeo
      title="George Bougakov"
      description="Automation geek, iOS and frontend developer"
      openGraph={{
        title: 'George Bougakov',
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
    <div>
      <div className="md:flex items-center">
        <div className="w-32 h-32 md:w-48 md:h-48 flex items-center">
          <img src="/portrait.jpg" alt="George's Photo" className="rounded-full shadow-lg" />
        </div>
        <div className="mt-5 md:ml-16 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-none">George Bougakov</h1>
          <h2 className="text-2xl md:text-3xl mt-1 leading-tight">Automation geek, iOS and frontend developer</h2>
        </div>
      </div>

      <div className="mt-8 md:mt-16">
        <h1 className="text-3xl md:text-4xl font-bold">Intro</h1>
        <p className="text-xl md:text-2xl leading-snug tracking-tight">
          Hi! I'm {props.age} years old and I'm an iOS and web developer with a passion for automation. Currently, I am an automation engineer at <a href="https://skyeng.ru" className="link">Skyeng</a>, the largest edtech company in Russia, where I simplify the life of 70+ developers. Oh, and also...
        </p>
      </div>

      <div className="md:flex items-center mt-8 md:mt-16">
        <h1 className="text-6xl">🏆</h1>
        <div className="mt-1 md:ml-8 md:mt-0">
          <h2 className="text-2xl md:text-3xl leading-snug">
            I was featured <span className="font-bold">four</span> times on
            Product Hunt and even got a Golden Kitty! (which is actually made
            from silver-colored plastic)
          </h2>
        </div>
      </div>

      <div className="mt-8 md:mt-16">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">Some stats</h1>
        <p className="text-xl md:text-2xl leading-tight">Because everything's about data now</p>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full py-2 md:mt-5 md:w-1/2 xl:w-1/3 px-2">
            <h1 className="text-6xl font-black leading-tight">{props.totalUpvotes}</h1>
            <div>
              <h2 className="text-xl md:text-2xl leading-snug">upvotes were recieved by my products on Product Hunt</h2>
            </div>
          </div>
          <div className="w-full py-2 md:mt-5 md:w-1/2 xl:w-1/3 px-2">
            <h1 className="text-6xl font-black leading-tight">{props.avgUpvotes}</h1>
            <div>
              <h2 className="text-xl md:text-2xl leading-snug">upvotes my products receive on average on Product Hunt</h2>
            </div>
          </div>
          <div className="w-full py-2 md:mt-5 md:w-1/2 xl:w-1/3 px-2">
            <h1 className="text-6xl font-black leading-tight">#{props.rank}</h1>
            <div>
              <h2 className="text-xl md:text-2xl leading-snug">is my current MakerRank. It means I'm in the top 1%!</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-16">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">I am everywhere!</h1>
        <div className="flex flex-wrap -mx-2 mt-2 items-stretch">
          <div className="w-full md:w-1/2 xl:w-1/3 px-2 py-2">
            <JumboLink icon={faAt} txColor="bg-gradient-orange"
              title="Email" description="In case you want to say hi" href="mailto:george@bygeorgenet.me"></JumboLink>
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 px-2 py-2">
            <JumboLink icon={faTwitter} txColor="bg-gradient-blue"
              title="Twitter" description="Random retweets and quality shitposts" href="https://twitter.com/gbougakov"></JumboLink>
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 px-2 py-2">
            <JumboLink icon={faTelegram} txColor="bg-gradient-blue"
              title="Telegram" description="Fastest way to reach me" href="https://tlg.name/gbougakov"></JumboLink>
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 px-2 py-2">
            <JumboLink icon={faGithub} txColor="bg-gradient-black"
              title="GitHub" description="Code I've written, though most of the good stuff is private" href="https://github.com/gbougakov"></JumboLink>
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 px-2 py-2">
            <JumboLink icon={faInstagram} txColor="bg-gradient-pink"
              title="Instagram" description="Selfies, cats, landscapes, cats and other cats" href="https://instagram.com/gbougakov"></JumboLink>
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 px-2 py-2">
            <JumboLink icon={faCamera} txColor="bg-gradient-black"
              title="Unsplash" description="Cool photos licensed under Creative Commons Zero" href="https://unsplash.com/gbougakov"></JumboLink>
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 px-2 py-2">
            <JumboLink icon={faKeybase} txColor="bg-gradient-purple"
              title="Keybase" description="My cryptographically proven identitiy" href="https://keybase.io/gbougakov"></JumboLink>
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 px-2 py-2">
            <JumboLink icon={faProductHunt} txColor="bg-gradient-red"
              title="Product Hunt" description="Things I made and liked" href="https://producthunt.com/@gbougakov"></JumboLink>
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 px-2 py-2">
            <JumboLink icon={faCommentAlt} txColor="bg-gradient-turquoise"
              title="Habr" description="You can read my posts in Russian here" href="https://habr.com/ru/users/gbougakov/"></JumboLink>
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-16">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">Other cool links</h1>
        <p className="text-xl mt-2 font-medium">
          <Link href="/uses">
            <a className="accent-text">Apps and services I use →</a>
          </Link>
        </p>
        <p className="text-xl mt-2 font-medium">
          <Link href="/donate">
            <a className="accent-text">Donate →</a>
          </Link>
        </p>
        
      </div>
      <div className="w-full mt-8">
        <h2 className="text-sm leading-snug">&copy; George Bougakov, 2020</h2>
      </div>
    </div>
  </Layout>
}

Home.getInitialProps = async ({ req }) => {
  const res = await fetch('https://makerrank.co/@gbougakov.json').then(res => res.json())
  return { 
    totalUpvotes: res.upvotes, 
    avgUpvotes: res.upvotes / res.products.length, 
    rank: res.rank,
    age: moment().diff(moment('2005-04-18'), 'years')
  }
}

export default Home
