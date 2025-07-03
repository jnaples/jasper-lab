import clsx from "clsx";

export default function TextArea({
  id,
  name,
  placeholder,
  className,
  error,
  disabled,
  ...rest
}) {
  return (
    <div>
      <div className="mt-2">
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          rows="4"
          className={clsx(
            "mb-2 block w-full rounded-md bg-transparent px-3 py-1.5 text-base outline outline-1 -outline-offset-1 placeholder:text-gray-600 focus:bg-transparent focus:outline focus:outline-2 focus:-outline-offset-2",
            {
              "outline-gray-400 focus:outline-gray-600": !error,
              "text-red-600 outline-red-300 placeholder:text-red-300 focus:outline-red-600":
                error,
            },
            className,
          )}
          disabled={disabled}
          {...rest}
        ></textarea>
      </div>
    </div>
  );
}
