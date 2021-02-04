import Head from "next/head";
import Layout from "../components/core/layout";
import { NextSeo } from "next-seo";
import Link from "next/link";

export default function DonatePage() {
  return (
    <Layout>
      <Head>
        <link rel="icon" type="image/png" href="favicon.png" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/apple-touch-icon.png"
        />
      </Head>
      <NextSeo
        title="Donate / George Bougakov"
        description="Thanks for considering supporting me, but currently I am not accepting any donations. You can support these companies, though"
        openGraph={{
          title: "Donate / George Bougakov",
          description:
            "Thanks for considering supporting me, but currently I am not accepting any donations. You can support these companies, though",
        }}
        twitter={{
          handle: "@gbougakov",
        }}
      />
      <div>
        <p>
          <Link href="/">
            <a className="link">← Home</a>
          </Link>
        </p>
        <h1 className="mt-4 text-4xl font-extrabold md:text-7xl">Donate</h1>
        <p className="text-xl mt-6">
          Thanks for considering donating to me, but I do have a stable job that
          covers all of my expenses so I'm not accepting donations.
        </p>
        <p className="text-xl mt-4">
          If you want to support a good cause, please donate to these nonprofit
          organizations. They will do far more good for this world with your
          support than I will 🙂
        </p>
        <ul className="mt-6 list-disc text-xl">
          <li>
            <a className="link" href="https://donate.ovdinfo.org">
              OVD-Info
            </a>
          </li>
          <li>
            <a className="link" href="https://fbk.info/donate">
              Anti-Corruption Foundation (accepting donations from Russian
              citizens only)
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
