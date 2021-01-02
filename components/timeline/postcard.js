export default function PostCard({ title, link, imageSrc, description }) {
  return (
    <a href={link}>
      <div className="border border-black shadow dark:border-white border-opacity-25 rounded-md hover:shadow-2xl transition-shadow duration-200">
        <img src={imageSrc} className="w-full rounded-t-md" />
        <div className="p-4">
          <h1 className="font-bold">{title}</h1>
          <p className="mt-2 text-sm">{description}</p>
        </div>
      </div>
    </a>
  );
}
