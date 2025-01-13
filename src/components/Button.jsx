import clsx from "clsx";

function Button({ text, type, className }) {
  return (
    <button
      type={type}
      className={clsx(
        "rounded-full px-5 py-2 text-white shadow-sm hover:bg-indigo-800 text-base transition-all duration-300 ease-in-out cursor-pointer w-full lg:w-fit",
        className
      )}
    >
      {text}
    </button>
  );
}

export default Button;
