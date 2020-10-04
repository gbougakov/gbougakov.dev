import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import useSWR from "swr";
import { NextSeo } from "next-seo";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SkyengLogo = () => (
  <svg
    width="44"
    height="30"
    viewBox="0 0 44 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.98738 29.0706C2.794 30.9151 0.5 29.378 0.5 26.6439C0.5 23.7333 0.5 15 0.5 15C0.5 15 0.5 6.26673 0.5 3.35612C0.5 0.62199 2.79258 -0.915157 5.98738 0.929418C10.961 3.8016 25.8806 12.421 25.8806 12.421C27.8643 13.5668 27.8643 16.4318 25.8806 17.5776C25.8806 17.579 10.961 26.1984 5.98738 29.0706Z"
      fill="#00C1FF"
    />
    <path
      d="M22.4096 29.0706C19.2162 30.9151 16.9222 29.378 16.9222 26.6439C16.9222 23.7333 16.9222 15 16.9222 15C16.9222 15 16.9222 6.26673 16.9222 3.35612C16.9222 0.62199 19.2148 -0.915157 22.4096 0.929418C27.2737 3.73898 41.8659 12.1691 41.8659 12.1691C44.0447 13.4273 44.0447 16.5727 41.8659 17.8309C41.8645 17.8309 27.2737 26.261 22.4096 29.0706Z"
      fill="#6FE4FF"
    />
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="16"
      y="0"
      width="28"
      height="30"
    >
      <path
        d="M22.4096 29.0706C19.2162 30.9151 16.9222 29.378 16.9222 26.6439C16.9222 23.7333 16.9222 15 16.9222 15C16.9222 15 16.9222 6.26673 16.9222 3.35612C16.9222 0.62199 19.2148 -0.915157 22.4096 0.929418C27.2737 3.73898 41.8659 12.1691 41.8659 12.1691C44.0447 13.4273 44.0447 16.5727 41.8659 17.8309C41.8645 17.8309 27.2737 26.261 22.4096 29.0706Z"
        fill="#6FE4FF"
      />
    </mask>
    <g mask="url(#mask0)">
      <g filter="url(#filter0_f)">
        <path
          d="M5.98738 29.0706C2.794 30.9151 0.5 29.378 0.5 26.6439C0.5 23.7333 0.5 15 0.5 15C0.5 15 0.5 6.26673 0.5 3.35612C0.5 0.62199 2.79258 -0.915157 5.98738 0.929418C10.961 3.8016 25.8806 12.421 25.8806 12.421C27.8643 13.5668 27.8643 16.4318 25.8806 17.5776C25.8806 17.579 10.961 26.1984 5.98738 29.0706Z"
          fill="#009EE4"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f"
        x="-1.77683"
        y="-2.15349"
        width="31.422"
        height="34.307"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="1.13841"
          result="effect1_foregroundBlur"
        />
      </filter>
    </defs>
  </svg>
);

const ColorLink = (props) => (
  <a
    {...props}
    className={"text-indigo-700 hover:text-indigo-300 " + props.className}
  >
    {props.children}
  </a>
);

