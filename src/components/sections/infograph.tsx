import Button from "../button";
import ExperienceCard from "../experienceCard";

export default function Infograph() {
  return (
    <div className="z-10 flex flex-col pb-10 md:basis-1/2 md:pt-20">
      <div>
        <h1 className="top-0 z-50 rounded py-4 text-base font-bold uppercase tracking-widest text-slate-200">
          About Me
        </h1>
        <div className="mb-8">
          <AboutMe />
        </div>
      </div>

      <div>
        <h1 className="top-0 z-50 mb-4 rounded py-4 text-base font-bold uppercase tracking-widest text-slate-200">
          Skills
        </h1>
        <div className="mb-8">
          <Skills />
        </div>
      </div>

      <div>
        <h1 className="top-0 z-50 mb-4 rounded py-4 text-base font-bold uppercase tracking-widest text-slate-200">
          Experience
        </h1>
        <div className="mb-8">
          <Experience />
          <div className="mt-4">
            <Button text="View Resume" xlink="/resume.pdf" />
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <p>
      I hold a Master of Engineering in Electrical and Computer Engineering
      from the{" "}
      <a
        className="font-medium text-slate-200 hover:text-red-500 focus-visible:text-red-500"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.uottawa.ca/"
      >
        University of Ottawa
      </a>{" "}
      and a Bachelor of Engineering in Electronics and Communications from All
      Nations University College in Ghana, graduating with First Class
      Honors. Broadly, I'm interested in multi-robot systems coordination,
      joint prediction and planning, and multi-agent reinforcement learning.
      I currently work as a Software Test Engineer at Honda R&amp;D Americas,
      and I'm a Professional Member of Black in Robotics and a Graduate
      Mentee with Emerging Leaders in AI.
    </p>
  );
}

function Skills() {
  const skillRows: { label: string; values: string }[] = [
    { label: "Programming", values: "Python · C++ · MATLAB" },
    {
      label: "Robotics & Sim",
      values: "ROS 2 · Gazebo Sim · MuJoCo · URDF/Xacro · RViz",
    },
    { label: "AI & Vision", values: "PyTorch · OpenCV · Jax · CUDA" },
    { label: "Tools", values: "Linux · Shell · Git · Docker" },
  ];

  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {skillRows.map((row) => (
        <div
          key={row.label}
          className="flex flex-col gap-1 py-2 text-sm sm:flex-row sm:gap-4"
        >
          <span className="flex-none text-slate-200 sm:w-40">
            {row.label}
          </span>
          <span className="text-slate-400">{row.values}</span>
        </div>
      ))}
    </div>
  );
}

function Experience() {
  return (
    <>
      <ExperienceCard
        title="Software Test Engineer"
        company="Honda R&D Americas"
        dates="Contract, 2023 – Present"
        location="Raymond, OH, USA"
        description="Automated testing for embedded infotainment software over CAN, Ethernet, ADB, and OTA."
        tags={["Embedded Systems", "Test Automation", "CAN/Ethernet", "OTA"]}
      />
      <ExperienceCard
        title="Graduate Researcher"
        company="University of Ottawa"
        dates="Jan 2023 – May 2023"
        description="Federated learning and distributed systems for UAV swarms, advised by Dr. Ismaeel Al Ridhawi."
        tags={["Federated Learning", "Distributed Systems", "UAV Swarms"]}
      />
      <ExperienceCard
        title="Undergraduate Researcher"
        company="Space Systems Technology Lab (SSTL), All Nations University College"
        dates="2021 – 2022"
        description="Optical communications research, including Free Space Optics and hybrid RoF-WDM links, advised by Dr. A. Antwiwaa."
        tags={["Optical Communications", "Free Space Optics", "RoF-WDM"]}
      />
      <ExperienceCard
        title="Professional Member"
        company="Black in Robotics"
        dates="2026 – Present"
        description="Community of Black roboticists and allies advancing representation in robotics and AI."
      />
      {/* <ExperienceCard
        title="Graduate Mentee"
        company="Emerging Leaders in AI"
        dates="2026 – 2027"
        description="Mentorship program supporting the next generation of AI researchers and practitioners."
      /> */}
    </>
  );
}
