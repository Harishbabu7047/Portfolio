export const projects = [
  {
    id: "rag-construction",
    title: "Construction Knowledge System Using RAG",
    tagline: "AI-Powered Retrieval-Augmented Generation for Construction Technical Documentation",
    technologies: [
      "Python",
      "FastAPI",
      "LiteLLM",
      "FAISS",
      "Sentence Transformers",
      "REST API",
      "Git",
      "GitHub"
    ],
    description: "An AI-powered construction knowledge system that uses Retrieval-Augmented Generation to retrieve relevant information from construction documents and generate context-aware responses.",
    features: [
      "Document processing",
      "Text chunking",
      "Embeddings",
      "Semantic search",
      "FAISS vector search",
      "FastAPI backend",
      "LLM-generated responses",
      "REST API"
    ],
    architectureSteps: [
      { step: "01", title: "Construction Documents", desc: "Raw domain PDF and text specification documents ingested" },
      { step: "02", title: "Document Processing", desc: "Parsing, cleaning, and structure normalization" },
      { step: "03", title: "Text Chunking", desc: "Semantic splitting with overlap to maintain contextual continuity" },
      { step: "04", title: "Sentence Transformers", desc: "Dense vector transformation using pretrained embedding model" },
      { step: "05", title: "Embeddings", desc: "High-dimensional vector representations generated" },
      { step: "06", title: "FAISS Vector Index", desc: "Indexed vector space for high-speed similarity search" },
      { step: "07", title: "Semantic Retrieval", desc: "Top-k nearest neighbor retrieval based on user query" },
      { step: "08", title: "FastAPI Backend", desc: "API orchestration layer injecting retrieved context into prompt" },
      { step: "09", title: "LLM (LiteLLM)", desc: "Language model synthesis grounded in retrieved domain evidence" },
      { step: "10", title: "Context-Aware Answer", desc: "Accurate, referenced response returned to client application" }
    ],
    caseStudy: {
      problem: "Construction documentation, building codes, and engineering specifications are vast, technical, and dense. Finding exact compliance guidelines or technical specifications manually is time-consuming and prone to human oversight.",
      solution: "Engineered a Retrieval-Augmented Generation (RAG) pipeline that ingests domain-specific construction documents, generates vector embeddings, stores them in a FAISS index, and retrieves relevant chunks to ground LLM responses with exact context.",
      implementationOverview: "Built with a Python and FastAPI backend. Documents undergo structured text chunking before sentence transformers compute embeddings stored in FAISS. On receiving a user query via REST API, the system performs semantic search, builds an augmented prompt with retrieved context via LiteLLM, and returns hallucination-resistant answers.",
      keyHighlights: [
        "End-to-end RAG architecture with local vector indexing",
        "Deterministic context injection via FastAPI REST endpoints",
        "Integration with LiteLLM for flexible model access",
        "Semantic similarity search powered by FAISS"
      ]
    },
    githubRepoUrl: "https://github.com/Harishbabu7047"
  },
  {
    id: "social-media-automation",
    title: "Social Media Content Automation Pipeline",
    tagline: "End-to-End AI Content Generation & Telegram Approval Workflow Built on n8n",
    technologies: [
      "n8n",
      "Google Gemini API",
      "Telegram Bot API",
      "Google Sheets API",
      "JavaScript",
      "Webhooks",
      "JSON"
    ],
    description: "An end-to-end AI-powered social media pipeline built on n8n. Send a brief on Telegram, receive AI-generated drafts for LinkedIn, Twitter/X, and Instagram, and approve them directly from Telegram into a Google Sheets publishing calendar.",
    features: [
      "AI content generation with Google Gemini",
      "Mobile control via Telegram Bot webhook",
      "Multi-platform output (LinkedIn, Twitter/X thread, Instagram)",
      "Google Sheets logging & status tracking",
      "Two-way Telegram approval workflow (reply APPROVE)",
      "Publishing calendar automated synchronization",
      "Regex brief parsing & field validation",
      "Custom JSON extraction & markdown fence sanitizer"
    ],
    architectureSteps: [
      { step: "01", title: "Telegram Webhook Trigger", desc: "Listens for incoming messages via Telegram bot webhook" },
      { step: "02", title: "Is Reply Decision Router", desc: "Routes new content briefs to Generation pipeline vs replies to Approval pipeline" },
      { step: "03", title: "Parse & Validate Brief", desc: "Extracts IDEA, AUDIENCE, and TONE via regex; validates required fields" },
      { step: "04", title: "Google Gemini Generation", desc: "Generates platform-optimized structured JSON drafts (LinkedIn, Twitter/X, Instagram)" },
      { step: "05", title: "Prepare & Sanitize Content", desc: "Strips markdown fences, validates JSON structure, and assigns unique draft_id" },
      { step: "06", title: "Save to Sheets (Drafts)", desc: "Logs draft data to Google Sheets with status PENDING" },
      { step: "07", title: "Send Drafts for Review", desc: "Sends formatted review message to Telegram and logs preview_message_id" },
      { step: "08", title: "Parse Approval Reply", desc: "Extracts APPROVE keyword and reply_to_message_id on Telegram" },
      { step: "09", title: "Match Draft in Calendar", desc: "Queries Publishing Calendar sheet and matches draft by preview_message_id" },
      { step: "10", title: "Mark Approved & Confirm", desc: "Updates sheet status to APPROVED and sends instant confirmation to Telegram" }
    ],
    caseStudy: {
      problem: "Creating consistent, platform-tailored social media content across LinkedIn, Twitter/X, and Instagram requires switching between multiple tools, manual drafting, and cumbersome scheduling dashboards.",
      solution: "Engineered an autonomous workflow on n8n combining Google Gemini, Telegram Bot API, and Google Sheets to automate brief ingestion, multi-platform AI copy generation, and phone-based one-tap approval.",
      implementationOverview: "Architected two parallel event-driven pipelines triggered by a single Telegram webhook. The generation pipeline validates user briefs, prompts Google Gemini (models/gemini-3.6-flash) with specialized platform constraints, and logs drafts to Google Sheets. The approval pipeline detects Telegram reply messages, matches the replied message ID in the publishing calendar, updates the status to APPROVED, and returns confirmation.",
      keyHighlights: [
        "Zero-dashboard mobile management controlled entirely via Telegram",
        "Platform-specific prompting generating LinkedIn posts, Twitter threads, and Instagram captions",
        "Deterministic approval linking via Telegram reply message ID matching",
        "Dual Google Sheets integration separating pending staging drafts from approved calendar items"
      ]
    },
    githubRepoUrl: "https://github.com/Harishbabu7047"
  },
  {
    id: "ar-navigation",
    title: "AR-Based Indoor Navigation System",
    tagline: "Assistive Indoor Localization & Augmented Route Guidance for Visually Impaired Users",
    technologies: [
      "ARCore",
      "Wi-Fi RSSI",
      "KNN",
      "Dijkstra",
      "NavMesh",
      "Android",
      "Spatial Audio",
      "Computer Vision"
    ],
    description: "An indoor navigation system designed to assist visually impaired users through Wi-Fi-based localization, real-time AR route guidance, spatial audio, and optimal pathfinding.",
    features: [
      "Wi-Fi RSSI-based localization",
      "KNN algorithm",
      "Real-time AR route guidance",
      "Dijkstra pathfinding",
      "NavMesh",
      "Spatial audio",
      "Computer vision",
      "Accessibility-focused navigation"
    ],
    architectureSteps: [
      { step: "01", title: "Wi-Fi Signal Sampling", desc: "Real-time Wi-Fi RSSI signal collection across indoor access points" },
      { step: "02", title: "KNN Localization", desc: "K-Nearest Neighbors fingerprinting algorithm to estimate user position" },
      { step: "03", title: "Dijkstra & NavMesh", desc: "Shortest optimal route calculation over an indoor navigation mesh" },
      { step: "04", title: "ARCore & Computer Vision", desc: "Augmented Reality tracking and visual space anchoring" },
      { step: "05", title: "Spatial Audio Guidance", desc: "Directional 3D audio cues for hands-free and eyes-free accessibility" }
    ],
    caseStudy: {
      problem: "Traditional GPS fails inside multi-floor buildings due to satellite signal attenuation. Visually impaired individuals face significant accessibility hurdles navigating indoor spaces like campuses or transit hubs safely.",
      solution: "Developed an indoor assistive navigation application combining Wi-Fi RSSI fingerprinting with K-Nearest Neighbors (KNN) for localization, Dijkstra's algorithm over NavMesh for shortest path computation, and ARCore with spatial audio cues for directional guidance.",
      implementationOverview: "Utilized Android platform technologies with ARCore to anchor route markers in 3D physical space, while Wi-Fi signal fingerprinting calculates coordinates. Computed paths translate into spatial audio cues and visual AR overlays designed specifically around accessibility needs.",
      keyHighlights: [
        "GPS-independent indoor localization via Wi-Fi RSSI and KNN",
        "Optimal topological pathfinding using Dijkstra's algorithm and NavMesh",
        "Spatial audio cues coupled with ARCore for accessible navigation",
        "Computer vision integration for obstacle-aware route anchoring"
      ]
    },
    githubRepoUrl: "https://github.com/Harishbabu7047"
  },
  {
    id: "student-tracking",
    title: "Student Achievement Tracking System",
    tagline: "Centralized Academic Performance Management & Faculty Analytics Portal",
    technologies: [
      "Java",
      "MySQL",
      "HTML",
      "CSS"
    ],
    description: "A centralized student performance management system designed to simplify academic tracking, grading analysis, and faculty monitoring.",
    features: [
      "Student performance management",
      "Automated grading analysis",
      "Performance tracking",
      "Faculty dashboard",
      "Centralized academic data"
    ],
    architectureSteps: [
      { step: "01", title: "User Authentication", desc: "Role-based secure access for students, faculty, and administrators" },
      { step: "02", title: "Academic Data Entry", desc: "Centralized input for grades, achievements, and course records" },
      { step: "03", title: "Relational Database (MySQL)", desc: "Normalized schema ensuring relational integrity and consistency" },
      { step: "04", title: "Java Business Logic Layer", desc: "Automated grade calculations, metric aggregation, and rules" },
      { step: "05", title: "Faculty & Student Dashboards", desc: "Intuitive web interface displaying performance breakdowns" }
    ],
    caseStudy: {
      problem: "Academic institutions often maintain fragmented student grade and achievement records across paper files or detached spreadsheets, complicating longitudinal evaluation and timely academic interventions.",
      solution: "Built a centralized student achievement and performance management system powered by Java and MySQL that automates grading calculations and presents actionable dashboards for faculty.",
      implementationOverview: "Designed with an object-oriented Java backend connected via JDBC to a relational MySQL database. Built responsive frontend views using HTML and CSS allowing faculty to monitor academic performance and review aggregated metrics.",
      keyHighlights: [
        "Normalized relational database architecture using MySQL",
        "Automated grade calculation and criteria analysis logic in Java",
        "Dedicated faculty dashboard for tracking individual and batch progress",
        "Clean, structured academic data storage and retrieval"
      ]
    },
    githubRepoUrl: "https://github.com/Harishbabu7047"
  }
];
