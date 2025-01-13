import Container from "./Container";
import RoundCorner from "./RoundCorner";

export default function Hero() {
  return (
    <Container>
      <div className="w-full">
        <h1 className="mx-auto mb-10 max-w-screen-lg break-words text-center text-6xl font-thin md:text-8xl">
          Custom web design that drives results
        </h1>
      </div>

      <div className="relative h-[500px] rounded-2xl">
        <div className="absolute right-0 top-[-1px] z-10 bg-white md:rounded-bl-2xl">
          <p className="max-w-[500px] p-10 font-light lg:text-2xl">
            For trailblazing brands and ambitious visionaries, we don’t just
            design websites – we craft digital experiences that amplify your
            impact and success.
          </p>
          <RoundCorner className="bottom-[-16px] h-4 w-4 scale-x-[-1] md:bottom-0 md:left-[-16px] md:top-0 md:rotate-90" />
          <RoundCorner className="bottom-[-15.5px] right-0" />
        </div>

        <div className="absolute bottom-0 left-0 z-10 rounded-tr-2xl bg-white">
          <div className="h-14 w-20"></div>
          <RoundCorner className="left-0 top-[-15.5px] h-4 w-4 rotate-180" />
          <RoundCorner className="bottom-[-.5px] right-[-16px] rotate-180" />
        </div>

        <video
          src="/hero-video.mp4"
          alt="hero video of geometric object"
          className="h-full w-full rounded-2xl object-cover"
          priority="true"
          sizes="100%"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
    </Container>
  );
}
