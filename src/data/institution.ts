/* Source of truth: https://fisat.ac.in/ (fetched Oct 2026).
   Only facts verified on official pages are stated as fact.
   Transport times are labelled as representative patterns with a verify note. */

export const institution = {
  name: "Federal Institute of Science and Technology",
  short: "FISAT",
  motto: "Focus on Excellence",
  location: "Hormis Nagar, Mookkannoor P.O, Angamaly, Ernakulam Dt., Kerala 683 577",
  phone: "0484 - 2725272",
  email: "mail@fisat.ac.in",
  approvals:
    "Approved by AICTE, New Delhi & Affiliated to APJ Abdul Kalam Technological University (KTU), Thiruvananthapuram",
  accreditation: "Autonomous • NAAC A+ (3.45 CGPA, 2nd cycle) • NBA Accredited (6 B.Tech programmes) • ISO 21001:2018",
  established: 2002,
  promotedBy: "Federal Bank Officers' Association Educational Society (FBOAES)",
  stats: [
    { value: 23, suffix: "", label: "Years of legacy (est. 2002)" },
    { value: 3200, suffix: "+", label: "Students on campus" },
    { value: 602, suffix: "*", label: "Offers — Class of 2026 (as on May 2026)" },
    { value: 12, suffix: " cr+", prefix: "Rs. ", label: "Worth scholarships" },
  ],
};

export const visionMission = {
  motto: "Focus on Excellence",
  vision:
    "To evolve into a world-class professional institute committed to excellence in education, fostering holistic development, and empowering socially responsible global technocrats to drive sustainable growth through leadership in industry, innovation, research, and community engagement.",
  mission: [
    "To deliver high-quality professional education that promotes academic excellence, fosters the right attitude, cultivates essential skills, and encourages innovation and global competence through an industry-aligned curriculum and advanced research.",
    "To nurture socially responsible technocrats, impactful leaders, and accomplished management professionals, by promoting holistic growth, upholding ethical values, and championing sustainable practices for the advancement of both industry and society",
  ],
  coreValues: [
    "Inclusiveness",
    "Nurturing",
    "Social Commitment",
    "Professionalism",
    "Integrity",
    "Respect",
    "Excellence",
  ],
};

export type Department = {
  id: string;
  code: string;
  name: string;
  image: string;
  programmes: string[];
  intake: string;
  labs: string[];
  research: string[];
  opportunities: string[];
  accredited?: boolean;
};

