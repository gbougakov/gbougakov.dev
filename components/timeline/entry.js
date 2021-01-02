function getTint(color) {
  return (
    {
      red: "text-red-800 dark:text-red-200 bg-red-500 bg-opacity-20",
      blue: "text-blue-800 dark:text-blue-200 bg-blue-500 bg-opacity-20",
      green: "text-green-800 dark:text-green-200 bg-green-500 bg-opacity-20",
      purple:
        "text-purple-800 dark:text-purple-200 bg-purple-500 bg-opacity-20",
      indigo:
        "text-indigo-800 dark:text-indigo-200 bg-indigo-500 bg-opacity-20",
      pink: "text-pink-800 dark:text-pink-200 bg-pink-500 bg-opacity-20",
      yellow:
        "text-yellow-800 dark:text-yellow-200 bg-yellow-500 bg-opacity-20",
      gray: "text-primary bg-gray-200 dark:bg-gray-800",
    }[color] || "text-primary bg-gray-200 dark:bg-gray-800"
  );
}

export function DateEntry({ title }) {
  return (
    <div className="flex items-center mb-8 space-x-4">
      <div className="w-10" />
      <p className="text-lg font-bold">{title}</p>
      <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
    </div>
  );
}

export default function Entry({
  title,
  datetime,
  icon: Icon,
  tint,
  children,
  divider = true,
}) {
  return (
    <div className="flex mb-12 md:mb-12">
      <div className="flex flex-col items-center">
        <div
          className={`flex justify-center p-3 rounded-full align-center ${getTint(
            tint
          )}`}
        >
          <Icon size={16} />
        </div>

        {divider && (
          <div className="flex-1 w-px -mb-12 bg-gray-200 md:-mb-12 dark:bg-gray-800" />
        )}
      </div>

      <div className="flex flex-col flex-1 ml-4 space-y-4">
        <div className="flex flex-col pt-1 contents-center">
          <span className="font-medium text-primary">{title}</span>
          {datetime && (
            <span className="text-sm text-tertiary">{datetime}</span>
          )}
        </div>
        <div className="flex flex-col space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}
