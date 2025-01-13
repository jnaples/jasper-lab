import clsx from "clsx";

export default function TextArea({
  id,
  name,
  placeholder,
  className,
  error,
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
            "block w-full rounded-md bg-transparent px-3 py-1.5 text-base text-slate-200 outline outline-1 -outline-offset-1  placeholder:text-slate-400 focus:outline focus:outline-2 focus:-outline-offset-2  sm:text-sm/6 mb-2 focus:bg-transparent",
            {
              "outline-slate-600 focus:outline-indigo-600": !error,
              "text-red-500 outline-red-300 placeholder:text-red-300 focus:outline-red-600":
                error,
            },
            className
          )}
          {...rest}
        ></textarea>
      </div>
    </div>
  );
}