export const departments: Department[] = [
  {
    id: "cse", image: "/img-cse.jpg", code: "01", name: "Computer Science & Engineering",
    programmes: ["B.Tech CSE — 180 seats", "M.Tech Artificial Intelligence & Data Science — 12 seats", "M.Tech AI & DS (Working Professionals) — 15 seats", "Ph.D"],
    intake: "B.Tech 180 • M.Tech 12+15",
    labs: ["Central Computing Facility", "AI / Data Science Lab", "Robotics Lab", "Language Lab"],
    research: ["Artificial intelligence", "Data science", "College Research Cell projects"],
    opportunities: ["Hackathons", "Coding clubs", "Internships via industry interaction", "Project exhibitions"],
    accredited: true,
  },
  {
    id: "ece", image: "/img-ece.jpg", code: "02", name: "Electronics & Communication Engineering",
    programmes: ["B.Tech ECE — 120 seats", "M.Tech VLSI & Embedded Systems — 12 seats", "Ph.D"],
    intake: "B.Tech 120 • M.Tech 12",
    labs: ["VLSI & Embedded Lab", "Communication Lab", "Electronics Hackathon Lab (Burn-A-Board)"],
    research: ["VLSI", "Embedded systems", "Signal processing"],
    opportunities: ["Burn-A-Board 24-hr hackathon", "Core + IT placements", "Higher-ed pathways (France Connect sessions)"],
    accredited: true,
  },
  {
    id: "eee", image: "/img-eee.jpg", code: "03", name: "Electrical & Electronics Engineering",
    programmes: ["B.Tech EEE — 60 seats", "M.Tech Power Electronics & Power Systems — 12 seats"],
    intake: "B.Tech 60 • M.Tech 12",
    labs: ["Power Electronics Lab", "Power Systems Lab", "Electrical Machines Lab"],
    research: ["Power electronics", "Renewable integration", "Smart grids"],
    opportunities: ["Core recruiters: Schneider Electric, Kalkitech, Procsys", "GATE / PSU guidance"],
    accredited: true,
  },
  {
    id: "eie", image: "/img-eie.png", code: "04", name: "Electronics & Instrumentation Engineering",
    programmes: ["B.Tech EIE — 60 seats"],
    intake: "B.Tech 60",
    labs: ["Instrumentation Lab", "Process Control Lab", "Sensors & Transducers Lab"],
    research: ["Instrumentation", "Automation", "Control systems"],
    opportunities: ["Core instrumentation roles", "Interdisciplinary IoT projects"],
    accredited: true,
  },
  {
    id: "me", image: "/img-me.jpg", code: "05", name: "Mechanical Engineering",
    programmes: ["B.Tech ME — 120 seats", "M.Tech Renewable Energy — 12 seats", "M.Tech Renewable Energy (Working Professionals) — 15 seats"],
    intake: "B.Tech 120 • M.Tech 12+15",
    labs: ["ANSYS FEA / CAD-CAM Lab", "Thermal & Fluids Lab", "Manufacturing Lab", "IDEA Lab"],
    research: ["Sustainable materials & manufacturing (i-SMaRT conference)", "Renewable energy", "FEA / SolidWorks applied research"],
    opportunities: ["i-SMaRT international conference", "ANSYS / SolidWorks skill programmes", "Core recruiters: Forbes Marshall, TAFE, MRF, Apollo Tyres"],
    accredited: true,
  },
  {
    id: "ce", image: "/img-ce.jpg", code: "06", name: "Civil Engineering",
    programmes: ["B.Tech CE — 120 seats", "M.Tech Structural Engineering & Construction Management — 24 seats"],
    intake: "B.Tech 120 • M.Tech 24",
    labs: ["Structural Lab", "Surveying Lab", "Construction Materials Lab"],
    research: ["Structural engineering", "Construction management", "Sustainable materials"],
    opportunities: ["Core recruiters: Sobha, RDC Concrete, Aarbee Structures", "Average 5.2 LPA for core branches (Class of 2025)"],
    accredited: true,
  },
  {
    id: "csd", image: "/img-idea.jpg", code: "07", name: "Computer Science & Design",
    programmes: ["B.Tech Computer Science & Design — 60 seats"],
    intake: "B.Tech 60",
    labs: ["Design Studio", "Computing Labs", "Media Lab"],
    research: ["Human-centric design", "UI / UX + computing"],
    opportunities: ["Highest placement % 91.6% (Class of 2025)", "Design + software roles"],
  },
  {
    id: "mba", image: "/img-mba.jpg", code: "08", name: "Business Administration (FISAT Business School)",
    programmes: ["MBA — 120 seats (Finance, Marketing, HR, IS, Operations, International Business)"],
    intake: "MBA 120",
    labs: ["MBA Reference Library", "Seminar Halls", "ICT-enabled classrooms"],
    research: ["Management research via FBS", "Industry case work"],
    opportunities: ["Banking & consulting placements (Federal Bank, Deloitte, EY, KPMG)", "GD / PI + aptitude training"],
  },
  {
    id: "mca", image: "/img-mca.jpg", code: "09", name: "Computer Applications",
    programmes: ["MCA (2-yr) — 60 seats", "Integrated MCA (5-yr) — 60 seats"],
    intake: "MCA 60 • IMCA 60",
    labs: ["MCA Labs", "Central Computing Facility", "Department reference library"],
    research: ["Applications & systems", "Industry internships & projects"],
    opportunities: ["MOU-driven internships", "Project exhibitions & add-on courses", "University ranks incl. MG & KTU toppers"],
  },
];

