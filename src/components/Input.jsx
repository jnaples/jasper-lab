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
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className={clsx(
        "mt-2 w-full block rounded-md px-3 py-1.5 text-base text-slate-200 outline outline-1 -outline-offset-1 placeholder:text-slate-400 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 mb-2 bg-transparent focus:bg-transparent autofill:bg-yellow-200",
        {
          "outline-slate-600 focus:outline-indigo-600 bg-transparent": !error,
          "text-red-500 outline-red-300 placeholder:text-red-300 focus:outline-red-600":
            error,
        },
        className
      )}
      {...rest}
    />
  );
}
