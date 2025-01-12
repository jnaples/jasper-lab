import clsx from "clsx";

function Button({ text, type, className }) {
  return (
    <button
      type={type}
      className={clsx(
        "rounded-full bg-slate-900 px-5 py-2 text-white shadow-sm hover:bg-indigo-500 text-base transition-all duration-300 ease-in-out cursor-pointer",
        className
      )}
    >
      {text}
    </button>
  );
}

export default Button;