export type CampusNode = {
  id: string; label: string; short: string;
  x: number; y: number;
  description: string; facts: string[];
};

export const campusNodes: CampusNode[] = [
  { id: "academic", label: "Academic Blocks", short: "AC", x: 42, y: 38, description: "ICT-enabled classrooms and seminar halls housing all nine departments — CE, CSE, EEE, ECE, EIE, ME, MBA, MCA and Science & Humanities.", facts: ["ICT-enabled classrooms & seminar halls", "9 departments", "Autonomous curriculum under KTU affiliation"] },
  { id: "library", label: "Library & Information Centre", short: "LI", x: 62, y: 30, description: "Three-storey central library to the right of the Administrative block — fully automated with OPAC on FISAT intranet.", facts: ["83,650+ volumes • 26,294 titles", "155 print journals • 5,000+ e-journals", "3,000+ DVDs/CD-ROMs • DSpace digital archive", "Open 8am–8pm weekdays, 8am–4:30pm Saturdays"] },
  { id: "hostel", label: "Hostels", short: "HO", x: 22, y: 60, description: "Separate hostels for boys and girls on campus with dedicated hostel admission via intranet.", facts: ["On-campus boys & girls hostels", "Apply at admission time", "Warden-supported residential life"] },
  { id: "cafeteria", label: "Cafeteria", short: "CA", x: 55, y: 58, description: "Central cafeteria serving the campus community through the day.", facts: ["Central dining", "Student hangout", "Adjacent to academic spine"] },
  { id: "fitness", label: "Fitness Centre", short: "FI", x: 74, y: 52, description: "Dedicated fitness centre for strength and conditioning.", facts: ["Gym & fitness training", "Part of sports ecosystem"] },
  { id: "sports", label: "Sports & Games", short: "SP", x: 80, y: 70, description: "Outdoor grounds and indoor facilities for arts & sports.", facts: ["Football / cricket grounds", "Indoor games", "Annual arts & sports calendar"] },
  { id: "transport", label: "Transportation", short: "TR", x: 12, y: 38, description: "College bus network connecting Angamaly, Aluva, Ernakulam, Thrissur side and suburbs to Hormis Nagar.", facts: ["Multi-route bus network", "See 'Get me to FISAT' finder below", "Mookkannoor, near Angamaly"] },
  { id: "labs", label: "Labs", short: "LA", x: 34, y: 24, description: "Department labs plus Robotics Lab and Language Lab.", facts: ["Robotics Lab", "Language Lab", "Department core labs"] },
  { id: "computing", label: "Central Computing Facility", short: "CC", x: 48, y: 48, description: "Central computing + IT infrastructure backbone with high-speed campus network.", facts: ["Central Computing Facility", "Campus-wide IT infrastructure"] },
  { id: "innovation", label: "Innovation / Research", short: "IN", x: 66, y: 42, description: "College Research Cell, IDEA Lab and incubation-adjacent activity — patents, Agrobot 'DAWN', conferences like i-SMaRT.", facts: ["College Research Cell", "IDEA Lab • patents filed", "i-SMaRT international conference"] },
  { id: "admin", label: "Administration", short: "AD", x: 58, y: 68, description: "Administrative block. College office 8:00 AM – 4:30 PM.", facts: ["Hormis Nagar campus office", "Bank & ATM on campus", "mail@fisat.ac.in • 0484-2725272"] },
];

export type Project = {
  title: string; dept: string; tag: string; description: string; exhibit: string;
};

