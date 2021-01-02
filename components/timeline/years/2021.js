import {Briefcase} from "react-feather";
import Entry, { DateEntry } from "../entry";

export default function Year2021() {
  return (
    <>
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
