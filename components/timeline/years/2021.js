import { Briefcase, GitHub } from "react-feather";
import Entry, { DateEntry } from "../entry";

export default function Year2021() {
  return (
    <>
      <DateEntry title="March 2021" />
      <Entry
        title="Open-sourced the Lebowski Slack bot"
        datetime="March 5th, 2021"
        icon={GitHub}
        tint="purple"
        divider={false}
      >
        <p>
          I built Lebowski at Skyeng to help internal and project support teams
          keep track of the tickets they receive, aggregate stats and make sure
          they hit their SLAs
        </p>
        <div className="pt-4">
          <a
            className="border border-black shadow btn-base dark:border-white border-opacity-10 hover:border-opacity-25"
            href="https://github.com/skyeng/lebowski"
          >
            View on GitHub →
          </a>
        </div>
      </Entry>
      <DateEntry title="January 2021" />
      <Entry
        title="Moved to the Infra Tools team at Skyeng"
        datetime="January 1st, 2021"
        icon={Briefcase}
        tint="blue"
        divider={false}
      >
        <p>
          At Infra Tools I will be automating different processes for different
          teams and making tools that will make the life of thousands of
          employees and contractors easier
        </p>
      </Entry>
    </>
  );
}
