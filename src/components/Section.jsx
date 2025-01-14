import clsx from "clsx";

export default function Section({ children, className }) {
  return <div className={clsx("w-full", className)}>{children}</div>;
}
