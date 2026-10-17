import { isSecurity } from '../lib/content-mode';

// Product engineering leads; applied AI and security support it.

const productMeta = {
  "description": "Mobile, web, and interactive product engineering by Shawn Campbell, with hands-on leadership, platform architecture, applied AI, and application security.",
  "rssDescription": "Product engineering, mobile and web development, interactive prototypes, and AI-assisted development notes."
};

const productHome = {
  "title": "Trust Boundary — Shawn Campbell | Mobile & Product Engineering",
  "description": "Mobile, web, and interactive product engineering by Shawn Campbell, with hands-on leadership, platform architecture, applied AI, and application security.",
  "kickerOps": "Product systems / build and explore",
  "kickerDirect": "Mobile, Web, and Interactive Products",
  "headline": "Thoughtful products.",
  "headlineEmphasis": "Reliable engineering",
  "missionCopy": "I build thoughtful, reliable mobile and interactive products, and help teams deliver them. My background spans engineering leadership, platform architecture, application security, and applied AI.",
  "primaryActionOps": "Explore the build",
  "primaryActionDirect": "Explore product work",
  "secondaryActionOps": "Read field notes",
  "secondaryActionDirect": "Read engineering notes",
  "workHeadingOps": "From idea to working system",
  "workHeadingDirect": "Products, platforms, and the craft of building",
  "workIntro": "Hands-on mobile and web engineering, interactive prototypes, and technical leadership. Applied AI helps me build and investigate; application security informs how I design and verify.",
  "courseId": "interactive-products",
  "courseHeading": "Building interactive experiences with AI-assisted development",
  "courseBody": "My side-project interests include mobile apps, web experiences, and card-game prototypes. Codex and Claude assist development; AI running inside a product is a separate capability that needs its own implementation and validation.",
  "rigorKickerDirect": "Engineering Practice",
  "rigorHeading": "Reliability is part of the experience.",
  "rigorBody": "Clear architecture, testing, production-error investigation, accessibility, and application security support products people can use with confidence. AI-assisted work still needs engineering judgment and verification.",
  "latestHeading": "Project notes and experiments"
};

const productNow = {
  "updated": "October 2026",
  "lines": [
    "Engineering Manager at Brivo, with a hands-on background across mobile, web, cloud, and connected systems.",
    "Using AI-enabled planning, review, development, testing, and verification, including production-error investigation and build/test failure triage.",
    "Exploring mobile, web, and game prototypes. Human playtesting and device validation remain part of the work."
  ]
};

const productSystems = [
  {
    "id": "mobile",
    "opsLabel": "Mobile Products",
    "directLabel": "Mobile Engineering",
    "detail": "Native and cross-platform mobile systems and product delivery.",
    "status": "Experience",
    "href": "#selected-work"
  },
  {
    "id": "interactive",
    "opsLabel": "Interactive Lab",
    "directLabel": "Interactive Products",
    "detail": "Web and game prototypes, interaction, and iteration.",
    "status": "In development",
    "href": "#interactive-products"
  },
  {
    "id": "ai",
    "opsLabel": "AI-Assisted Build",
    "directLabel": "Applied AI",
    "detail": "AI-enabled development with engineering review and verification.",
    "status": "Working method",
    "href": "#interactive-products"
  },
  {
    "id": "rigor",
    "opsLabel": "Systems Rigor",
    "directLabel": "Engineering Leadership",
    "detail": "Architecture, reliability, application security, and team delivery.",
    "status": "Embedded practice",
    "href": "#systems-rigor"
  }
];

const productMissions = [
  {
    "label": "01 / Product",
    "directLabel": "Mobile and Web Engineering",
    "title": "Build the experience and the systems behind it",
    "summary": "Native iOS and Android, React Native, web applications, APIs, and connected-device platforms, with hands-on architecture and delivery experience.",
    "status": "Experience",
    "href": "/resume",
    "tone": "cyan"
  },
  {
    "label": "02 / Interactive",
    "directLabel": "Interactive Prototypes",
    "title": "Explore playful, thoughtful interactions",
    "summary": "Mobile, web, and game prototypes are a space to test ideas and learn. Current game work still needs human playtesting and device validation.",
    "status": "In development",
    "href": "/projects",
    "tone": "amber"
  },
  {
    "label": "03 / Leadership",
    "directLabel": "Engineering Leadership",
    "title": "Help teams turn ideas into reliable products",
    "summary": "Technical direction, mentoring, platform architecture, and delivery practice, supported by application security and AI-enabled development.",
    "status": "Hands-on practice",
    "href": "/about",
    "tone": "green"
  }
];

