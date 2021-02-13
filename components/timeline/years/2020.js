import {
  Calendar,
  Edit3,
  MapPin,
  Mic,
  MoreHorizontal,
  Send,
  ShoppingBag,
  Star,
  Tv,
  Youtube,
} from "react-feather";
import PrivacyFrame from "../../core/privacy-frame";
import Entry, { DateEntry } from "../entry";
import PostCard from "../postcard";

export default function Year2020() {
  return (
    <>
      <DateEntry title="December 2020" />
      <Entry
        title={`Bought an Oculus Quest 2`}
        datetime="December 25th, 2020"
        icon={ShoppingBag}
        tint="green"
        divider={true}
      >
        Currently tinkering with WebXR, maybe I'll even build something cool
      </Entry>

      <Entry
        title={`Gave an interview to the "At Office" YouTube channel`}
        datetime="December 14th, 2020"
        icon={Youtube}
        tint="red"
        divider={false}
      >
        <iframe
          src="https://www.youtube-nocookie.com/embed/gQyhgNAYiuQ"
          className="h-64 max-w-full"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Entry>

      <DateEntry title="October 2020" />
      <Entry
        title={`Appeared on the NTV channel`}
        datetime="October 26th, 2020"
        icon={Tv}
        tint="green"
      >
        <p>
          Not really happy how it turned out (they literally called me "baby
          George" and misspelled the word "company"), but it's still worth
          mentioning
        </p>
        <PrivacyFrame
          className="w-full h-64"
          src="https://www.ntv.ru/embed/1954560"
          frameBorder="0"
          allow="autoplay; fullscreen"
        />
      </Entry>
      <Entry
        title={`Made a Telegram bot that makes it easier to join class video calls`}
        datetime="October 20th, 2020"
        icon={Send}
        tint="indigo"
        divider={false}
      >
        <p>
          Right after schools switched to remote learning, Moscow's Department
          of Education required that instead of Zoom, schools must use Microsoft
          Teams for remote classes, and instead of having teachers send invite
          links directly to students, students had to get call invite links from
          the Moscow Electronic School (a.k.a. MESh) system (a LMS developed by
          the Moscow Department of IT).
        </p>

        <p>
          On the first day of remote learning, due to extreme load, MESh's
          servers{" "}
          <a href="https://www.kommersant.ru/doc/4539083" className="link">
            crashed
          </a>{" "}
          and the website was only available during the night.
        </p>

        <p>
          I built a bot that logged into MESh every day at 4AM, fetched the
          invite links for the upcoming classes and posted them in our school's
          group chat
        </p>

        <p>
          Even though MESh is mostly stable now, my classmates still use the bot
          to join calls because it's a lot more convenient to just tap the link
          in the group chat than to log into MESh
        </p>
      </Entry>

      <DateEntry title="September 2020" />
      <Entry
        title={`Spoke about building an internal company superapp with Slack and Node.js`}
        datetime="September 25th, 2020"
        icon={Mic}
        tint="yellow"
        divider={false}
      >
        <iframe
          src="https://www.youtube-nocookie.com/embed/g7pmE1vtTNE?start=13200"
          className="h-64 max-w-full"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div className="pt-4">
          <a
            className="border border-black shadow btn-base dark:border-white border-opacity-10 hover:border-opacity-25"
            href="https://frontendconf.ru/moscow/2020/abstracts/6970"
          >
            Read abstract →
          </a>
        </div>
      </Entry>

      <DateEntry title="August 2020" />
      <Entry
        title={`Visited Saint Petersburg`}
        datetime="August 12th, 2020"
        icon={MapPin}
        tint="gray"
        divider={false}
      >
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <a href="https://unsplash.com/photos/x0-ytRcMxVE">
            <img
              src="https://storage.yandexcloud.net/gb-assets-hot/portfolio-site-images/saint-petersburg/E0BEBA5A-78E5-4546-B9E4-E2B591FE8AD6.jpeg"
              className="rounded-lg"
            />
          </a>
          <a href="https://unsplash.com/photos/Id6SZn3mx9E">
            <img
              src="https://storage.yandexcloud.net/gb-assets-hot/portfolio-site-images/saint-petersburg/8B640F53-2D33-4BB0-9B9D-2A40388AE575.jpeg"
              className="rounded-lg"
            />
          </a>
        </div>
      </Entry>

      <DateEntry title="July 2020" />
      <Entry
        title={`Published new post`}
        datetime="July 8th, 2020"
        icon={Edit3}
        tint="indigo"
        divider={false}
      >
        <PostCard
          title="Seven Deadly Slack Sins (And How to Solve Them with Automation)"
          imageSrc="https://storage.yandexcloud.net/gb-assets-hot/blog-assets/slack-sins/main.png"
          link="https://blog.gbougakov.dev/posts/slack-sins"
          description={`We at Skyeng started building a remote team long before COVID-19 happened and probably ran into most of the issues of communicating remotely with colleagues and realized that we could solve most of them with bots, so we did!`}
        />
      </Entry>

      <DateEntry title="April 2020" />
      <Entry
        title={`15th Birthday`}
        datetime="April 18th, 2020"
        icon={Calendar}
        tint="green"
      >
        And a small Zoom party
      </Entry>
      <Entry
        title={`Published new post`}
        datetime="July 8th, 2020"
        icon={Edit3}
        tint="indigo"
        divider={false}
      >
        <p>
          Originally{" "}
          <a href="https://habr.com/ru/users/gbougakov/posts/" className="link">
            posted
          </a>{" "}
          in Russian on the Skyeng DevBlog on February 12th.
        </p>
        <PostCard
          title="I’m a 14-Year-Old Developer (Skyeng DevBlog)"
          imageSrc="https://storage.yandexcloud.net/gb-assets-hot/portfolio-site-images/0A53F726-886B-4694-941C-99A1758DCFEA.jpeg"
          link="https://dev.to/yanchauskayte2/i-m-a-14-year-old-developer-397m"
          description="My origin story — from making things with Arduino when I was 7, to getting a job at Skyeng at 14"
        />
      </Entry>

      <DateEntry title="Previously" />
      <Entry
        title={`Featured several times on Product Hunt`}
        datetime="2018-2019"
        icon={Star}
        tint="yellow"
      >
        <p>
          In my free time I was making little projects, most of which are dead
          now. I was featured four times on Product Hunt and even got a Golden
          Kitty! (which is actually made from silver-colored plastic)
        </p>
        <div className="mt-2 grid grid-cols-1 gap-y-4 md:grid-cols-2 gap-x-4">
          <div className="space-y-1">
            <p className="font-medium">Docket</p>
            <p className="text-sm">
              Tinder for making grocery lists, got 440+ upvotes and was #2
              Product of the Day on Product Hunt
            </p>
            <ul>
              <li>
                <a className="link" href="https://oss.bygeorgenet.me/docket/">
                  Check it out ↗
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://producthunt.com/posts/docket-3"
                >
                  Product Hunt ↗
                </a>
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
                <a className="link" href="https://producthunt.com/posts/que">
                  Product Hunt ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Entry>
      <Entry
        title={`That's it!`}
        datetime="Phew..."
        icon={MoreHorizontal}
        tint="gray"
        divider={false}
      />
    </>
  );
}
