export default function FeatureCard({ heading, description, bgImg }) {
  return (
    <div className="min-h-96 rounded-3xl bg-gradient-to-tr from-black via-slate-50 to-black p-[.5px]">
      <div className="flex h-full flex-col justify-end rounded-3xl bg-black p-7">
        <h3 className="mb-4 text-2xl text-white">{heading}</h3>
        <p className="text-slate-300">{description}</p>
      </div>
    </div>
  );
}