const productProjects = {
  "title": "Product Engineering & Experiments — Trust Boundary",
  "description": "Mobile, web, and interactive product engineering by Shawn Campbell, with hands-on leadership, platform architecture, applied AI, and application security.",
  "kickerOps": "Shipyard / Product Manifest",
  "kickerDirect": "Product Engineering and Experiments",
  "headingOps": "Products, platforms, and prototypes",
  "headingDirect": "Building mobile, web, and interactive experiences",
  "intro": "My background combines product delivery and platform engineering. The work below distinguishes professional experience, prototype exploration, development methods, and public security research.",
  "areas": [
    {
      "code": "01",
      "opsLabel": "Product Systems",
      "directLabel": "Mobile and Web Product Engineering",
      "status": "Professional experience",
      "summary": "Native iOS and Android, React Native and TypeScript products, GraphQL APIs, cloud services, and connected-device platforms. Experience includes hands-on architecture, technical direction, and engineering team leadership.",
      "evidence": [
        "Swift and Kotlin",
        "React Native and TypeScript",
        "APIs and platforms",
        "Hands-on leadership"
      ]
    },
    {
      "code": "02",
      "opsLabel": "Interactive Lab",
      "directLabel": "Card-Game Prototype",
      "status": "Prototype / validation in progress",
      "summary": "An exploration of interactive card-game design and AI opponent behavior. Human playtesting and device validation remain outstanding. Local AI is an area of exploration, not a verified product capability presented here.",
      "evidence": [
        "Interactive systems",
        "Game rules",
        "Prototype iteration",
        "Human and device validation pending"
      ]
    },
    {
      "code": "03",
      "opsLabel": "AI-Assisted Build",
      "directLabel": "AI-Assisted Development",
      "status": "Development method",
      "summary": "Codex and Claude assist planning and implementation. My AI-enabled workflow includes review, testing, verification, production-error investigation, and build/test failure triage. Development assistance does not establish that a product contains AI.",
      "evidence": [
        "Planning and review",
        "Development and testing",
        "Verification",
        "Failure triage"
      ]
    },
    {
      "code": "04",
      "opsLabel": "Security Practice",
      "directLabel": "Application Security and AI Security Lab",
      "status": "Supporting practice / public research",
      "summary": "Application security, threat modeling, and secure code review inform product decisions. The public OWASP LLM Top 10 lab includes a deterministic RAG demonstration with explicit limits; its results do not measure real-model resistance.",
      "evidence": [
        "Application Security",
        "AI Security Lab",
        "Trust boundaries",
        "Experimental caveats"
      ]
    }
  ],
  "caseStudyNote": "Prototype status is stated explicitly. AI-assisted development and AI inside a product are different claims; working code, human feedback, and device validation matter to both."
};

const productAbout = {
  "lead": "I'm Shawn Campbell. I build thoughtful, reliable mobile and interactive products, and help teams deliver them. I have 25+ years in software engineering, with experience spanning mobile and web products, engineering leadership, platform architecture, application security, and applied AI.",
  "paragraphs": [
    "I enjoy the work where an idea becomes something people can interact with: a mobile app, a web experience, or a game prototype. My professional background includes native and cross-platform mobile development, APIs, cloud services, and connected-device systems, alongside building and leading engineering teams.",
    "Codex and Claude assist my development workflow. I use AI-enabled planning, review, development, testing, and verification, including production-error investigation and build/test failure triage. AI inside a product is a separate design and validation problem; a prototype is not evidence of a shipped capability.",
    "Application security remains part of my engineering practice. Trust boundaries, permissions, secure design, and observable failure modes help me build reliable products. My public security labs and talk deck are supporting work within that broader practice."
  ],
  "direction": "Open to conversations about Staff/Principal mobile and product engineering, plus selected hands-on engineering leadership roles. Remote US."
};

