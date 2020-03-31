import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import { Range } from 'react-range'
import { NextSeo } from 'next-seo'
import { Component } from 'react'

const items = [
  {
    emoji: '🥔',
    name: 'Bag of potato chips',
    description: 'Pretty tasty and really crunchy',
    amount: 0
  },
  {
    emoji: '☕',
    name: 'Venti iced tea at Starbucks',
    description: 'It\'s usually really cold in Russia, but in summer you can\'t go wrong with a cup of iced tea',
    amount: 3
  },
  {
    emoji: '🍗',
    name: 'Lunch at KFC',
    description: 'KFC is actually good in Russia',
    amount: 5
  },
  {
    emoji: '☁️',
    name: 'Servers that run my projects',
    description: 'Well, electricity costs money, so servers actually need money to run :)',
    amount: 10
  },
  {
    emoji: '🍿',
    name: 'Netflix',
    description: 'I need to procrastinate sometimes too, you know',
    amount: 12
  },
  {
    emoji: '🙃',
    name: 'All of my streaming subscriptions',
    description: 'Netflix, Apple TV+, Apple Music... why are there so many streaming services?',
    amount: 20
  },
  {
    emoji: '🎮',
    name: 'Cool indie game for my Switch',
    description: 'Untitled Goose Game is really fun, btw',
    amount: 25
  },
  {
    emoji: '👕',
    name: 'Hoodie',
    description: 'It\'s comfy and looks cool',
    amount: 30
  },
  {
    emoji: '🍕',
    name: 'Five large pizzas at Dominos',
    description: 'That\'s a lot. Even for five people',
    amount: 35
  },
  {
    emoji: '🎮',
    name: 'Another cool game for my Switch',
    description: 'You can\'t have too many of them',
    amount: 40
  },
  {
    emoji: '💸',
    name: 'All of my digital subsriptions (for a month)',
    description: 'Everything is a subscription nowadays',
    amount: 45
  },
  {
    emoji: '🍏',
    name: 'Half of the Apple Developer Program cost',
    description: 'Ninety-nine bucks a month ain\'t cheap, though the value is pretty good',
    amount: 50
  }
]

class Donate extends Component {
  state = {values: [1]}
  render() {
    return (<Layout>
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
      />
      <div className="w-full">
        <div>
          <span role="img" className="text-6xl md:text-10xl leading-none -ml-1">
            🤑
          </span>
        </div>
        <div className="mt-4 md:mt-8">
          <p>
            <Link href="/">
              <a className="accent-text">← Home</a>
            </Link>
          </p>
          <h1 className="font-black text-4xl md:text-6xl">Donate</h1>
          <h1 className="mt-4 text-6xl font-black leading-tight">{this.state.values[0]} USD</h1>
          
          <div className="mt-8">
            <Range min={1} max={50} values={this.state.values} renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "6px",
                  width: "100%",
                  backgroundColor: "rgba(100, 100, 100, 0.5)",
                  borderRadius: 5
                }}
              >
                {children}
              </div>
            )} onChange={values => this.setState({ values })} renderThumb={({ props, isDragged, value }) => (
              <div
                {...props}
                style={{
                  ...props.style
                }}
                className="flex w-16 h-16 justify-center items-center leading-none"
              >
                <div style={{
                  fontSize: isDragged ? 64 : 48
                }} className="transition-all transition-100 transition-ease-in-out">{items.filter(o => o.amount <= value)[items.filter(o => o.amount <= value).length - 1].emoji}</div>
                
              </div>
            )}></Range>

            <h2 className="text-3xl md:text-4xl font-bold leading-snug mt-8">{items.filter(o => o.amount <= this.state.values[0])[items.filter(o => o.amount <= this.state.values[0]).length - 1].name}</h2>
            <p className="mt-1 text-xl">{items.filter(o => o.amount <= this.state.values[0])[items.filter(o => o.amount <= this.state.values[0]).length - 1].description}</p>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mt-8">Checkout</h2>
            <div className="flex flex-wrap -mx-2">
              <a className="py-2 px-4 w-full md:w-auto border rounded-lg shadow-md hover:shadow-lg transition-all transition-100 bg-white m-2" href={"https://oplata.qiwi.com/create?publicKey=48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPxECYy25SY8hcoGcEqGZY4kaEUzpfbhCmMA6pUZE34mxEuTHLHb2hnNz73pcAyw5rdxUa4GtHLjaxqgeKicvcMZQRBpEzDPq996iVxoRWv&successUrl=https://gbougakov.dev/donate/success&amount=" + (this.state.values[0] * 65)}>
                <div className="flex items-center justify-center h-full">
                  <img className="h-5" src="/donation-icons/qiwi.svg"></img> 
                  <p className="text-black ml-2 font-black">·</p>
                  <img className="ml-2 h-5" src="/donation-icons/credit-card-icons.svg"></img>
                </div>
              </a>
              <a className="py-2 px-4 w-full md:w-auto rounded-lg shadow-md hover:shadow-lg transition-all transition-100 bg-blue-700 m-2" href={`https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=N49NHR9C9XW2L&lc=RU&item_name=Donation&amount=${this.state.values[0]}%2e00&currency_code=USD&button_subtype=services&bn=PP%2dBuyNowBF%3abtn_buynowCC_LG%2egif%3aNonHosted`}>
                <div className="flex items-center justify-center h-full">
                  <img className="h-5" src="/donation-icons/paypal.svg"></img>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>)
  }
}

export default Donate