export const projects: Project[] = [
  { title: "Smart Irrigation with Plant Disease Detection", dept: "CSE / ECE", tag: "Agri-AI", description: "Field sensing + vision models for irrigation scheduling and early disease alerts.", exhibit: "Hall A — Sensing" },
  { title: "AI-enabled Through-Wall Human Activity Recognition", dept: "ECE", tag: "RF + AI", description: "Non-contact activity sensing through walls for safety and assisted living.", exhibit: "Hall A — Sensing" },
  { title: "Intelligent Pothole Detection", dept: "CSE / CE", tag: "Civic-Tech", description: "Road-surface vision for safer, data-driven maintenance.", exhibit: "Hall B — Cities" },
  { title: "Smart Waste Management", dept: "EIE / CSE", tag: "IoT", description: "Fill-level sensing and routing for cleaner campuses and towns.", exhibit: "Hall B — Cities" },
  { title: "Dyslexia Navigator", dept: "CSE", tag: "Assistive", description: "Reading support tooling designed around dyslexic learners.", exhibit: "Hall C — Humans" },
  { title: "Human-Centric Home Assistant", dept: "CSE / EEE", tag: "Ambient AI", description: "Calm, accessible home automation with human factors first.", exhibit: "Hall C — Humans" },
  { title: "Blind Spot Detection", dept: "ECE / ME", tag: "Mobility", description: "Driver-assistance sensing for safer roads.", exhibit: "Hall D — Mobility" },
  { title: "DAWN — Student-built Agrobot", dept: "Robotics / ME", tag: "Robotics", description: "Showcased student Agrobot from FISAT labs.", exhibit: "Hall D — Mobility" },
];

export const founder = {
  name: "Adv. P. V. Mathew",
  years: "1953–2017",
  role: "Founder Chairman",
  portraitNote: "Fondly called 'Mathew Sir'",
  story: [
    "Adv. P. V. Mathew's dynamic leadership, futuristic vision and indomitable determination paved the way to the birth of the Federal Bank Officers' Educational Society (FBOAES) — an initiative of the Federal Bank Officers' Association (FBOA).",
    "The starting of FISAT in 2002 was the manifestation of commitment to society and relentless hard work of Federal Bank officers under his versatile leadership. The college was aptly christened the Federal Institute of Science and Technology and located at Hormis Nagar, Mookkannoor — the birthplace of late K. P. Hormis, founder of The Federal Bank Ltd. — as a tribute.",
    "Adv. Mathew was unanimously selected as the first Chairman of the FISAT Governing Body and served until his retirement from Federal Bank in 2013. He had earlier served as General Secretary of the Federal Bank Officers' Association from 1987 to 2013.",
    "He knew every corner of the campus and everyone working with him. He passed away on 16 June 2017. As a tribute, the college celebrates Founder's Day on 27 September, his birthday.",
  ],
  timeline: [
    { year: "1953", text: "P. V. Mathew is born." },
    { year: "1987", text: "Becomes General Secretary, Federal Bank Officers' Association (serves till 2013)." },
    { year: "2002", text: "FISAT is established at Hormis Nagar, Mookkannoor under FBOAES. Motto: Focus on Excellence." },
    { year: "2006", text: "First batch appears for campus recruitment; MCA programme begins." },
    { year: "2013", text: "Mathew Sir retires from Federal Bank after chairing FISAT's Governing Body since inception." },
    { year: "2017", text: "Passes away 16 June. Founder's Day observed every 27 September." },
    { year: "2025", text: "UGC confers Autonomous Status for 10 years. NAAC A+ (3.45 CGPA). 6 B.Tech programmes NBA-accredited." },
    { year: "Today", text: "3,200+ students • 600+ offers (Class of 2026) • Centre of Excellence in professional education." },
  ],
};

