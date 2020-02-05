import '../styles/style.css' 
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Marquee from 'react-double-marquee'
import ThemeAwareImg from '../components/theme-aware-img'
import UsesCard from '../components/uses-card'

const Uses = props => (
  <Layout>
    <div className="w-full">
      <div className="breakout whitespace-no-wrap">
        <Marquee delay={0} childMargin={0}>
          <div className="inline-block">
            <div className="flex items-center">
              <div className="w-16 md:w-32 ml-8 md:ml-16"><img src="/uses-icons/alfred.png"></img></div>
              <div className="w-16 md:w-32 ml-8 md:ml-16"><ThemeAwareImg lightSrc="/uses-icons/zeit-black-triangle.svg" darkSrc="/uses-icons/zeit-white-triangle.svg"></ThemeAwareImg></div>
              <div className="w-16 md:w-32 ml-8 md:ml-16"><img src="/uses-icons/monokaipro.svg"></img></div>
              <div className="w-16 md:w-32 ml-8 md:ml-16"><img src="/uses-icons/hetzner.png" className="rounded-lg"></img></div>
              <div className="w-16 md:w-32 ml-8 md:ml-16"><img src="/uses-icons/notion-logo-no-background.png"></img></div>
              <div className="w-16 md:w-32 ml-8 md:ml-16"><img src="/uses-icons/vscode.png"></img></div>
              <div className="w-16 md:w-32 ml-8 md:ml-16"><img src="/uses-icons/setapp.png"></img></div>
              <div className="w-16 md:w-32 ml-8 md:ml-16"><img src="/uses-icons/keyboardmaestro.png"></img></div>
              <div className="w-16 md:w-32 ml-8 md:ml-16"><img src="/uses-icons/ia.jpeg" className="rounded-lg"></img></div>
            </div>
          </div>
        </Marquee>
      </div>
      <div className="mt-8 md:mt-16">
        <p>
          <Link href="/">
            <a className="accent-text">← Home</a>
          </Link>
        </p>
        <h1 className="font-black text-4xl md:text-6xl">Stuff I use</h1>
        <p>This is the software setup on my Mac. If you'd like to discover more setups, check out <a href="https://uses.tech/" className="link">uses.tech</a></p>

        <h2 className="text-3xl md:text-4xl font-bold mt-6 md:mt-10 leading-tight">Coding</h2>

        <UsesCard 
          title="VS Code" 
          darkSrc="/uses-icons/vscode.png"
          lightSrc="/uses-icons/vscode.png"
          href="https://code.visualstudio.com"
        >
          Although VS Code is written using the engine that was originally made for Atom, it is miles ahead. 
          Microsoft's IntelliSense is awesome, debugger support is great and the amount of themes and extensions is staggering!
        </UsesCard>
        <UsesCard
          title="Monokai Pro Theme"
          darkSrc="/uses-icons/monokaipro.svg"
          lightSrc="/uses-icons/monokaipro.svg"
          href="https://monokai.pro/"
        >
          Monokai's colors are beautiful, the pixel-perfect icons look sweet on my MacBook's screen and overall, 
          Monokai Pro is very pleasing and well-worth the 10 EUR asking price
        </UsesCard>

        <h2 className="text-3xl md:text-4xl font-bold mt-6 md:mt-10 leading-tight">Hosting</h2>
        <UsesCard
          title="ZEIT Now"
          darkSrc="/uses-icons/zeit-white-triangle.svg"
          lightSrc="/uses-icons/zeit-black-triangle.svg"
          href="https://zeit.co/"
        >
          Now is amazing. It is blazing-fast and the reason I use it is that I can get a project up and running in about a minute, which is about 30 times faster than deploying it on a VPS
        </UsesCard>
        <UsesCard
          title="Hetzner Cloud"
          darkSrc="/uses-icons/hetzner.png"
          lightSrc="/uses-icons/hetzner.png"
          href="https://hetzner.cloud"
        >
          ZEIT Now is great and all, but I still need a VPS for my MongoDB instance and my Minecraft server 🙂
        </UsesCard>

        <h2 className="text-3xl md:text-4xl font-bold mt-6 md:mt-10 leading-tight">Productivity</h2>
        <UsesCard
          title="Notion"
          darkSrc="/uses-icons/notion-logo-no-background.png"
          lightSrc="/uses-icons/notion-logo-no-background.png"
          href="https://www.notion.so/?r=fcf18e33eab9401fa18ad2dcd0085bb6"
        >
          Notion is an all-in-one productivity tool combining the best parts of Evernote, Trello and lots of other services (Get $10 in credit by signing up via the link below)
        </UsesCard>
        <UsesCard
          title="Alfred"
          darkSrc="/uses-icons/alfred.png"
          lightSrc="/uses-icons/alfred.png"
          href="https://www.alfredapp.com/"  
        >
          A replacement for macOS Spotlight that can be fully customized
        </UsesCard>
        <UsesCard
          title="Keyboard Maestro"
          darkSrc="/uses-icons/keyboardmaestro.png"
          lightSrc="/uses-icons/keyboardmaestro.png"
          href="https://www.keyboardmaestro.com/main/"  
        >
          A macOS alternative for the <a href="https://www.youtube.com/watch?v=Arn8ExQ2Gjg" className="link">really</a> <a href="https://www.youtube.com/watch?v=lIFE7h3m40U" className="link">powerful</a> automation app AutoHotKey
        </UsesCard>

        <h2 className="text-3xl md:text-4xl font-bold mt-6 md:mt-10 leading-tight">Other macOS apps</h2>
        <UsesCard
          title="Setapp"
          darkSrc="/uses-icons/setapp.png"
          lightSrc="/uses-icons/setapp.png"
          href="https://go.setapp.com/invite/lc5ypnk0"  
        >
          Get 170+ high-quality macOS apps for just $9.99/mo. Some of the apps included actually cost more separately
        </UsesCard>
        <UsesCard
          title="iA Writer"
          darkSrc="/uses-icons/ia.jpeg"
          lightSrc="/uses-icons/ia.jpeg"
          href="https://ia.net/writer"  
        >
          It is fast, beautiful and functional - everything I need from a Markdown editor
        </UsesCard>
      </div>
    </div>
  </Layout>
)

export default Uses