export default function FeatureCard({ heading, description, bgImg }) {
  return (
    <div className="min-h-96 rounded-3xl bg-gradient-to-tr from-black via-slate-500 to-black p-[.5px]">
      <div
        className="flex h-full flex-col justify-end rounded-3xl bg-cover bg-center p-7"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, .3) 100%), url('${bgImg}')`,
        }}
      >
        <h3 className="mb-4 text-3xl text-white">{heading}</h3>
        <p className="text-lg text-slate-300">{description}</p>
      </div>
    </div>
  );
}
