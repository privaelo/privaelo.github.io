import TypewriterComponent from "typewriter-effect";
import SocialBar from "../socialBar";
import { getImageUrl } from "../../utils/utils";

export default function Hero() {
  return (
    <div className="z-10 flex flex-col pt-16 md:sticky md:top-0 md:max-h-screen md:basis-1/2">
      <div className="rounded-lg border border-slate-400 border-opacity-0 p-4">
        <img
          src={getImageUrl("profile.jpg")}
          alt="Tagnon Okoumassoun"
          className="mb-6 h-32 w-32 select-none rounded-full object-cover shadow-lg"
          draggable={false}
        />

        <h1 className="text-4xl font-bold tracking-tight text-slate-200 drop-shadow-md transition-all duration-300 hover:-translate-y-1 hover:text-slate-400 sm:text-5xl">
          <a href="/">Tagnon Okoumassoun</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-300 sm:text-xl">
          <TypewriterComponent
            options={{
              delay: 50,
              deleteSpeed: "natural",
              strings: [
                "Robotics & Autonomous Systems",
                "Multi-Robot Coordination",
                "Joint Prediction & Planning",
                "Multi-Agent Reinforcement Learning",
                "Software Test Engineer @ Honda R&D",
                "MEng, University of Ottawa",
                "Black in Robotics — Professional Member",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <SocialBar />
      </div>
    </div>
  );
}
