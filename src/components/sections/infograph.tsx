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
      I hold a Master's in Electrical and Computer Engineering
      from the{" "}
      <a
        className="font-medium text-slate-200 hover:text-red-500 focus-visible:text-red-500"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.uottawa.ca/"
      >
        University of Ottawa
      </a>{" "}
      and a Bachelor's in Electronics and Communications from{" "}
      <a
        className="font-medium text-slate-200 hover:text-red-500 focus-visible:text-red-500"
        rel="noopener noreferrer"
        target="_blank"
        href="https://anu.edu.gh/"
      >
        All Nations University
      </a>{" "}
      , graduating with First Class Honors. 
      Currently, I am interested in
      multi-robot systems coordination,
      path planning, and reinforcement learning. I want to build robust policies for multi-agent systems uder uncertainty in outdoor environments.
    </p>
  );
}

function Skills() {
  const skillRows: { label: string; values: string }[] = [
    { label: "Programming", values: "Python · C++ · MATLAB" },
    {
      label: "Robotics & Sim",
      values: "ROS 2 · Gazebo Sim · URDF/Xacro · RViz",
    },
    {
      label: "AI & Data",
      values: "PyTorch · OpenCV · Scikit-learn · NumPy · SciPy · Pandas · Matplotlib",
    },
    { label: "Tools", values: "Linux · Shell · Git · Docker · Airflow" },
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
        company="Space Systems Technology Lab (SSTL), All Nations University"
        dates="2019 – 2020"
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
