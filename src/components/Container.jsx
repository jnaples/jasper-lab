import clsx from "clsx";

export default function Container({ className, ...props }) {
  return (
    <div
      className={clsx(
        "mx-auto w-full p-4 lg:max-w-[1440px] lg:px-6",
        className,
      )}
      {...props}
    />
  );
}
