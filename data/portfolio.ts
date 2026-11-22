// All portfolio content lives here. Edit this file to update the site.
// The interfaces below describe each kind of entry, so a typo or missing field is caught at build time.

export interface Link {
  label: string;
  href: string;
}

export interface Step {
  n: string;
  title: string;
  text: string;
}

export interface Stat {
  value: string;
  label: string;
  text: string;
}

export interface ArchitectureStep extends Step {
  tech: string;
}

export interface CaseStudy {
  tag: string;
  title: string;
  subtitle: string;
  problem: string;
  built: string[];
  impact: string;
  stack: string[];
}

export interface Project {
  category: string;
  title: string;
  description: string;
  outcome: string;
  stack: string[];
  link?: Link;
}

export interface Capability {
  title: string;
  text: string;
  items: string[];
  featured?: boolean;
}

export interface Job {
  role: string;
  company: string;
  location: string;
  dates: string;
  current?: boolean;
  points: string[];
}

export interface Principle {
  title: string;
  text: string;
}

export const profile = {
  name: "Vivek Kumar",
  initials: "VK",
  role: "API Integration & HubSpot CRM Engineer",
  company: "GlobalData",
  location: "Hyderabad, India",
  availability: "Open to Remote / Hybrid",
  email: "vivektripaathy@gmail.com",
  phone: "+91 9304270949",
  links: {
    github: "https://github.com/vivekkumartripathi",
    linkedin: "https://www.linkedin.com/in/vivektripathi20/",
    codechef: "https://www.codechef.com/users/vivektripaathy",
    resume: "/resume.html",
  },
  tagline: "API Integration · HubSpot CRM · Data Pipelines · Applied AI",
  headline: ["I connect systems", "so data flows"],
  rotating: ["reliably.", "securely.", "at scale.", "into the CRM."],
  intro:
    "Software Developer with 2+ years building C# / ASP.NET Core Web APIs — the backbone of multi-tenant HubSpot CRM integrations — plus FastAPI data pipelines into S3 and Snowflake and Claude-powered AI tooling, turning scattered enterprise data into clean, synced, trustworthy records.",
};

// Contact form → email via Web3Forms (works on any host).
// Get a free access key at https://web3forms.com using the inbox that should receive messages, then paste it here.
// The key is designed to be public: it only decides which inbox the messages go to.
export const contactForm = {
  endpoint: "https://api.web3forms.com/submit",
  accessKey: "6c3c6127-a47e-440d-8bff-d5d8dbed480c",
};

export const heroSteps: Step[] = [
  { n: "01", title: "Understand the data", text: "Map sources, schemas and the parent–child rules behind them." },
  { n: "02", title: "Engineer the pipeline", text: "APIs, queues and workers that sync without losing a record." },
  { n: "03", title: "Make it observable", text: "Retries, audit logs and alerts so failures surface, not hide." },
];

// Scrolling tech strip under the hero.
export const marquee: string[] = [
  "C#", ".NET", "ASP.NET Core Web API", "Entity Framework", "HubSpot CRM", "Snowflake", "AWS S3", "FastAPI",
  "Parquet", "BullMQ", "Redis", "Claude", "MCP", "Node.js", "Next.js", "React", "Angular", "Python", "SQL Server", "SQLite", "PostgreSQL", "Docker", "OpenAI GPT", "RAG", "SFTP",
  "TensorFlow", "PyTorch", "Keras", "scikit-learn", "OpenCV", "NumPy", "Pandas", "SciPy", "PyArrow", "Matplotlib", "Pillow",
  "Jupyter", "Hugging Face", "LangChain", "Flask", "Spotipy", "tqdm", "Kiwisolver", "Jira", "Sourcetree",
];

export const impact: Stat[] = [
  { value: "30+", label: "APIs integrated to CRM", text: "C# / ASP.NET Core Web APIs and Python FastAPI services that connect source systems to HubSpot CRM" },
  { value: "2+", label: "Years in production", text: "Enterprise backend, integration and data work across two companies" },
  { value: "4", label: "Mapping strategies", text: "In-Memory, SQL, Hybrid and Index-based data mapping framework" },
  { value: "30", label: "Automated tests", text: "xUnit suite behind the FinanceDashboard Excel add-in" },
  { value: "92%", label: "Model accuracy", text: "Emotion-recognition chatbot that won SIGFEST’23" },
  { value: "9.29", label: "B.Tech CGPA", text: "Computer Science & Engineering, SRM IST" },
];

