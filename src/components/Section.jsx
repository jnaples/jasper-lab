import clsx from "clsx";

export default function Section({ children, className, id }) {
  return (
    <div className={clsx("w-full", className)} id={id}>
      {children}
    </div>
  );
}