export const campusLife = [
  { id: "hostel", title: "Hostel", text: "Four hostel blocks for 1300+ students — men's UG & PG blocks and ladies' UG & PG blocks, with mess halls, reading rooms and wardens.", img: "/hero-fisat.png" },
  { id: "library", title: "Library", text: "Three-storey LIC: 83,650+ volumes, OPAC, DSpace, Book Bank Scheme, reprographic centre.", img: "/img-library.jpg" },
  { id: "cafeteria", title: "Cafeteria", text: "The college canteen near all departments — fresh meals from trained chefs, seating even at peak hours, plus bank & ATM on campus.", img: "/img-cafeteria.jpg" },
  { id: "sports", title: "Sports", text: "Green turf football ground, cricket ground with net practice, basketball, volleyball, badminton courts and athletics.", img: "/img-sports.jpg" },
  { id: "fitness", title: "Fitness", text: "Separate modern fitness centres for boys and girls, plus a clinical psychologist and 24x7 ambulance on campus.", img: "/img-fitness.jpg" },
  { id: "activities", title: "Student Activities", text: "Curricular & co-curricular: ANSYS FEA, STM32 and SolidWorks workshops, LinkedIn & France-Connect sessions, NEXUS, Resonance alumni meets.", img: "/img-ansys.jpg" },
  { id: "clubs", title: "Clubs", text: "ISTE, NDLI Club, department associations and social-commitment outreach.", img: "/img-social.jpg" },
  { id: "tech", title: "Technical Fests", text: "IDEA Lab builds like Agrobot DAWN, Burn-A-Board 24-hr electronics hackathon and the i-SMaRT international conference.", img: "/img-idea.jpg" },
  { id: "cultural", title: "Cultural Fests", text: "Arts & sports calendar, Hall of Fame victories, Vidyarambham and campus celebrations.", img: "/img-arts.jpg" },
];

export type BusStopTime = { stop: string; time: string };

export type BusRoute = {
  id: string; from: string; routeNo: string; stops: BusStopTime[]; note: string;
};

/* Morning boarding times copied from the official FISAT college-bus schedule
   (College-bus-Timings.pdf). Timings change by semester — verify with the
   transport desk or college office (8:00 AM–4:30 PM). */