export const architecture: ArchitectureStep[] = [
  {
    n: "01",
    title: "Ingest",
    text: "Collect data from partner SFTP drops, REST APIs, webhooks and SQL Server.",
    tech: "SFTP · FileZilla · Webhooks · SQL Server",
  },
  {
    n: "02",
    title: "Process",
    text: "ASP.NET Core Web APIs and FastAPI microservices validate, normalize and convert raw files into Parquet.",
    tech: "ASP.NET Core · FastAPI · PyArrow · RapidFuzz",
  },
  {
    n: "03",
    title: "Land on S3",
    text: "Write partitioned Parquet into an S3 data lake — raw, clean and curated zones.",
    tech: "AWS S3 · boto3 · Presigned URLs",
  },
  {
    n: "04",
    title: "Warehouse",
    text: "Load curated S3 data into Snowflake through external stages for SQL analytics.",
    tech: "Snowflake · Stages · COPY INTO",
  },
  {
    n: "05",
    title: "Sync to CRM",
    text: "Per-client queues push parent–child objects and associations into each client’s HubSpot.",
    tech: "HubSpot API · BullMQ · Redis · Tokens",
  },
  {
    n: "06",
    title: "AI layer",
    text: "Claude and LLM workflows query the same data through secured MCP tools.",
    tech: "Claude · FastMCP · GPT APIs",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    tag: "Flagship",
    title: "Multi-tenant HubSpot CRM Integration",
    subtitle: "Parent–child objects, per-client token connections",
    problem:
      "Each client runs its own HubSpot portal. Records have parent–child dependencies — a Deal can’t be linked before its Company and Contacts exist.",
    built: [
      "ASP.NET Core Web API layer: every tenant connects with its own HubSpot private-app / OAuth token, stored encrypted and resolved per request.",
      "Dependency-ordered sync: Company → Contacts → Deals → custom objects, linked through the Associations API with batch upserts.",
      "Per-client BullMQ queues on Redis with exponential backoff for 429 rate limits and idempotent jobs.",
    ],
    impact: "One client’s rate limit or bad record no longer blocks the others, and every child record lands under the right parent.",
    stack: ["ASP.NET Core", "C#", "HubSpot CRM API", "Associations API", "BullMQ", "Redis", "OAuth / Tokens"],
  },
  {
    tag: "Data Engineering",
    title: "Parquet Data Lake: S3 → Snowflake",
    subtitle: "Multiple FastAPI services feeding the warehouse",
    problem:
      "Partner data arrived as CSV/JSON files over SFTP and through APIs, in inconsistent formats that were slow to query.",
    built: [
      "Multiple FastAPI microservices — ingest, validate, transform — each with one responsibility.",
      "Converted files to compressed, partitioned Parquet with Pandas/PyArrow and uploaded to S3 with boto3.",
      "Loaded curated S3 data into Snowflake via external stages and COPY INTO; partner files exchanged over SFTP (FileZilla).",
    ],
    impact: "One repeatable path from raw partner file to queryable Snowflake table, with every raw file kept on S3 for replay.",
    stack: ["FastAPI", "Python", "Parquet", "PyArrow", "AWS S3", "Snowflake", "SFTP"],
  },
  {
    tag: "Applied AI",
    title: "Claude + MCP Enterprise AI Layer",
    subtitle: "LLMs that only see what the user may see",
    problem: "Teams wanted to ask Claude about internal data without exposing everything to every user.",
    built: [
      "Custom MCP tools with FastMCP exposing enterprise data and services to Claude.",
      "Token-based authentication and per-user visibility controls on every tool call.",
      "LLM-assisted classification and automated mapping with Claude and GPT APIs and prompt engineering.",
    ],
    impact: "Natural-language access to enterprise data, with access control enforced in the tool layer rather than the prompt.",
    stack: ["Claude", "MCP / FastMCP", "OpenAI GPT", "Python", "Prompt Engineering"],
  },
  {
    tag: "DSA",
    title: "Algorithmic Data Mapping Framework",
    subtitle: "Choosing the right data structure per job",
    problem: "Fuzzy-matching every incoming entity against every master record grows as O(n × m) and stalls on large files.",
    built: [
      "Four pluggable strategies — In-Memory, SQL, Hybrid, Index-based — selected by configuration and data volume.",
      "Hash-map indexes for exact lookups in O(1) and blocking keys (normalized prefixes, country) to shrink fuzzy candidate sets.",
      "Normalization pipeline (Cleanco, PyCountry) before RapidFuzz / Jellyfish scoring.",
    ],
    impact: "Large mapping jobs compare only plausible candidates instead of the whole master list.",
    stack: ["Python", "Hash Maps", "Blocking", "RapidFuzz", "SQL Server", "ASP.NET Core"],
  },
  {
    tag: "Machine Learning",
    title: "Applied ML: Model Selection & Evaluation",
    subtitle: "Battery-life prediction and emotion recognition",
    problem:
      "Predicting Li-ion battery lifecycle from noisy charge/discharge cycles, and recognising facial emotions in real time — both needed the right model, chosen by evidence rather than habit.",
    built: [
      "Compared SVM, Decision Tree and Random Forest models against regression baselines on battery degradation features.",
      "Used K-Means clustering to group cells by degradation pattern, and trained neural networks with gradient descent in TensorFlow / Keras.",
      "Evaluated every model on held-out data with confusion matrices and error metrics, and plotted results with Matplotlib.",
    ],
    impact: "92% accuracy on emotion recognition — 1st place among 40+ teams at SIGFEST’23 — and a clear comparison of classical ML vs neural models for battery-life prediction.",
    stack: ["Python", "scikit-learn", "TensorFlow", "Keras", "OpenCV", "NumPy", "Pandas", "Matplotlib", "Jupyter"],
  },
];

