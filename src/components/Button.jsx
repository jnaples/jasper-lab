import clsx from "clsx";

function Button({ text, type, className }) {
  return (
    <button
      type={type}
      className={clsx(
        "w-full cursor-pointer rounded-full px-5 py-2 text-base text-white shadow-sm transition-all duration-300 ease-in-out hover:bg-indigo-800 md:w-fit",
        className,
      )}
    >
      {text}
    </button>
  );
}

export default Button;
