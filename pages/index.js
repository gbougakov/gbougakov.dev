import Head from "next/head";
import Layout from "../components/layout";
import JumboLink from "../components/jumbolink";
import {
  faAt,
  faCamera,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
import { NextSeo } from "next-seo";
import {
  faTwitter,
  faTelegram,
  faGithub,
  faInstagram,
  faKeybase,
  faProductHunt,
} from "@fortawesome/free-brands-svg-icons";
import moment from "moment";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home = () => {
  const { data, error } = useSWR(
    "https://makerrank.co/@gbougakov.json",
    fetcher
  );

  const props = {
    totalUpvotes: data ? data.upvotes : "...",
    avgUpvotes: data ? data.upvotes / data.products.length : "...",
    rank: data ? data.rank : "...",
    age: moment().diff(moment("2005-04-18"), "years"),
  };

  return (
    <Layout>
      <Head>
        <link rel="icon" type="image/png" href="favicon.png" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="apple-touch-icon.png"
        />
      </Head>
      <NextSeo
        title="George Bougakov"
        description="Automation geek, iOS and frontend developer"
        openGraph={{
          title: "George Bougakov",
          description: "Automation geek, iOS and frontend developer",
          images: [
            {
              url: "https://gbougakov.dev/opengraph.jpg",
              width: 1200,
              height: 600,
              alt: "George Bougakov",
            },
          ],
        }}
        twitter={{
          handle: "@gbougakov",
          cardType: "summary_large_image",
        }}
      />
      <div>
        <div className="items-center mt-8 md:mt-16 md:flex">
          <div className="flex items-center w-32 h-32 md:w-48 md:h-48">
            <img
              src="/portrait.jpg"
              alt="George's Photo"
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="mt-5 md:ml-16 md:mt-0">
            <h1 className="text-4xl font-bold leading-none md:text-6xl">
              George Bougakov
            </h1>
            <h2 className="mt-1 text-2xl leading-tight md:text-3xl">
              Automation geek, iOS and frontend developer
            </h2>
          </div>
        </div>

        <div className="mt-8 md:mt-16">
          <h1 className="text-3xl font-bold md:text-4xl">Intro</h1>
          <p className="text-xl leading-snug tracking-tight md:text-2xl">
            Hi! I'm {props.age} years old and I'm an iOS and web developer with
            a passion for automation. Currently, I am an automation engineer at{" "}
            <a href="https://skyeng.ru" className="link">
              Skyeng
            </a>
            , the largest edtech company in Russia, where I simplify the life of
            70+ developers. Oh, and also...
          </p>
        </div>

        <div className="items-center mt-8 md:flex md:mt-16">
          <h1 className="text-6xl">🏆</h1>
          <div className="mt-1 md:ml-8 md:mt-0">
            <h2 className="text-2xl leading-snug md:text-3xl">
              I was featured <span className="font-bold">four</span> times on
              Product Hunt and even got a Golden Kitty! (which is actually made
              from silver-colored plastic)
            </h2>
          </div>
        </div>

        {!error ? (
          <div className="mt-8 md:mt-16">
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              Some stats
            </h1>
            <p className="text-xl leading-tight md:text-2xl">
              Because everything's about data now
            </p>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full px-2 py-2 md:mt-5 md:w-1/2 xl:w-1/3">
                <h1 className="text-6xl font-black leading-tight">
                  {props.totalUpvotes}
                </h1>
                <div>
                  <h2 className="text-xl leading-snug md:text-2xl">
                    upvotes were recieved by my products on Product Hunt
                  </h2>
                </div>
              </div>
              <div className="w-full px-2 py-2 md:mt-5 md:w-1/2 xl:w-1/3">
                <h1 className="text-6xl font-black leading-tight">
                  {props.avgUpvotes}
                </h1>
                <div>
                  <h2 className="text-xl leading-snug md:text-2xl">
                    upvotes my products receive on average on Product Hunt
                  </h2>
                </div>
              </div>
              <div className="w-full px-2 py-2 md:mt-5 md:w-1/2 xl:w-1/3">
                <h1 className="text-6xl font-black leading-tight">
                  #{props.rank}
                </h1>
                <div>
                  <h2 className="text-xl leading-snug md:text-2xl">
                    is my current MakerRank. It means I'm in the top 1%!
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ) : (
          error
        )}

        <div className="mt-8 md:mt-16">
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            I am everywhere!
          </h1>
          <div className="flex flex-wrap items-stretch mt-2 -mx-2">
            <div className="w-full px-2 py-2 md:w-1/2 xl:w-1/3">
              <JumboLink
                icon={faAt}
                txColor="bg-gradient-orange"
                title="Email"
                description="In case you want to say hi"
                href="mailto:george@bygeorgenet.me"
              ></JumboLink>
            </div>

            <div className="w-full px-2 py-2 md:w-1/2 xl:w-1/3">
              <JumboLink
                icon={faTwitter}
                txColor="bg-gradient-blue"
                title="Twitter"
                description="Random retweets and quality shitposts"
                href="https://twitter.com/gbougakov"
              ></JumboLink>
            </div>

            <div className="w-full px-2 py-2 md:w-1/2 xl:w-1/3">
              <JumboLink
                icon={faTelegram}
                txColor="bg-gradient-blue"
                title="Telegram"
                description="Fastest way to reach me"
                href="https://tlg.name/gbougakov"
              ></JumboLink>
            </div>

            <div className="w-full px-2 py-2 md:w-1/2 xl:w-1/3">
              <JumboLink
                icon={faGithub}
                txColor="bg-gradient-black"
                title="GitHub"
                description="Code I've written, though most of the good stuff is private"
                href="https://github.com/gbougakov"
              ></JumboLink>
            </div>

            <div className="w-full px-2 py-2 md:w-1/2 xl:w-1/3">
              <JumboLink
                icon={faInstagram}
                txColor="bg-gradient-pink"
                title="Instagram"
                description="Selfies, cats, landscapes, cats and other cats"
                href="https://instagram.com/gbougakov"
              ></JumboLink>
            </div>

            <div className="w-full px-2 py-2 md:w-1/2 xl:w-1/3">
              <JumboLink
                icon={faCamera}
                txColor="bg-gradient-black"
                title="Unsplash"
                description="Cool photos licensed under Creative Commons Zero"
                href="https://unsplash.com/gbougakov"
              ></JumboLink>
            </div>

            <div className="w-full px-2 py-2 md:w-1/2 xl:w-1/3">
              <JumboLink
                icon={faKeybase}
                txColor="bg-gradient-purple"
                title="Keybase"
                description="My cryptographically proven identitiy"
                href="https://keybase.io/gbougakov"
              ></JumboLink>
            </div>

            <div className="w-full px-2 py-2 md:w-1/2 xl:w-1/3">
              <JumboLink
                icon={faProductHunt}
                txColor="bg-gradient-red"
                title="Product Hunt"
                description="Things I made and liked"
                href="https://producthunt.com/@gbougakov"
              ></JumboLink>
            </div>

            <div className="w-full px-2 py-2 md:w-1/2 xl:w-1/3">
              <JumboLink
                icon={faCommentAlt}
                txColor="bg-gradient-turquoise"
                title="Habr"
                description="You can read my posts in Russian here"
                href="https://habr.com/ru/users/gbougakov/"
              ></JumboLink>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-16">
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Other cool links
          </h1>
          <p className="mt-2 text-xl font-medium">
            <Link href="/uses">
              <a className="accent-text">Apps and services I use →</a>
            </Link>
          </p>
          <p className="mt-2 text-xl font-medium">
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
  );
};

export default Home;