export const projects: Project[] = [
  {
    category: "Engineering",
    title: "FinanceDashboard — Excel Add-in",
    description:
      "C# Excel-DNA add-in that charts bank financials by metric, segment, country and period, with KPI tiles, heatmap and custom worksheet functions.",
    outcome:
      "Calculation core fully separated from Excel and covered by 30 xUnit tests that reproduce every worked example exactly.",
    stack: ["C#", "Excel-DNA", ".NET", "xUnit", "ClosedXML"],
    link: { label: "GitHub", href: "https://github.com/VivekKumartripathi/FinanceDashboard" },
  },
  {
    category: "Integration",
    title: ".NET ↔ Python Service Bridge",
    description:
      "Lets ASP.NET Core applications call Python data-processing logic via compiled executables and REST services.",
    outcome:
      "Resilient external calls with HttpClientFactory and Requests — auth headers, token refresh and retry handling built in.",
    stack: ["ASP.NET Core", "Flask", "FastAPI", "HttpClientFactory"],
  },
  {
    category: "Full-Stack",
    title: "Incident Reporting System",
    description:
      "MERN platform with OTP-verified sign-up, complaint submission, role-based access and dynamic slot booking.",
    outcome: "Deployed and live, with a responsive UI for every role.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
    link: { label: "Live", href: "https://sepm-project.netlify.app/" },
  },
  {
    category: "Machine Learning",
    title: "Emotion-Aware Music Chatbot",
    description: "AI chatbot that detects facial emotion from the camera and recommends songs to match the mood.",
    outcome: "92% accuracy — 1st place among 40+ teams at SIGFEST’23, MUJ ACM.",
    stack: ["Python", "TensorFlow", "Computer Vision", "NLP"],
    link: { label: "GitHub", href: "https://github.com/vivekkumartripathi/Music_Recommendation_System" },
  },
  {
    category: "Research",
    title: "Li-ion Battery Life Prediction",
    description: "Predicts battery lifecycle from charge/discharge degradation data with regression, SVR, ANN and clustering.",
    outcome: "Research-internship models comparing classical ML and neural approaches on cycle data.",
    stack: ["Python", "scikit-learn", "SVR", "ANN", "Jupyter"],
    link: { label: "GitHub", href: "https://github.com/vivekkumartripathi/battery_life_prediction_cycle" },
  },
  {
    category: "Frontend",
    title: "This Portfolio",
    description:
      "Developer portfolio on the Next.js App Router — light/dark theme, project filters, scroll animations and a printable resume.",
    outcome: "Statically exported to plain HTML, so it loads fast and deploys free on Netlify.",
    stack: ["Next.js", "React", "CSS", "next/font", "Netlify"],
    link: { label: "GitHub", href: "https://github.com/VivekKumartripathi/PortfolioLatest" },
  },
];