const productResume = {
  "description": "Shawn Campbell: 25+ years in software engineering, with experience in mobile and web products, leadership, platform architecture, applied AI, and application security.",
  "roleLine": "Hands-on mobile and product engineer. Engineering leader.",
  "summary": "I have 25+ years in software engineering, with experience spanning mobile and web products, engineering leadership, platform architecture, application security, and applied AI. I build thoughtful, reliable products and help teams deliver them, combining hands-on engineering, platform architecture, applied AI, and application security.",
  "badges": [
    "Mobile and Web",
    "Product Engineering",
    "Interactive Systems",
    "Engineering Leadership",
    "Applied AI"
  ],
  "telemetry": [
    {
      "term": "Current Role",
      "value": "Engineering Manager at Brivo / hands-on technical leader"
    },
    {
      "term": "Conversations",
      "value": "Staff/Principal mobile and product engineering; selected hands-on leadership roles"
    },
    {
      "term": "Location Preference",
      "value": "Remote US"
    }
  ],
  "capabilitiesHeading": "Product Engineering and Delivery",
  "capabilities": [
    {
      "label": "Mobile and Web Product Engineering",
      "details": "Native iOS and Android, React Native, TypeScript, web applications, and APIs. Hands-on product architecture across Swift, Kotlin, C++, Java, and GraphQL."
    },
    {
      "label": "Platform and Systems Depth",
      "details": "Distributed IoT, smart-access, cloud, and data-pipeline systems across AWS and GCP, built in Swift, Kotlin, C++, TypeScript, Go, Python, Java, and GraphQL."
    },
    {
      "label": "Engineering Leadership",
      "details": "Technical direction, team formation, mentoring, and cross-functional execution across product, mobile, and platform teams. Hands-on engineering remains part of the work."
    },
    {
      "label": "Agentic and AI-Assisted Development",
      "details": "AI-enabled SDLC planning, review, development, testing, and verification; production-error investigation and build/test failure triage, with human engineering judgment guiding decisions."
    },
    {
      "label": "Application Security",
      "details": "Threat modeling, secure code review, application-layer testing, and trust-boundary analysis as part of product architecture and delivery."
    },
    {
      "label": "AI Security Research",
      "details": "A runnable OWASP LLM Top 10 lab: ten vulnerable agents, one per category, with an attacker payload library, an evaluation harness, a spotlighting defense toggle, and a writeup for each. The deterministic RAG lab demonstrates an attack path and a measured defense on synthetic fixtures; it is not a production-model evaluation."
    }
  ]
};

const productBlog = {
  "description": "Engineering notes on mobile, web, interactive products, AI-assisted development, and application security.",
  "intro": "Mobile, web, and game projects are my current focus. Project articles are in draft review. Earlier application-security and AI-lab writing remains available in this archive."
};

