import clsx from "clsx";

export default function Container({ className, ...props }) {
  return (
    <div
      className={clsx("mx-auto w-full lg:max-w-[1800px]", className)}
      {...props}
    />
  );
}
