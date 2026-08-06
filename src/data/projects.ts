import type { WorkEntry } from "./types";

// NOTE: overview/challenge/solution/results/learnings are a first draft
// written from the short descriptions on the old site — review and edit
// before treating these as final copy.
const projects: WorkEntry[] = [
  {
    slug: "risk-aware-sensor-placement",
    title: "Risk-Aware Sensor Placement (2026)",
    description:
      "Independent research showing void probability is convex in sensor capability, and using that to design a risk-aware multi-sensor placement planner.",
    tags: [
      "Research",
      "Python",
      "NumPy / SciPy",
      "Matplotlib",
      "Convex Analysis",
      "Risk-Aware Planning",
    ],
    coverImage: "projects/risk-aware-sensor-placement/fig_a_placements.png",
    overview:
      "Independent research project extending Kim et al.'s (IEEE SysCon 2025) work on multi-sensor placement under uncertainty. Sensor networks are typically planned assuming each sensor's detection capability is known exactly. In practice, capability varies with manufacturing tolerances, environmental conditions, and degradation over time. This project asks how much that uncertainty actually costs, and whether a planner that accounts for it can do meaningfully better.",
    challenge:
      "The core theoretical question was whether void probability (the chance that a region goes unmonitored) behaves predictably as sensor capability becomes uncertain. If void probability is convex in capability, then by Jensen's inequality, uncertainty always hurts coverage on average. But the size of that penalty wasn't established. I needed to prove the convexity result and quantify the gap it implies, then show that a planner ignoring this gap actually underperforms in the worst case.",
    solution:
      "I proved that void probability is convex in sensor capability for multi-sensor placement. I derived a first-order approximation to the Jensen gap in terms of capability variance, giving a closed-form estimate of coverage loss without needing full Monte Carlo simulation. I verified this prediction against simulation, then used it to motivate a risk-aware placement planner with a mean–standard-deviation objective, rather than the standard mean-only objective, so the planner explicitly trades off expected coverage against its variability.",
    results:
      "In simulation, the risk-aware planner holds the 5th-percentile void probability roughly flat as capability uncertainty grows. The nominal (mean-only) planner's worst-case coverage steadily degrades instead. This confirms that accounting for the Jensen gap during planning produces placements that are meaningfully more robust to real-world sensor variability.",
    learnings:
      "This project sharpened my sense of when a convexity argument is worth chasing analytically versus just simulating. Having the closed-form Jensen gap made it possible to reason about the risk-aware objective directly. It also reinforced how much of 'robust' planning is really about choosing the right objective function. The risk-aware planner uses the same coverage model as the nominal one; the entire improvement comes from optimizing a different statistic of the same distribution.",
    media: [
      {
        type: "image",
        url: "projects/risk-aware-sensor-placement/fig_b_distributions.png",
        caption: "Void probability distributions under growing capability variance",
      },
      {
        type: "image",
        url: "projects/risk-aware-sensor-placement/fig_c_downside.png",
        caption:
          "5th-percentile ('downside') void probability: risk-aware vs. nominal planner",
      },
      {
        type: "image",
        url: "projects/risk-aware-sensor-placement/fig_d_jensen.png",
        caption:
          "Realized Jensen gap vs. capability variance, matching the first-order closed-form prediction",
      },
    ],
    techStack: ["Python", "NumPy", "SciPy", "Matplotlib"],
    role: "Independent Researcher",
    githubUrl: "https://github.com/privaelo/risk-aware-sensor-placement",
  },
  {
    slug: "adibot",
    title: "adibot — Autonomous Object Following (2026)",
    description:
      "Differential-drive robot that follows a moving object through a cluttered world, combining target prediction, A* planning, and pure-pursuit tracking.",
    tags: [
      "Python",
      "ROS 2",
      "A* Planning",
      "Pure-Pursuit Control",
      "Occupancy Grids",
    ],
    coverImage: "projects/adibot/adibot.gif",
    overview:
      "adibot is a differential-drive mobile robot that autonomously follows a moving object through a cluttered environment. The goal was to build a complete perception-to-actuation pipeline: target tracking, global planning, and low-level control. Together, they keep a moving target in view even as it changes direction and obstacles block the direct line of sight.",
    challenge:
      "Following a moving target through clutter means the 'goal' is never actually still. By the time a plan finishes computing, the target has already moved. A planner that's too slow to replan falls behind. One that replans too often wastes compute and produces jittery, unstable paths. The tracking controller also needed to stay smooth and collision-free, even when the target's motion was noisy or briefly occluded.",
    solution:
      "I combined three pieces. A constant-velocity model predicts where the target will be a short horizon ahead. A* global planning over an occupancy grid routes around obstacles toward that predicted position. A pure-pursuit controller tracks the resulting path smoothly at the actuation level. Replanning runs at a fixed rate rather than continuously, which keeps the system responsive to the target's motion without recomputing a full global plan on every control cycle.",
    results:
      "The resulting robot reliably follows a moving target through a cluttered test environment, re-routing around obstacles as they appear while keeping the target in view. The fixed-rate replanning strategy struck a good balance. The robot stays responsive to target motion changes without the path becoming unstable from over-frequent replanning.",
    learnings:
      "Building adibot made the coupling between prediction, planning, and control very concrete. A good global plan against a stale target prediction is still a bad plan. I came away with a much better intuition for how replanning frequency trades off responsiveness against computational cost and path stability. That's a theme I've carried into later multi-robot work.",
    media: [
      {
        type: "image",
        url: "projects/adibot/adibot.gif",
        caption: "adibot tracking and following a moving target through a cluttered environment",
      },
    ],
    techStack: [
      "Python",
      "ROS 2",
      "A* Search",
      "Pure-Pursuit Control",
      "Occupancy Grid Mapping",
    ],
    role: "Solo Developer",
    githubUrl: "https://github.com/privaelo/adibot",
  },
  {
    slug: "air-ground-ops",
    title: "air-ground-ops — Multi-Robot Task Allocation (2025)",
    description:
      "Heterogeneous air-ground testbed in ROS 2 and Gazebo: a UAV provides overhead sensing while three UGVs execute tasks assigned by a Hungarian-algorithm allocator.",
    tags: [
      "ROS 2",
      "Gazebo Sim",
      "Python",
      "Hungarian Algorithm",
      "Task Allocation",
    ],
    coverImage: "projects/air-ground-ops/air-ground-ops.gif",
    overview:
      "air-ground-ops is a heterogeneous air-ground robotics testbed built in ROS 2 and Gazebo. It combines a UAV with overhead sensing and three ground vehicles (UGVs) that execute navigation tasks. The project explores multi-robot task allocation: given several target locations and multiple ground vehicles, which robot should go where?",
    challenge:
      "Coordinating heterogeneous robots means dealing with two problems at once. The first is building a shared picture of the environment from a single overhead sensor. The second is dividing a set of target locations among multiple ground vehicles efficiently. This needed a principled way to compute that assignment, plus the ROS 2/Gazebo infrastructure to pipe UAV sensing into a decision the UGVs could act on.",
    solution:
      "The UAV publishes a coarse occupancy estimate of the environment from its overhead vantage point, shared across the testbed. For task allocation, I implemented the Hungarian algorithm as a centralized, optimization-based baseline. Given the set of UGVs and target locations, it computes the assignment that minimizes total travel cost. The UGVs then execute that assignment using their local navigation stacks.",
    results:
      "The testbed successfully coordinates one UAV and three UGVs end-to-end in simulation. The UAV's occupancy estimate informs the shared map, and the Hungarian-algorithm allocator assigns each UGV to a target location to minimize total travel cost across the fleet. That outperformed a naive nearest-target assignment in the scenarios tested.",
    learnings:
      "This project was my first hands-on experience with centralized multi-robot task allocation as an optimization problem. Implementing the Hungarian algorithm as a baseline gave me a concrete reference point for evaluating more decentralized or learned allocation strategies later. Building the ROS 2/Gazebo air-ground pipeline also taught me a lot about the practical overhead of getting heterogeneous robots to share a consistent world model.",
    media: [
      {
        type: "image",
        url: "projects/air-ground-ops/air-ground-ops.gif",
        caption: "UAV overhead sensing coordinating three UGVs via centralized task allocation",
      },
    ],
    techStack: ["ROS 2", "Gazebo Sim", "Python", "Hungarian Algorithm"],
    githubUrl: "https://github.com/privaelo/air-ground-ops",
  },
  /* Commented out until there are quantifiable results to show.
  {
    slug: "ar4-color-sorting-arm",
    title: "ar4-color-sorting-arm — 6-DOF Manipulator",
    description:
      "Collaborative 6-DOF color-sorting arm: CAD-designed manipulator, Gazebo simulation, MoveIt 2 motion planning, and RGB-D color detection. Work in progress.",
    tags: [
      "ROS 2",
      "Gazebo Sim",
      "MoveIt 2",
      "URDF / Xacro",
      "CAD",
      "RGB-D Vision",
      "Work in Progress",
    ],
    coverImage: "projects/ar4-color-sorting-arm/ar4.png",
    overview:
      "A collaborative project building a 6-DOF color-sorting robotic arm end to end. The pieces span CAD-designed manipulator, Gazebo simulation, MoveIt 2 motion planning, and RGB-D-based color detection. The system is designed to pick up objects, identify their color, and sort them into the correct bin. This project is still in progress.",
    challenge:
      "Getting a CAD-designed manipulator to behave correctly in simulation required the mechanical design, the URDF/Xacro robot description, and the Gazebo simulation environment to all agree with each other. A mismatch in any one of them (joint limits, mass properties, collision geometry) shows up as physically implausible behavior in sim. My piece of this was making sure the gripper and its integration into the rest of the arm held up under MoveIt 2's motion planning and Gazebo's physics.",
    solution:
      "I designed the gripper base in CAD, built the full URDF/Xacro assembly for the arm, and integrated it into Gazebo so it could be driven by MoveIt 2's motion planner. I also designed the final simulation world, including the boxes and bins the arm sorts objects into, so the team had a consistent environment to test picking and placing against. That world also supported teammates' work on RGB-D color detection.",
    results:
      "The gripper base and URDF assembly integrate cleanly into Gazebo and plan correctly under MoveIt 2. The simulation world provides a consistent pick-and-sort environment for the team's RGB-D detection pipeline to be tested against. The full pick-detect-sort loop is still being integrated end to end.",
    learnings:
      "This project deepened my CAD-to-simulation workflow. Gazebo physics is sensitive to details like inertial properties and collision meshes, ones that are easy to leave 'close enough' in CAD but need to be much more precise for simulation to behave sensibly. Working across CAD, URDF/Xacro, and MoveIt 2 also gave me a clearer picture of how the mechanical design and motion-planning layers of a manipulator project depend on each other.",
    media: [
      {
        type: "image",
        url: "projects/ar4-color-sorting-arm/ar4.png",
        caption: "6-DOF color-sorting arm in Gazebo simulation",
      },
    ],
    techStack: [
      "ROS 2",
      "Gazebo Sim",
      "MoveIt 2",
      "URDF / Xacro",
      "CAD",
      "RGB-D Vision",
    ],
    role: "Mechanical CAD & Simulation Integration",
    githubUrl: "https://github.com/privaelo/ar4-color-sorting-arm",
  },
  */
  {
    slug: "engine-sensor-anomaly-detection",
    title: "Engine Sensor Anomaly Detection (2025)",
    description:
      "An end-to-end machine learning pipeline for detecting anomalies in multivariate vehicle sensor data, using Isolation Forest and Airflow orchestration. It inspired EngineSense, which won second place at Honda's i-Con Hackathon (2026).",
    tags: [
      "Python",
      "Machine Learning",
      "Isolation Forest",
      "Airflow",
      "Predictive Maintenance",
    ],
    coverImage:
      "https://github.com/user-attachments/assets/377f742b-7f70-488a-8eb1-d47eb5bd369a",
    overview:
      "Engine Sensor Anomaly Detection is an end-to-end machine learning pipeline for spotting anomalies in multivariate vehicle sensor data. It combines Isolation Forest, an unsupervised anomaly-detection model, with Airflow orchestration to make the workflow repeatable. It's built on the NASA CMAPSS turbofan engine dataset, a standard benchmark for predictive maintenance. This project inspired EngineSense, which won second place at Honda's i-Con Hackathon (2026).",
    challenge:
      "Vehicle sensor data is multivariate and noisy, and failures don't announce themselves as a single bad reading. Detecting a developing problem means looking at how many sensor channels move together over time. There's also no labeled 'failure' data to train a classifier on ahead of time. The detection method had to work in an unsupervised setting, and the whole pipeline needed to be repeatable.",
    solution:
      "I generated sliding-window features from the sensor and operational-setting columns, using a 30-cycle window with a stride of 1, so each sample captures a short history of engine behavior. An Isolation Forest model scores each window for how anomalous it is. Windows scoring above the 98th percentile are flagged as anomalies. The whole scoring pipeline runs as an Airflow DAG, with separate tasks for loading data, generating windows, and scoring and saving anomalies, so it can be scheduled and re-run repeatably.",
    results:
      "The pipeline flags anomaly alerts per engine unit and cycle, with dashboards showing the anomaly score distribution, anomaly counts per engine, and sensor correlation patterns. The approach and results became the basis for EngineSense, a project inspired by this pipeline that won second place at Honda's i-Con Hackathon in 2026.",
    learnings:
      "This project was my first time building a full ML workflow around orchestration. Wiring the feature generation, scoring, and output steps into an Airflow DAG forced me to think about the pipeline as a repeatable system. Working with an unsupervised method also sharpened how I think about evaluation.",
    media: [
      {
        type: "image",
        url: "https://github.com/user-attachments/assets/377f742b-7f70-488a-8eb1-d47eb5bd369a",
        caption: "Anomaly score distribution across engine units",
      },
      {
        type: "image",
        url: "https://github.com/user-attachments/assets/5166491f-c40e-46c0-8d45-52919d3e4b11",
        caption: "Anomaly counts per engine unit",
      },
      {
        type: "image",
        url: "https://github.com/user-attachments/assets/fe510af3-7729-4eb7-b335-5278b6d4b7e5",
        caption: "Sensor correlation heatmap",
      },
    ],
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Airflow",
      "Docker",
      "Isolation Forest",
    ],
    role: "Solo Developer",
    githubUrl: "https://github.com/privaelo/engine-sensor-anomaly-detection",
  },
  {
    slug: "multichannel-audio-source-extraction",
    title: "Multichannel Audio Source Extraction (2022)",
    description:
      "Course mini-project (ELG5377 - Adaptive Signal Processing, uOttawa, 2022): separating two overlapping speech sources from a two-microphone mixture using optimum Wiener filters built from empirical correlations.",
    tags: [
      "Coursework",
      "ELG5377",
      "MATLAB",
      "Wiener Filtering",
      "Blind Source Separation",
    ],
    coverImage:
      "projects/multichannel-audio-source-extraction/output-graphs.jpg",
    overview:
      "A mini-project for uOttawa's ELG5377 (Adaptive Signal Processing) course in 2022. Two speech sources, SA and SB, were recorded on two microphones, with an interval where they overlap and speak simultaneously. The goal was to recover each source separately from the two-microphone mixture using linear filtering built entirely from second-order statistics (correlations), rather than any learned or adaptive model.",
    challenge:
      "The two sources overlap in time on both microphones, so there's no interval where the mixture itself isolates either one. What's available instead are short training intervals where each source was recorded alone. The task was to turn those single-source recordings into a filter that, when applied to the overlapping two-microphone mixture, would pull each source back out.",
    solution:
      "For each source, I estimated a cross-correlation vector between its isolated training recording and both microphones' overlapping-interval signals, and built a joint 2-microphone autocorrelation (block Toeplitz) matrix from the overlapping mixture itself. Solving the resulting Wiener-Hopf normal equations, via a regularized pseudo-inverse since the correlation matrix was close to singular, gives an 11-tap FIR filter per microphone per source. Applying each source's pair of filters to the two mic signals and summing the outputs produces that source's extracted estimate. I also computed a signal-to-interference ratio (SIR) between the two extracted signals to quantify how well each favored its target source over the other.",
    results:
      "The extracted signals visibly track each source's speech envelope separately in the output plots, even though both sources overlap in every sample of the input mixture. The SIR metric in the code gives a way to quantify that separation numerically, on top of the qualitative before/after comparison in the plots.",
    learnings:
      "This project was a hands-on run through the Wiener-Hopf equations: estimating correlations from data, assembling them into a linear system, and dealing with a poorly conditioned correlation matrix that needed a regularized pseudo-inverse rather than a direct inverse. It's a smaller, classical counterpart to the estimation and filtering ideas that show up in my later robotics and sensing work.",
    techStack: ["MATLAB", "Wiener Filtering", "Correlation Estimation"],
  },
];

export default projects;
