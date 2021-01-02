import Year2020 from "./years/2020";
import Year2021 from "./years/2021";

export default function Timeline() {
  return (
    <div className="flex flex-col w-full">
      <Year2021 />
      <Year2020 />
    </div>
  );
}
