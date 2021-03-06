import Head from "next/head";
import Layout from "../components/core/layout";
import { NextSeo } from "next-seo";
import Timeline from "../components/timeline/index";
import Link from "next/link";
import useSWR from "swr";
import { useEffect, useState } from "react";
import sample from "lodash.sample";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home = () => {
  const { data: clubhouseInfo } = useSWR("/api/clubhouse", fetcher);
  const [donateLink, setDonateLink] = useState("");

  useEffect(() => {
    const links = [
      "https://donate.ovdinfo.org",
      "https://fbk.info/donate",
      "https://donate.zona.media/",
    ];
    setDonateLink(sample(links));
  }, []);

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
        }}
        twitter={{
          handle: "@gbougakov",
        }}
      />
      <div>
        <div className="flex justify-center">
          <img
            src="https://storage.yandexcloud.net/gb-assets-hot/george.jpeg"
            className="w-32 h-32 rounded-full shadow"
            alt="Portrait"
          />
        </div>
        <h1 className="mt-6 text-4xl font-extrabold text-center md:text-7xl">
          <a href="https://translate.google.com/?text=привет" target="_blank">
            Привет
          </a>
          , I'm&nbsp;George 👋
        </h1>
        <p className="mt-6 text-xl text-center md:text-2xl">
          I'm a web developer with a passion for automation and design living in
          Moscow. I'm currently working at Skyeng, the largest independent
          edtech company in Russia.
        </p>
        <div className="flex flex-col justify-center mt-6 md:flex-row md:space-x-2 space-y-2 md:space-y-0">
          <a
            className="bg-blue-600 btn-base btn-colored"
            href="mailto:g@bygeorgenet.me"
          >
            Email me
          </a>
          <a className="btn-base btn-bordered" href="#social">
            Other social links
          </a>
          <a className="btn-base btn-bordered" href={donateLink}>Donate</a>
        </div>

        {clubhouseInfo && clubhouseInfo.roomId && (
          <div className="flex justify-center mt-10">
            <a href={`https://joinclubhouse.com/room/${clubhouseInfo.roomId}`}>
              <div className="rounded-lg md:rounded-full px-6 py-4 flex flex-col md:flex-row text-center space-x-3 space-y-2 md:space-y-0 items-center bg-black dark:bg-white bg-opacity-10">
                <span role="img" alt="Clubhouse Logo">
                  👋
                </span>
                <span>
                  Currently speaking about{" "}
                  <strong>{clubhouseInfo.roomName}</strong> on Clubhouse →
                </span>
              </div>
            </a>
          </div>
        )}

        <div className="mt-20">
          <Timeline />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-y-8 md:grid-cols-2 gap-x-16">
          <div className="space-y-1">
            <p className="text-xl font-bold" id="social">
              You can find me on
            </p>
            <ul>
              <li>
                <a className="link" href="https://twitter.com/gbougakov">
                  Twitter
                </a>
              </li>
              <li>
                <a className="link" href="https://instagram.com/gbougakov">
                  Instagram
                </a>
              </li>
              <li>
                <a className="link" href="https://facebook.com/gbougakov">
                  Facebook
                </a>
              </li>
              <li>
                <a className="link" href="https://github.com/gbougakov">
                  GitHub
                </a>
              </li>
              <li>
                <a className="link" href="https://unsplash.com/@gbougakov">
                  Unsplash
                </a>
              </li>
              <li>
                <a className="link" href="https://keybase.io/gbougakov">
                  Keybase
                </a>
              </li>
            </ul>
            <p className="mt-2 text-sm">Please don't DM me anywhere if we've never met because I'll probably block you. Use email, ffs</p>
          </div>
          <div className="text-sm space-y-1">
            <p>
              Font used is Inter by Rasmus Andersson. Logos and trademarks
              belong to their respective owners.
            </p>
            <p>&copy; George Bougakov, 2021</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
