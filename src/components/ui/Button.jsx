import clsx from "clsx";

function Button({ text, type, className, disabled }) {
  return (
    <button
      type={type}
      className={clsx(
        "cursor-pointer rounded-full bg-black px-6 py-2.5 text-lg font-semibold text-white shadow-[0_0_0_5px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:shadow-[0_0_0_5px_rgba(0,0,0,0.3)]",
        className,
      )}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