export const busRoutes: BusRoute[] = [
  {
    id: "aluva", from: "Aluva", routeNo: "Route No. 19 — Aluva to Campus",
    stops: [
      { stop: "Aluva Post Office", time: "8:00 AM" },
      { stop: "Pump Jn. (in front of Bata Showroom)", time: "8:01 AM" },
      { stop: "KSRTC Bus Stand (in front of Union Bank)", time: "8:02 AM" },
      { stop: "Government Hospital Jn.", time: "8:03 AM" },
      { stop: "Karothukuzhi Jn.", time: "8:04 AM" },
      { stop: "Pvt. Bus Stand", time: "8:05 AM" },
      { stop: "Bank Jn.", time: "8:06 AM" },
      { stop: "Desom", time: "8:13 AM" },
      { stop: "Parambayam", time: "8:14 AM" },
      { stop: "Athani", time: "8:20 AM" },
      { stop: "Angamaly Pvt. Bus Stand", time: "8:27 AM" },
      { stop: "Angamaly KSRTC Bus Stand", time: "8:30 AM" },
      { stop: "FISAT — Hormis Nagar, Mookkannoor", time: "8:45 AM" },
    ],
    note: "Main feeder from Kochi side.",
  },
  {
    id: "ernakulam", from: "Ernakulam / Kalamassery", routeNo: "Route No. 3 — Kumbalam Toll–Vyttila to Campus",
    stops: [
      { stop: "Kumbalam Toll", time: "7:10 AM" },
      { stop: "Shappumpadi", time: "7:13 AM" },
      { stop: "Madavana (Fisheries)", time: "7:15 AM" },
      { stop: "Lakeshore", time: "7:16 AM" },
      { stop: "Nettoor Church", time: "7:18 AM" },
      { stop: "INTUC", time: "7:22 AM" },
      { stop: "Kundannoor", time: "7:25 AM" },
      { stop: "White Fort", time: "7:26 AM" },
      { stop: "Kannadikad", time: "7:28 AM" },
      { stop: "Thykoodam", time: "7:32 AM" },
      { stop: "Vyttila", time: "7:35 AM" },
      { stop: "Chalickavattom", time: "7:36 AM" },
      { stop: "Puthiya Road", time: "7:38 AM" },
      { stop: "Palarivattom Pipe Line", time: "7:39 AM" },
      { stop: "Edappally Toll", time: "7:43 AM" },
      { stop: "Pathadipalam", time: "7:44 AM" },
      { stop: "Kalamassery Panchayath", time: "7:45 AM" },
      { stop: "Ambattukavu", time: "7:52 AM" },
      { stop: "Companypady", time: "7:55 AM" },
      { stop: "KSRTC Garage", time: "7:56 AM" },
      { stop: "Federal Gardens", time: "7:57 AM" },
      { stop: "Angamaly Private Bus Stand", time: "8:25 AM" },
      { stop: "Angamaly KSRTC Bus Stand", time: "8:28 AM" },
      { stop: "FISAT — Hormis Nagar, Mookkannoor", time: "8:45 AM" },
    ],
    note: "Longest city corridor.",
  },
  {
    id: "angamaly", from: "Angamaly Town", routeNo: "Route No. 19 — Angamaly boarding",
    stops: [
      { stop: "Desom", time: "8:13 AM" },
      { stop: "Parambayam", time: "8:14 AM" },
      { stop: "Athani", time: "8:20 AM" },
      { stop: "Angamaly Pvt. Bus Stand", time: "8:27 AM" },
      { stop: "Angamaly KSRTC Bus Stand", time: "8:30 AM" },
      { stop: "FISAT — Hormis Nagar, Mookkannoor", time: "8:45 AM" },
    ],
    note: "Shortest hop to campus.",
  },
  {
    id: "chalakudy", from: "Chalakudy", routeNo: "Route No. 14 — Pariyaram to Campus (via Chalakudy)",
    stops: [
      { stop: "Pariyaram", time: "7:50 AM" },
      { stop: "Chalakudy North", time: "8:00 AM" },
      { stop: "Chalakudy South (KSRTC Junction)", time: "8:05 AM" },
      { stop: "Muringoor Jn.", time: "8:10 AM" },
      { stop: "Koratty", time: "8:15 AM" },
      { stop: "Chirangara", time: "8:20 AM" },
      { stop: "Karukutty", time: "8:25 AM" },
      { stop: "FISAT — Hormis Nagar, Mookkannoor", time: "8:35 AM" },
    ],
    note: "Thrissur-side connector.",
  },
  {
    id: "perumbavoor", from: "Perumbavoor", routeNo: "Route No. 24 — Kothamangalam to Campus (via Perumbavoor)",
    stops: [
      { stop: "Kothamangalam Pvt. Bus Stand", time: "7:30 AM" },
      { stop: "Thangalam", time: "7:32 AM" },
      { stop: "Nangelipady", time: "7:34 AM" },
      { stop: "Kanal Palam", time: "7:35 AM" },
      { stop: "Nellikuzhy", time: "7:38 AM" },
      { stop: "Irumalapady", time: "7:40 AM" },
      { stop: "Odakkali", time: "7:42 AM" },
      { stop: "Cherukunnam", time: "7:43 AM" },
      { stop: "Millupady", time: "7:44 AM" },
      { stop: "Mudikkarai", time: "7:45 AM" },
      { stop: "Kuruppampady Jn.", time: "7:46 AM" },
      { stop: "Theatre", time: "7:47 AM" },
      { stop: "Vattolipady", time: "7:48 AM" },
      { stop: "Vaidyasala", time: "7:49 AM" },
      { stop: "Iringole Post Office", time: "7:50 AM" },
      { stop: "Pattal", time: "7:51 AM" },
      { stop: "Onnam Mile", time: "7:52 AM" },
      { stop: "Ashramam School", time: "7:53 AM" },
      { stop: "Perumbavoor Govt. Hospital Jn.", time: "7:56 AM" },
      { stop: "Perumbavoor Private Bus Stand", time: "7:58 AM" },
      { stop: "Aushadhi Junction", time: "8:00 AM" },
      { stop: "Kanjirakadu", time: "8:02 AM" },
      { stop: "Vallom", time: "8:05 AM" },
      { stop: "Okkal", time: "8:08 AM" },
      { stop: "Kalady Private Bus Stand", time: "8:13 AM" },
      { stop: "FISAT — Hormis Nagar, Mookkannoor", time: "8:45 AM" },
    ],
    note: "Eastern corridor via Kalady.",
  },
  {
    id: "thrissur", from: "Thrissur", routeNo: "Route No. 25 — Thrissur to Campus (via Chalakudy)",
    stops: [
      { stop: "Thrissur Sakthan Bus Stand", time: "7:00 AM" },
      { stop: "Bini Tourist Home", time: "7:01 AM" },
      { stop: "Kizhakke Kotta", time: "7:02 AM" },
      { stop: "Jubilee Mission Medical College", time: "7:03 AM" },
      { stop: "Chelakottukara", time: "7:04 AM" },
      { stop: "Valarkavu", time: "7:05 AM" },
      { stop: "Anjerichira", time: "7:06 AM" },
      { stop: "Kuttanellore Junction", time: "7:09 AM" },
      { stop: "Kuttanellore Bye Pass", time: "7:10 AM" },
      { stop: "Puzhampallam", time: "7:13 AM" },
      { stop: "Marathakara Bye Pass", time: "7:15 AM" },
      { stop: "Jerusalem Dhyana Kendram", time: "7:17 AM" },
      { stop: "Paliakkara", time: "7:18 AM" },
      { stop: "Amballoor", time: "7:20 AM" },
      { stop: "Puthukad (Trichur Service Co-operative Bank)", time: "7:22 AM" },
      { stop: "Nandikara", time: "7:24 AM" },
      { stop: "Nellayi Junction", time: "7:26 AM" },
      { stop: "Kodakara (United Kuries)", time: "7:30 AM" },
      { stop: "Perambra", time: "7:32 AM" },
      { stop: "Appolo", time: "7:35 AM" },
      { stop: "Irinjalakuda Junction", time: "7:39 AM" },
      { stop: "Ashramam Junction", time: "7:43 AM" },
      { stop: "Mercy Home", time: "7:44 AM" },
      { stop: "Court", time: "7:45 AM" },
      { stop: "FISAT — Hormis Nagar, Mookkannoor", time: "8:30 AM" },
    ],
    note: "Long-distance trip; confirm seat with the transport desk.",
  },
];

