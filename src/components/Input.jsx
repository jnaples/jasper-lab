import clsx from "clsx";

export default function Input({
  name,
  type = "text",
  placeholder,
  className,
  error,
  ...rest
}) {
  return (
    <div className="mt-2">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={clsx(
          "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1  placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2  sm:text-sm/6 mb-2",
          {
            "outline-gray-300 focus:outline-indigo-600": !error,
            "text-red-500 outline-red-300 placeholder:text-red-300 focus:outline-red-600":
              error,
          },
          className
        )}
        {...rest}
      />
    </div>
  );
}