// Security positioning uses only existing public work and verified experience.
const securityDescription = 'Application security and AI security research by Shawn Campbell: trust boundaries, secure design, and reproducible lab experiments.';
export const meta = isSecurity ? { description: securityDescription, rssDescription: securityDescription } : productMeta;
export const home = isSecurity ? {
  ...productHome,
  title: 'Trust Boundary — Shawn Campbell | Application & AI Security',
  description: securityDescription,
  kickerOps: 'Security systems / investigate and verify',
  kickerDirect: 'Application and AI Security',
  headline: 'Examine the boundaries.',
  headlineEmphasis: 'Verify the defenses',
  missionCopy: 'I explore application and AI security through trust-boundary analysis, secure design, and reproducible experiments. My engineering background connects security decisions to the systems people build and use.',
  primaryActionOps: 'Explore security work', primaryActionDirect: 'Explore security work',
  secondaryActionOps: 'Read security notes', secondaryActionDirect: 'Read security notes',
  workHeadingOps: 'Investigate, measure, explain', workHeadingDirect: 'Security practice and public research',
  workIntro: 'Threat modeling, secure code review, and controlled experiments make assumptions and failure modes visible.',
  courseId: 'interactive-products',
  courseHeading: 'Exploring the OWASP LLM Top 10',
  courseBody: 'The public AI security lab explores vulnerable agents and defenses using synthetic fixtures. The deterministic RAG demonstration illustrates an attack path; it does not measure production-model resistance.',
  rigorKickerDirect: 'Experimental Limits', rigorHeading: 'Evidence before confidence.',
  rigorBody: 'Keep targets isolated, state assumptions, and distinguish a reproducible demonstration from a production security claim.',
  latestHeading: 'Security research and field notes',
} : productHome;
export const now = isSecurity ? { ...productNow, lines: [productNow.lines[0], 'Exploring application security, trust boundaries, and the OWASP LLM Top 10 through public lab work.', 'Documenting experimental limits and verifying defenses on controlled synthetic fixtures.'] } : productNow;
export const systems = isSecurity ? [
  { id: 'appsec', opsLabel: 'Trust Boundaries', directLabel: 'Application Security', detail: 'Secure design and review.', status: 'Engineering practice', href: '#selected-work' },
  { id: 'lab', opsLabel: 'Agent Lab', directLabel: 'AI Security Lab', detail: 'Controlled experiments.', status: 'Public research', href: '#interactive-products' },
  { id: 'writing', opsLabel: 'Field Notes', directLabel: 'Security Writing', detail: 'Research notes.', status: 'Public archive', href: '/blog' },
  { id: 'rigor', opsLabel: 'Evidence', directLabel: 'Experimental Limits', detail: 'Verification and caveats.', status: 'Measured claims', href: '#systems-rigor' },
] : productSystems;
export const missions = isSecurity ? [
  { label: '01 / Security', directLabel: 'Application Security', title: 'Make trust boundaries explicit', summary: 'Threat modeling, secure code review, and application-layer testing inform architecture and delivery.', status: 'Engineering practice', href: '/resume', tone: 'cyan' },
  { label: '02 / Research', directLabel: 'AI Security Lab', title: 'Investigate agent failure modes', summary: 'An isolated OWASP LLM Top 10 lab with synthetic fixtures, attacker payloads, and explicit experimental limits.', status: 'Public research', href: 'https://github.com/jaegerpicker/trust-boundary/tree/main/lab', tone: 'amber' },
  { label: '03 / Explain', directLabel: 'Talk and Writing', title: 'Share the experiments and their limits', summary: 'Public security articles and the Breaking Agents talk connect demonstrations to practical engineering questions.', status: 'Public material', href: '/talks/summit-owasp-llm-top-10', tone: 'green' },
] : productMissions;
export const projects = isSecurity ? {
  ...productProjects, title: 'Security Practice & Research — Trust Boundary', description: securityDescription,
  kickerOps: 'Security / Research Manifest', kickerDirect: 'Security Practice and Research',
  headingOps: 'Trust boundaries and experiments', headingDirect: 'Application and AI security work',
  intro: 'Public research and engineering practice, with experimental limits stated explicitly.',
  areas: [productProjects.areas[3]],
  caseStudyNote: 'Lab demonstrations use controlled synthetic fixtures. They do not establish production-model resistance or a deployed product capability.',
} : productProjects;
export const about = isSecurity ? {
  ...productAbout,
  lead: "I'm Shawn Campbell. My application security and AI security work draws on 25+ years in software engineering, platform architecture, mobile and web products, and hands-on leadership.",
  paragraphs: [productAbout.paragraphs[2], 'This site collects public security writing, a Breaking Agents talk, and controlled OWASP LLM Top 10 lab experiments. Results are presented with their assumptions and limitations.'],
  direction: 'Interested in conversations about application security, AI security, and reliable engineering. Remote US.',
} : productAbout;
export const resume = isSecurity ? {
  ...productResume, description: securityDescription,
  roleLine: 'Application security practitioner. Hands-on engineering leader.',
  summary: 'I bring 25+ years in software engineering to application security, secure design, and trust-boundary analysis. My background spans mobile and web products, platform architecture, and hands-on leadership. Public AI security lab work explores agent failure modes with explicit experimental limits.',
  badges: ['Application Security', 'AI Security Research', 'Trust Boundaries', 'Engineering Leadership'],
  capabilitiesHeading: 'Security and Engineering Practice',
  capabilities: [...productResume.capabilities.slice(4), ...productResume.capabilities.slice(0, 4)],
  telemetry: productResume.telemetry.map(item => item.term === 'Conversations' ? { ...item, value: 'Application security, AI security, and reliable engineering' } : item),
} : productResume;
export const blog = isSecurity ? { description: securityDescription, intro: 'Application security and AI security research, controlled experiments, and shared engineering notes. Published articles remain available at their original URLs in either content mode.' } : productBlog;
export const professional = isSecurity ? {
  heading: 'Application security and engineering leadership',
  summary: 'Engineering Manager at Brivo, with 25+ years in software engineering. Application security, secure design, and trust-boundary analysis connect my research to hands-on engineering.',
  direction: about.direction,
} : {
  heading: 'Hands-on product engineering and leadership',
  summary: 'Engineering Manager at Brivo. I have 25+ years in software engineering, with experience spanning mobile and web products, engineering leadership, platform architecture, application security, and applied AI.',
  direction: 'Open to conversations about Staff/Principal mobile and product engineering, plus selected hands-on leadership roles. Remote US.',
};
export const navigation = isSecurity ? { projects: 'Security Work', ops: 'Security Lab', blog: 'Security Notes' } : { projects: 'Projects', ops: 'Shipyard', blog: 'Blog' };