const Home = () => {
  const { data, error } = useSWR(
    "https://makerrank.co/@gbougakov.json",
    fetcher
  );

  const props = {};

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
        <h1 className="text-5xl font-bold">George Bougakov</h1>
        <p className="text-lg">
          Web developer with a passion for automation and design
        </p>

        <div className="mt-4">
          <ul className="space-y-1">
            <li>
              <div className="flex">
                <span className="w-5 text-center">•</span>
                <span className="ml-2">
                  Email & iMessage:{" "}
                  <ColorLink href="mailto:g@bygeorgenet.me">
                    g@bygeorgenet.me
                  </ColorLink>
                </span>
              </div>
            </li>
            <li>
              <div className="flex">
                <span className="w-5 text-center">•</span>
                <span className="ml-2">
                  Telegram:{" "}
                  <ColorLink href="https://t.me/gbougakov">
                    @gbougakov
                  </ColorLink>
                </span>
              </div>
            </li>
            <li>
              <ColorLink href="#social">
                <div className="flex">
                  <span className="w-5 text-center">↓</span>
                  <span className="ml-2">Other social links</span>
                </div>
              </ColorLink>
            </li>
          </ul>
        </div>

        <div className="mt-16">
          <p className="text-xs font-medium">Since 2019</p>
          <div className="flex items-center space-x-3">
            <SkyengLogo />
            <h2 className="text-4xl font-bold">Skyeng</h2>
          </div>
          <p>
            As an internal automation developer, I work closely with other
            departments to automate routine tasks, save money for the company
            and minimize the amount of boring tasks that employees have to do
            instead of doing their job
          </p>
          <h3 className="mt-4 text-sm font-bold">Talks and posts</h3>
          <div className="mt-2 grid grid-cols-2 gap-x-4">
            <div className="space-y-1">
              <p className="font-medium">
                Making a corporate superapp with Slack and Node.js
              </p>
              <p className="text-sm">Talk at FrontendConf 2020</p>
              <ul>
                <li>
                  <ColorLink href="https://youtu.be/g7pmE1vtTNE?t=13200">
                    Video ↗
                  </ColorLink>
                </li>
                <li>
                  <ColorLink href="https://frontendconf.ru/moscow/2020/abstracts/6970">
                    Abstract ↗
                  </ColorLink>
                </li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-medium">
                Seven Deadly Slack Sins (And How to Solve Them with Automation)
              </p>
              <p className="text-sm">Post in the Skyeng DevBlog</p>
              <ul>
                <li>
                  <ColorLink href="https://dev.to/gb/seven-deadly-slack-sins-and-how-to-solve-them-with-automation-1op3">
                    Dev.to ↗
                  </ColorLink>
                </li>
                <li>
                  <ColorLink href="https://blog.gbougakov.dev/posts/slack-sins">
                    My blog ↗
                  </ColorLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-xs font-medium">Since 2018</p>
          <h2 className="text-4xl font-bold">Making stuff</h2>
          <p>
            In my free time I was making little projects, most of which are dead
            now. I was featured four times on Product Hunt and even got a Golden
            Kitty! (which is actually made from silver-colored plastic)
          </p>
          <h3 className="mt-4 text-sm font-bold">Some notable ones</h3>
          <div className="mt-2 grid grid-cols-2 gap-x-4">
            <div className="space-y-1">
              <p className="font-medium">Docket</p>
              <p className="text-sm">
                Tinder for making grocery lists, got 440+ upvotes and was #2
                Product of the Day on Product Hunt
              </p>
              <ul>
                <li>
                  <ColorLink href="https://oss.bygeorgenet.me/docket/">
                    Check it out ↗
                  </ColorLink>
                </li>
                <li>
                  <ColorLink href="https://producthunt.com/posts/docket-3">
                    Product Hunt ↗
                  </ColorLink>
                </li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-medium">Que</p>
              <p className="text-sm">
                A collaborative jukebox, got 420+ upvotes and was #2 Product of
                the Day on Product Hunt, currently discontinued
              </p>
              <ul>
                <li>
                  <ColorLink href="https://producthunt.com/posts/que">
                    Product Hunt ↗
                  </ColorLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-4">
          <div className="space-y-1">
            <p className="font-bold" id="social">
              You can find me on
            </p>
            <ul>
              <li>
                <ColorLink href="https://twitter.com/gbougakov">
                  Twitter
                </ColorLink>
              </li>
              <li>
                <ColorLink href="https://instagram.com/gbougakov">
                  Instagram
                </ColorLink>
              </li>
              <li>
                <ColorLink href="https://facebook.com/gbougakov">
                  Facebook
                </ColorLink>
              </li>
              <li>
                <ColorLink href="https://github.com/gbougakov">
                  GitHub
                </ColorLink>
              </li>
              <li>
                <ColorLink href="https://unsplash.com/@gbougakov">
                  Unsplash
                </ColorLink>
              </li>
              <li>
                <ColorLink href="https://keybase.io/gbougakov">
                  Keybase
                </ColorLink>
              </li>
            </ul>
          </div>
          <div className="text-sm space-y-1">
            <p>
              Website designed and made by me. Font used is Inter by Rasmus
              Andersson. Logos and trademarks belong to their respective owners.
            </p>
            <p>&copy; George Bougakov, 2020</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
