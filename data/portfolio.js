// All portfolio content lives here. Edit this file to update the site.

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
    "Software Developer with 2+ years building REST APIs, multi-tenant HubSpot CRM integrations, FastAPI data pipelines into S3 and Snowflake, and Claude-powered AI tooling — turning scattered enterprise data into clean, synced, trustworthy records.",
};

export const heroSteps = [
  { n: "01", title: "Understand the data", text: "Map sources, schemas and the parent–child rules behind them." },
  { n: "02", title: "Engineer the pipeline", text: "APIs, queues and workers that sync without losing a record." },
  { n: "03", title: "Make it observable", text: "Retries, audit logs and alerts so failures surface, not hide." },
];

// Scrolling tech strip under the hero.
export const marquee = [
  "HubSpot CRM", "Snowflake", "AWS S3", "FastAPI", "Parquet", "BullMQ", "Redis", "Claude", "MCP",
  "ASP.NET Core", "Node.js", "Next.js", "React", "Python", "C#", "SQL Server", "OpenAI GPT", "SFTP",
];

export const impact = [
  { value: "2+", label: "Years in production", text: "Enterprise backend, integration and data work across two companies" },
  { value: "4", label: "Mapping strategies", text: "In-Memory, SQL, Hybrid and Index-based data mapping framework" },
  { value: "6", label: "Pipeline stages", text: "Ingest → FastAPI → S3 → Snowflake → HubSpot → AI, each decoupled" },
  { value: "30", label: "Automated tests", text: "xUnit suite behind the FinanceDashboard Excel add-in" },
  { value: "92%", label: "Model accuracy", text: "Emotion-recognition chatbot that won SIGFEST’23" },
  { value: "9.29", label: "B.Tech CGPA", text: "Computer Science & Engineering, SRM IST" },
];

export const architecture = [
  {
    n: "01",
    title: "Ingest",
    text: "Collect data from partner SFTP drops, REST APIs, webhooks and SQL Server.",
    tech: "SFTP · FileZilla · Webhooks · SQL Server",
  },
  {
    n: "02",
    title: "Process",
    text: "FastAPI microservices validate, normalize and convert raw files into columnar Parquet.",
    tech: "FastAPI · Pandas · PyArrow · RapidFuzz",
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

export const caseStudies = [
  {
    tag: "Flagship",
    title: "Multi-tenant HubSpot CRM Integration",
    subtitle: "Parent–child objects, per-client token connections",
    problem:
      "Each client runs its own HubSpot portal. Records have parent–child dependencies — a Deal can’t be linked before its Company and Contacts exist.",
    built: [
      "Client-scoped connections: every tenant connects with its own HubSpot private-app / OAuth token, stored encrypted and resolved per request.",
      "Dependency-ordered sync: Company → Contacts → Deals → custom objects, linked through the Associations API with batch upserts.",
      "Per-client BullMQ queues on Redis with exponential backoff for 429 rate limits and idempotent jobs.",
    ],
    impact: "One client’s rate limit or bad record no longer blocks the others, and every child record lands under the right parent.",
    stack: ["HubSpot CRM API", "Associations API", "Node.js", "BullMQ", "Redis", "OAuth / Tokens"],
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
];

export const projects = [
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
      "Developer portfolio on the Next.js App Router — command palette (Ctrl+K), light/dark theme, project filters, scroll animations and a printable resume.",
    outcome: "Statically exported to plain HTML, so it loads fast and deploys free on Netlify.",
    stack: ["Next.js", "React", "CSS", "next/font", "Netlify"],
    link: { label: "GitHub", href: "https://github.com/vivekkumartripathi/PortfolioLatest" },
  },
];

export const capabilities = [
  {
    title: "API & CRM Integration",
    text: "Connecting systems through clean, resilient APIs.",
    items: ["HubSpot CRM", "Parent–Child Objects", "Associations API", "Multi-tenant Tokens", "OAuth", "REST APIs", "Webhooks", "Swagger", "Postman", "HttpClientFactory"],
  },
  {
    title: "Data Engineering & Cloud",
    text: "Moving data from raw files to a queryable warehouse.",
    items: ["Snowflake", "AWS S3", "Parquet", "PyArrow", "boto3", "FastAPI", "Pandas", "SFTP / FileZilla", "SQL Server", "MySQL", "MongoDB"],
  },
  {
    title: "Backend & Architecture",
    text: "Services, queues and storage designed to scale.",
    items: ["System Architecture", "ASP.NET Core", ".NET", "Node.js", "Flask", "BullMQ", "Redis", "Entity Framework", "Dapper", "Quartz.NET", "DSA"],
  },
  {
    title: "AI, LLMs & Agents",
    text: "Putting LLMs to work on real business data.",
    items: ["Claude", "Claude Code", "MCP / FastMCP", "OpenAI GPT", "LangChain", "Hugging Face", "Prompt Engineering", "NLP", "Machine Learning", "TensorFlow", "RapidFuzz"],
  },
  {
    title: "Frontend",
    text: "Interfaces that make data usable.",
    items: ["Next.js", "React.js", "TypeScript", "Angular", "React Native", "Chart.js", "Bootstrap"],
  },
  {
    title: "Languages & Delivery",
    text: "Shipping with review and CI.",
    items: ["C#", "Python", "JavaScript", "C/C++", "SQL", "Git", "Azure DevOps", "CI/CD"],
  },
];

export const experience = [
  {
    role: "Software Developer",
    company: "GlobalData Research Center Pvt Ltd.",
    location: "Hyderabad",
    dates: "Oct 2025 – Present",
    current: true,
    points: [
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
      "Developed enterprise applications with C#, ASP.NET Core, Entity Framework and SQL Server.",
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

export const principles = [
  { title: "Data quality first", text: "A sync is only as good as the record it writes. Normalize before you integrate." },
  { title: "Respect the hierarchy", text: "Parents before children — CRM objects are created in dependency order." },
  { title: "Queue the slow parts", text: "Anything that calls an external API belongs in a job, not a request." },
  { title: "Isolate every tenant", text: "One client’s token, queue and failures never touch another’s." },
  { title: "Pick the right structure", text: "A hash map or a blocking key beats brute force on large data." },
];
