import clsx from "clsx";

export default function Input({
  name,
  type = "text",
  placeholder,
  className,
  error,
  disabled,
  ...rest
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className={clsx(
        "mb-2 mt-2 block w-full rounded-md bg-transparent px-3 py-1.5 text-base outline outline-1 -outline-offset-1 placeholder:text-gray-600 autofill:bg-yellow-200 focus:bg-transparent focus:outline focus:outline-2 focus:-outline-offset-2",
        {
          "bg-transparent outline-gray-400 focus:outline-gray-600": !error,
          "text-red-600 outline-red-300 placeholder:text-red-300 focus:outline-red-600":
            error,
        },
        className,
      )}
      disabled={disabled}
      {...rest}
    />
  );
}
