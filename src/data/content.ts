export const LINKS = {
  email: "nirmalmahendran3003@gmail.com",
  linkedin: "https://www.linkedin.com/in/nirmalkumar-m-bb9931257",
  github: "https://github.com/Nirmalkumar3003",
  resume: "https://drive.google.com/file/d/1NHQhiMC1vtGaMT1-Cmbql4oJGUD-xYwu/view?usp=sharing",
};

/** [use, workflow, related projects] */
export const TECH: Record<string, string[]> = {
"Java":["Core language for OOP, collections and backend logic.","Currently training in Java full stack at JSpiders, building database-driven apps with MySQL.","Java Full Stack internship assignments."],
"C":["Programming fundamentals and problem solving.","Foundation for data structures and algorithms practice.","Coursework."],
"JavaScript":["Interactive UIs and server-side logic.","Runs across React frontends and Node.js backends; JavaScript Fundamentals certified.","PII-Safe Log Analyzer, Learnly-Hub, Tic Tac Toe."],
"HTML / CSS":["Semantic, responsive layouts.","Starting point for every interface.","Learnly-Hub, Tic Tac Toe."],
"React.js":["Component-based frontends.","The client layer that talks to Express APIs.","PII-Safe Log Analyzer, Learnly-Hub."],
"Node.js / Express":["REST APIs and backend services.","Connect the React client to databases and services such as Ollama.","PII-Safe Log Analyzer, Learnly-Hub, MERN internship apps."],
"MySQL / MongoDB":["Relational and document storage.","Chosen by data shape; SQL practised in internship assignments, DBMS certified.","MERN internship apps (MongoDB)."],
"DSA / OOPS / OS":["Core CS concepts behind clean, efficient code.","Data Structures and Algorithms certified; OOPS applied daily in Java.","Coursework."],
"Git / GitHub":["Version control and sharing code.","Every project lives in a repo.","github.com/Nirmalkumar3003"],
"Postman / Eclipse / VS Code":["API testing and everyday IDEs.","Postman for endpoints, Eclipse for Java, VS Code for web work.","—"],
"AI-assisted dev":["Using AI tools such as Google AI Studio to prototype and debug faster.","I read and understand the generated code, logic and architecture before it ships.","PII-Safe Log Analyzer, vibe coding projects."]
};

export interface Project {
  id: string; n: string; cls: string; st: "live" | "todo"; stl: string; t: string; d: string;
  tags: string[]; prob: string; sol: string; stack: string; me: string; dec: string; links: [string, string][];
}

export const PROJECTS: Project[] = [
{id:"A",n:"01",cls:"pA",st:"live",stl:"Built in 3 hours",t:"PII-Safe Log Analyzer",d:"Full-stack log analysis app that masks sensitive data and extracts unique errors for AI-powered debugging with Ollama.",tags:["JavaScript","React.js","Node.js","Express.js","Ollama"],
 prob:"Logs can contain emails, passwords, tokens and card details, and repeated errors add noise, which makes them hard to analyse with AI safely.",sol:"Automatically detects and masks sensitive data, extracts and deduplicates errors, then feeds clean input to Ollama for privacy-aware analysis.",
 stack:"JavaScript, React.js, Node.js, Express.js, Ollama.",me:"Developed the full-stack app during a 3-hour, AI-assisted, open-book placement round and integrated the backend APIs with the React frontend and Ollama.",dec:"Mask emails, passwords, tokens, credit cards and user identifiers before analysis; deduplicate errors so the AI receives cleaner inputs.",links:[["GitHub profile","https://github.com/Nirmalkumar3003"]]},
{id:"B",n:"02",cls:"pB",st:"live",stl:"Built",t:"Learnly-Hub",d:"Online learning platform with interactive modules, real-time discussions and personalised learning paths.",tags:["HTML","CSS","JavaScript","React.js","Node.js","Firebase"],
 prob:"Learners need guided, interactive study with community support.",sol:"A platform combining interactive modules, real-time discussions and personalised learning paths.",
 stack:"HTML, CSS, JavaScript, React.js, Node.js, Firebase.",me:"Built the platform and integrated Firebase for user authentication and data management. Enabled collaboration with 15+ industry experts through community-driven support.",dec:"Firebase for authentication and efficient data management.",links:[["GitHub profile","https://github.com/Nirmalkumar3003"]]},
{id:"C",n:"03",cls:"pC",st:"live",stl:"Live demo",t:"AI-Assisted & Vibe Coding Projects",d:"Multiple applications built with AI coding tools in Google AI Studio, including a neon glassmorphism Tic Tac Toe game.",tags:["Google AI Studio","HTML","CSS","JavaScript"],
 prob:"Turn ideas into working apps quickly without losing track of how they work.",sol:"Rapidly prototyped applications using AI-powered tools, while understanding the underlying code, logic and architecture.",
 stack:"Google AI Studio; Tic Tac Toe uses HTML, CSS, JavaScript.",me:"Directed the builds with AI tools and reviewed the resulting code and structure.",dec:"Use AI for speed, but understand and own the code.",links:[["Live demo","https://ai-projects-five-xi.vercel.app/"],["GitHub profile","https://github.com/Nirmalkumar3003"]]}
]

export interface TimelineItem { label: string; title: string; text?: string; links?: [string, string][] }

export const TIMELINE: TimelineItem[] = [
  { label: "May 2026 — Present", title: "Java Full Stack Intern · JSpiders", text: "Training in full-stack development with Java, MySQL, HTML, CSS and JavaScript. Applying OOPs, collections and SQL to build and debug database-driven applications through hands-on assignments." },
  { label: "Jun 2024 — Nov 2024", title: "MERN Stack Intern · Better Tomorrow", text: "Built web applications with Node.js, React.js, MongoDB and Express.js: an Event Management App, Portfolio Website, Chess Game and Expense Tracker. Applied web fundamentals to build intuitive interfaces and optimise performance." },
  { label: "2024", title: "Runner-up · WIEHACK 5.0", text: "24-hour hackathon conducted by IEEE." },
  { label: "2023", title: "Tirupur Ideathon", text: "Advanced through three rounds among 2000+ participants." },
  { label: "2022 — 2026", title: "B.E. Computer & Communication Engineering", text: "Sri Eshwar College of Engineering · CGPA 7.0. Coursework: Software, Web and Backend Development." },
  { label: "Certifications", title: "DSA · DBMS · JavaScript", links: [
    ["DSA", "https://drive.google.com/file/d/1FpCngcxYRTZwPHLmb852Bb_GlJRZ9iwX/view?usp=sharing"],
    ["DBMS", "https://drive.google.com/file/d/1rWZaPmtQHMK5bHASGZbcCstr4JEaD2v4/view?usp=sharing"],
    ["JavaScript", "https://drive.google.com/file/d/1XRFPMspgmFItKF0K_69v6IrmHmuDmrvj/view?usp=sharing"]] },
];