export const libraryData = {
  volumes: "83,650+",
  titles: "26,294",
  journals: "155 print + 5,000+ e-journals",
  digital: "3,000+ DVDs/CD-ROMs",
  services: ["OPAC via FISAT Intranet (search / reserve / status from anywhere)", "DSpace digital archive", "Book Bank Scheme (one standard book per subject per semester)", "Smart-card transactions + reprographic centre", "MBA & MCA reference libraries + department libraries", "E-library remote access / mobile library", "NDLI Club & plagiarism-check support"],
  hours: "8:00 AM – 8:00 PM weekdays • 8:00 AM – 4:30 PM Saturdays • Issue till 7:00 PM weekdays",
  contact: "librarian@fisat.ac.in • 0484-2725216 / 17 / 18",
  location: "Three-storey building, right of the Administrative block",
};

export const placements = {
  headline: "From Campus → Career",
  class2026: { offers: "600+", highest: "17.22 LPA", note: "As on May 2026" },
  history: [
    { year: "2026", offers: "600+ offers", highest: "17.22 LPA", note: "Drive still progressing" },
    { year: "2025", offers: "Strong core + IT", highest: "11 LPA", note: "CS & Design 91.6% placed • core avg 5.2 LPA" },
    { year: "2024", offers: "484 offers • 113 companies", highest: "47.88 LPA", note: "Avg 5.7 LPA • 79 students ≥ 7 LPA" },
    { year: "2023", offers: "741 offers • 120 companies", highest: "17 LPA", note: "Avg 5.18 LPA • 108 students ≥ 7 LPA" },
    { year: "2022", offers: "906 offers • 79 companies", highest: "12.4 LPA (Federal Bank)", note: "Record year" },
  ],
  recruiters: ["TCS", "Infosys", "Cognizant", "Wipro", "Accenture", "IBM", "SAP", "UST Global", "Deloitte", "EY", "KPMG", "LTIMindtree", "Cadence", "Schneider Electric", "Kalkitech", "Federal Bank", "ESAF", "MRF", "Sobha", "Tata Elxsi", "Qburst", "IBS", "SOTI", "Amazon (2024)"],
  cell: "Every student undergoes ~150 hours of placement training plus ~100 hours of soft-skill enhancement. Head: Dr. Bejoy Varghese — placements@fisat.ac.in • +91-94460 29662. MBA (FBS): fbsplacements@fisat.ac.in",
};

