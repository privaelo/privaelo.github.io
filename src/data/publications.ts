import type { WorkEntry } from "./types";

// overview/challenge/solution/results/learnings are written from the
// published abstracts, expanded into the site's six-section format — still
// worth a read-through before publishing, but grounded in the real papers.
const publications: WorkEntry[] = [
  {
    slug: "blockchain-sagin-disaster-management",
    title:
      "Blockchain-Enabled SAGIN Communication for Disaster Prediction and Management",
    description:
      "T. P. Okoumassoun, I. Al Ridhawi, et al. — IEEE Cyber Science Congress (CyberSci), 2023. Best Conference Paper Award.",
    tags: [
      "IEEE CyberSci 2023",
      "Best Paper Award",
      "Blockchain",
      "SAGIN",
      "Federated Learning",
      "UAV Swarms",
    ],
    overview:
      "Published at the IEEE Cyber Science Congress (CyberSci) 2023, where it won Best Conference Paper. This paper introduces a blockchain-enabled Space-Air-Ground Integrated Network (SAGIN) framework. It integrates satellites, aerial networks, and terrestrial communication, and authenticates both the devices and the data flowing through a 6G-era cooperative network. The framework supports Federated Learning (FL) for distributed, real-time data analysis. It's demonstrated on an earthquake monitoring use case that also explores whether certain sensor signals show anomalous behavior around past earthquake events.",
    challenge:
      "6G networks are expected to lean heavily on SAGIN to deliver seamless, high-performance service by combining satellites, aerial networks, and terrestrial infrastructure. But that same openness is a security liability. SAGIN's cooperative structure can let untrusted devices become part of the system, so both the devices and the data they contribute need to be authenticated before they can be trusted for downstream analysis. On top of that, we needed a way to analyze data from this distributed network in real time, without funneling everything back to a single central server.",
    solution:
      "We designed a blockchain-enabled SAGIN framework that authenticates both participating devices and the data they collect. We layered Federated Learning on top, so the network can stay distributed while still analyzing data in real time, without centralizing raw data. As a proof-of-concept, I developed a fuzzy prediction model over historical data from past earthquake events. It screened a set of satellite sensor channels I selected for anomalous behavior around the time of those events. Separately, the framework's post-earthquake monitoring uses UAVs to reach remote or damaged areas and capture high-quality images, processed locally on the UAV swarm or on edge devices for real-time decision-making.",
    results:
      "The fuzzy model found that some of the selected sensor channels showed anomalous patterns clustered within a similar time window around several historical earthquake events. That's a correlational signal worth investigating further. It is not proof that earthquakes can be reliably predicted from it, and I want to be explicit about that distinction given the word 'prediction' in the paper's title. The broader framework combines that analysis with blockchain-authenticated, FL-supported SAGIN communication and UAV-based post-event monitoring. Together, it demonstrated the feasibility of the overall architecture, and the paper received the Best Conference Paper Award at IEEE CyberSci 2023.",
    learnings:
      "This project taught me that security and distributed learning have to be co-designed together. Authenticating devices and data only matters if the analysis built on top of it, Federated Learning here, is also structured to work with distributed, potentially unreliable participants. It also sharpened how carefully I try to state what a result actually shows.",
    role: "Author",
    paperUrl:
      "https://doi.org/10.1109/DASC/PiCom/CBDCom/Cy59711.2023.10361502",
  },
  {
    slug: "hybrid-rof-wdm-optical-amplifiers",
    title:
      "Performance Evaluation of Optical Amplifiers in a Hybrid RoF-WDM Communication System",
    description:
      "T. P. Okoumassoun, A. Antwiwaa, et al. — Journal of Communications, vol. 18, no. 8, 2023.",
    tags: [
      "Journal of Communications",
      "Optical Communications",
      "RoF-WDM",
      "Optical Amplifiers",
    ],
    overview:
      "Published in the Journal of Communications (vol. 18, no. 8, 2023). This paper compares three optical amplifier technologies: Erbium-Doped Fiber Amplifiers (EDFA), Semiconductor Optical Amplifiers (SOA), and Raman amplifiers. The comparison runs in a long-distance hybrid Radio-over-Fiber/Wavelength-Division-Multiplexing (RoF-WDM) communication system, to determine which amplifier best sustains signal quality as distance increases.",
    challenge:
      "RoF-WDM systems combine two bandwidth-boosting techniques: Radio-over-Fiber for simpler, more efficient signal transmission, and WDM for multiplexing many wavelengths onto one fiber. But both power loss and dispersion get worse over long distances, and different optical amplifier technologies handle that degradation differently. The question was which amplifier actually sustains the best signal quality, and at which distances. No single amplifier (EDFA, SOA, or Raman) was guaranteed to win across the whole range.",
    solution:
      "We simulated a long-distance RoF-WDM communication system. We evaluated EDFA, SOA, and Raman amplifiers at multiple destination lengths. At each configuration, we measured received power, Q-factor, and Bit Error Rate (BER) to characterize how each amplifier's performance holds up as distance increases.",
    results:
      "EDFA delivered the best received power at every destination length tested, peaking at 19.2128 dB at 10 km. SOA had the best Q-factor and BER at shorter distances: a BER of 1.21666 × 10⁻⁷ and Q-factor of 5.15645 at 10 km, and a BER of 5.62603 × 10⁻⁸ and Q-factor of 5.2966 at 25 km. At the longest distance tested, 60 km, the Raman amplifier performed best, with a Q-factor of 4.6517 and BER of 1.27797 × 10⁻⁶. Overall, EDFA and Raman amplifiers proved most suitable for long-distance RoF-WDM transmission.",
    learnings:
      "This project gave me a rigorous, metrics-driven way of thinking about system trade-offs. The 'best' component isn't fixed. It depends on the operating regime: SOA won at short range, while EDFA and Raman took over at longer distances. That habit, benchmarking across the full range of operating conditions, is something I still apply directly when evaluating robotics systems under uncertainty.",
    role: "Author",
    paperUrl: "https://www.jocm.us/2023/JCM-V18N8-522.pdf",
  },
  {
    slug: "free-space-optics-link-performance",
    title: "Free Space Optics Link Performance Estimation Under Diverse Conditions",
    description:
      "T. P. Okoumassoun, A. Antwiwaa, et al. — Journal of Communications, 2022.",
    tags: [
      "Journal of Communications",
      "Free Space Optics",
      "Diversity Techniques",
      "Tropical Climate",
    ],
    overview:
      "Published in the Journal of Communications (2022). This paper proposes diversity techniques to improve the link performance of Free Space Optics (FSO) communication systems operating in tropical regions. Rain, fog, and haze pose a particular challenge there, one that had seen little prior research.",
    challenge:
      "FSO transmits signals through open air along a line-of-sight path. That makes it a compelling substitute for fiber optics, since no cabling is required, but it also leaves the link directly exposed to the atmosphere. Tropical regions see especially adverse conditions (rain, fog, haze) that degrade FSO signals. At the time, there was little research specifically on FSO performance in tropical climates, or on ways to mitigate that interference.",
    solution:
      "We proposed diversity techniques: using multiple transmission/reception paths so the link doesn't depend on a single one surviving atmospheric interference. The goal was to improve FSO link performance specifically under tropical conditions. We evaluated the approach in simulation against standard, non-diversity techniques.",
    results:
      "The simulation results showed that the proposed diversity techniques achieved a better Bit Error Rate (BER) and Signal-to-Noise Ratio (SNR) than the comparison techniques. This indicates that diversity is an effective way to mitigate the impact of tropical atmospheric conditions on FSO link performance.",
    learnings:
      "This project was my introduction to treating a communication system's operating environment as a first-class design constraint. Tropical atmospheric conditions weren't just noise to average out. They were the entire reason the diversity technique was needed. That framing, designing explicitly for the conditions a system will actually face, is a thread that runs through my later research, including the risk-aware sensor placement work.",
    role: "Author",
    paperUrl:
      "https://www.jocm.us/uploadfile/2022/0826/20220826044558392.pdf",
  },
];

export default publications;