export const capabilities: Capability[] = [
  {
    title: ".NET & API Engineering",
    text: "My core stack — C# Web APIs that everything else plugs into.",
    items: ["C#", "ASP.NET Core Web API", ".NET", "Entity Framework Core", "Dapper", "LINQ", "REST / OpenAPI", "Middleware & Filters", "JWT / OAuth", "HttpClientFactory", "Background Services", "Quartz.NET", "xUnit"],
    featured: true,
  },
  {
    title: "API & CRM Integration",
    text: "Connecting systems through clean, resilient APIs.",
    items: ["HubSpot CRM", "Parent–Child Objects", "Associations API", "Multi-tenant Tokens", "Batch APIs", "Webhooks", "Rate Limiting", "Swagger", "Postman"],
  },
  {
    title: "Data Engineering & Cloud",
    text: "Moving data from raw files to a queryable warehouse.",
    items: ["Snowflake", "AWS S3", "Parquet", "PyArrow", "boto3", "FastAPI", "Pandas", "SFTP / FileZilla", "SQL Server", "PostgreSQL", "SQLite", "MySQL", "MongoDB"],
  },
  {
    title: "Architecture & Queues",
    text: "Services, queues and storage designed to scale.",
    items: ["System Architecture", "Microservices", "BullMQ", "Redis", "Node.js", "FastAPI", "Flask", "Docker", "DSA"],
  },
  {
    title: "AI, LLMs & Agents",
    text: "Putting LLMs to work on real business data.",
    items: ["Claude", "Claude Code", "MCP / FastMCP", "AI Agents", "RAG", "Vector Embeddings", "OpenAI GPT", "LangChain", "Hugging Face", "Prompt Engineering", "NLP"],
  },
  {
    title: "Machine Learning & Python",
    text: "Classical ML, deep learning and the Python data stack.",
    items: ["SVM", "Decision Trees", "Random Forest", "K-Means", "Gradient Descent", "Confusion Matrix", "Fuzzy Matching", "scikit-learn", "TensorFlow", "PyTorch", "Keras", "OpenCV", "NumPy", "Pandas", "SciPy", "PyArrow", "Matplotlib", "Pillow", "Jupyter", "Spotipy"],
  },
  {
    title: "Frontend & Delivery",
    text: "Interfaces that make data usable, shipped with review and CI.",
    items: ["Next.js", "React.js", "TypeScript", "JavaScript", "Angular", "Python", "SQL", "Git", "GitHub Actions", "Azure DevOps", "CI/CD"],
  },
];

export const experience: Job[] = [
  {
    role: "Software Developer",
    company: "GlobalData Research Center Pvt Ltd.",
    location: "Hyderabad",
    dates: "Oct 2025 – Present",
    current: true,
    points: [
      "Built C# / ASP.NET Core Web APIs as the core integration layer — tenant connections, HubSpot sync orchestration, mapping and data-processing endpoints — using Entity Framework Core and Dapper over SQL Server.",
      "Architected a multi-tenant HubSpot CRM integration where each client connects with its own private-app / OAuth token, stored encrypted and scoped per tenant.",
      "Modelled parent–child CRM hierarchies (Company → Contacts → Deals → custom objects) and synced them in dependency order through HubSpot Objects and Associations APIs with batch upserts.",
      "Designed queue-based sync on BullMQ and Redis — per-client queues, exponential backoff for rate limits and idempotent jobs.",
      "Built multiple FastAPI microservices converting CSV/JSON/SQL data to partitioned Parquet on AWS S3, loaded into Snowflake via external stages and COPY INTO.",
      "Handled partner file exchange over SFTP (FileZilla) and automated pickup into the ingestion pipeline.",
      "Designed a configurable data mapping framework (In-Memory, SQL, Hybrid, Index-based) using hash-map indexes and blocking to cut fuzzy-match comparisons.",
      "Built MCP tools with FastMCP connecting enterprise data to Claude, with token auth and user visibility controls; used Claude and GPT APIs for classification and automated mapping.",
    ],
  },
  {
    role: "Software Developer",
    company: "Audree Infotech Pvt Ltd.",
    location: "Hyderabad",
    dates: "Jul 2024 – Oct 2025",
    points: [
      "Built RESTful ASP.NET Core Web APIs and enterprise applications in C# with Entity Framework and SQL Server for business workflows.",
      "Implemented real-time PDF generation and merging with iTextSharp and Aspose.PDF.",
      "Built a VSTO Microsoft Word add-in with read/write and Track Changes support.",
      "Built Chart.js dashboards and scheduled Excel reports emailed via Quartz.NET.",
      "Implemented logging and audit trails; used Azure DevOps for code reviews and CI/CD pipelines.",
    ],
  },
  {
    role: "Machine Learning Research Intern",
    company: "SRM Institute of Science and Technology",
    location: "Chennai",
    dates: "Aug 2022 – Feb 2023",
    points: [
      "Built ML models for Li-ion battery lifecycle prediction from charge/discharge degradation data, using regression, SVR, ANN and clustering analysis.",
    ],
  },
];

export const recognition = {
  title: "1st Place — SIGFEST’23 AI/ML Competition",
  org: "MUJ ACM, Manipal University Jaipur",
  date: "Mar 2023",
};

export const education = {
  school: "SRM Institute of Science and Technology",
  degree: "B.Tech, Computer Science and Engineering",
  score: "CGPA 9.29 / 10",
  dates: "2020 – 2024",
  location: "Chennai, Tamil Nadu",
};

export const principles: Principle[] = [
  { title: "Data quality first", text: "A sync is only as good as the record it writes. Normalize before you integrate." },
  { title: "Respect the hierarchy", text: "Parents before children — CRM objects are created in dependency order." },
  { title: "Queue the slow parts", text: "Anything that calls an external API belongs in a job, not a request." },
  { title: "Isolate every tenant", text: "One client’s token, queue and failures never touch another’s." },
  { title: "Pick the right structure", text: "A hash map or a blocking key beats brute force on large data." },
];