export type NewsItem = { id: string; kind: "News" | "Events" | "Achievements"; date: string; title: string; dept: string; };

export const news: NewsItem[] = [
  { id: "n1", kind: "News", date: "29 Sep 2026", title: "Session on France Connect: Pathways to Higher Education, Scholarships & Research", dept: "EEE" },
  { id: "n2", kind: "News", date: "28 Sep 2026", title: "From Design to Simulation: Five-Day Workshop on ANSYS FEA", dept: "ME" },
  { id: "n3", kind: "News", date: "23 Sep 2026", title: "Introductory Session on LinkedIn", dept: "ISTE" },
  { id: "n4", kind: "Events", date: "18 Nov 2026", title: "Call for Papers — 4th Intl. Conference on Sustainable Materials, Manufacturing & Renewable Tech (i-SMaRT 2026)", dept: "ME" },
  { id: "n5", kind: "Events", date: "13 Oct 2026", title: "Skill Development Programme on STM32 Microcontroller", dept: "ECE" },
  { id: "n6", kind: "Events", date: "2026", title: "NEXUS 2026 • Resonance 3.0 Alumni Interaction • Burn-A-Board 24-hr Hackathon", dept: "Campus" },
  { id: "n7", kind: "Achievements", date: "2026", title: "All B.Tech programmes NBA-accredited • NAAC A+ (3.45 CGPA, 2nd cycle)", dept: "Institutional" },
  { id: "n8", kind: "Achievements", date: "Jul 2026", title: "Idea Lab patent • Doctoral distinction • Hall of Fame victories", dept: "Research" },
  { id: "n9", kind: "Achievements", date: "2026", title: "DAWN — Students build Agrobot • FISAT bags first position in Kerala (reported)", dept: "Students" },
];

export const admissions = {
  headline: "Your next chapter starts here.",
  contacts: [
    { label: "B.Tech", value: "+91 7994 864 517 (9 AM – 3:30 PM IST)" },
    { label: "M.Tech", value: "+91 9656 927 612, +91 9645 576 544" },
    { label: "MCA & IMCA", value: "+91 94950 09474, +91 96054 06205" },
    { label: "MBA", value: "+91 96569 68242, +91 94964 19656" },
  ],
  btechFee2026: [
    { cat: "NRI / OCI", total: "Rs. 2,80,986" },
    { cat: "Management (MQ)", total: "Rs. 2,09,223" },
    { cat: "FBOAES", total: "Rs. 1,40,276" },
    { cat: "State Merit / EWS", total: "Rs. 1,39,776" },
    { cat: "TFW", total: "Rs. 69,421" },
    { cat: "SC / ST / OEC", total: "Rs. 25,045" },
  ],
  eligibility: [
    "B.Tech: KEAM + Plus-Two per Govt/KTU norms. Govt & Management quotas; counselling per official schedule.",
    "M.Tech: B.Tech in relevant discipline + GATE / competent-authority entrance per AICTE/KTU rules.",
    "MCA (2-yr): Any graduation (preferably Mathematics at 10+2/graduation) with 50% (45% reserved) + entrance.",
    "MBA: Degree with 50% (60% desirable) + CMAT / CAT / KMAT (Gen 15% / 108/720; SEBC 10%; SC/ST 7.5%) + GD/PI.",
  ],
  ctaNote: "We do not have agents for admission. Apply only via official FISAT portals. Fees subject to Govt/University orders.",
};
