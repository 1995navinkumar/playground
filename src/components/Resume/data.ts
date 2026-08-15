export const data = {
  name: "Navin Kumar C",
  role: "Lead Software Engineer",
  description:
    "A passionate programmer with 9+ years of experience specialising in frontend platform engineering, design systems, and developer experience at scale.",
  contact: {
    email: "1995navinkumar@gmail.com",
    phone: "+91 9443276396",
    linkedin: {
      label: "linkedin.com/in/navin-kumar-chandrasekar",
      href: "https://linkedin.com/in/navin-kumar-chandrasekar/",
    },
    location: "Bangalore, India",
  },
  workExperience: [
    {
      role: "Lead Frontend Engineer",
      company: "Razorpay",
      duration: "09/2024 - Present",
      domain: "Fintech, Neobanking",
      projects: [
        {
          title: "Unified Signup and Login Platform",
          description: `Led the build and rollout of a
            unified login and signup platform, supporting multiple auth flows
            (Google One Tap, email/mobile login, signup, password reset, email
            verification, multi account) and lifting login success from 80% to
            ~89%, while improving signup start‑to‑MID‑creation conversion from
            32.14% to 45.12% (~40% relative increase)`,
        },
        {
          title: "International Payments",
          description: `Created a single click checkout experience
            for international customers by providing a sdk to support Apple Pay
            and Google Pay integration with Razorpay. It improved the SR to 8%
            from normal card payments and it handles almost 15 cr GMV as of
            today.`,
        },
      ],
    },
    {
      role: "Senior Frontend Engineer",
      company: "Razorpay",
      duration: "09/2022 - 09/2024",
      projects: [
        {
          title: "Developer Experience & Docs Platform",
          description: `Improved developer and merchant experience by building a pre‑merge
          broken‑link checker to sharply reduce 404s, fixing cyclic
          redirects to save ~200–300 ms per page load, owning
          dark‑mode rollout (preferred by ~62% of users), and
          implementing a scalable internationalisation framework that
          powers localised Razorpay Docs for India, Malaysia, and
          Singapore.`,
        },
        {
          title: "Standardised Analytics SDK",
          description: `Designed and shipped an org‑wide analytics SDK (RazorAnalytics) that auto‑captures
          user interactions, and cuts per‑team instrumentation effort
          (≈90%), driving faster adoption and consistent product
          analytics with near‑zero integration work.`,
        },
      ],
    },
    {
      role: "Member Of Technical Staff",
      company: "Zoho Corporation",
      duration: "06/2017 - 09/2022",
      projects: [
        {
          title: "Vulnerability Manager Plus",
          description: `Built frontend from scratch for
                enterprise vulnerability scanning product, delivering
                low‑latency UI for reporting and workflows used by 100k+
                endpoints across customers.`,
        },
        {
          title: "Product Design System",
          description: `Authored design system, reusable
                components (tables, dashboards, charts), and frontend
                guidelines that standardised UX patterns, accelerating team
                dev velocity by 30–40% for subsequent features.`,
        },
        {
          title: "Core Framework Contributions",
          description: `Designed Java PDF library
                adopted by 10+ Zoho products and introduced SPA
                optimizations (lazy‑loading, e‑tag caching) that reduced
                initial page loads by 35% and API traffic to DB by 25%.`,
        },
      ],
    },
  ],
  personalProjects: [
    {
      title: "Kacheri",
      duration: "05/2023 - Present",
      description: [
        `WebRTC-based Chrome extension for synchronised music listening
parties`,
        `Captures tab audio, streams across connected peers via custom
Node.js signalling server and deployed co-turn server in cloud VM
for TURN fallback`,
      ],
    },
    {
      title: "Paged HTML",
      duration: "07/2022 - Present",
      description: [
        `Lightweight library to paginate HTML content for print/PDF
generation. Converts dynamic web layouts into print-ready pages with proper margins, headers/footers.`,
        `github.com/1995navinkumar/paged-html.`,
      ],
    },
    {
      title: "Personal Infrastructure",
      duration: "01/2023 - Present",
      description: [
        `Kubernetes manifests and Terraform configs for deploying
infrastructure changes to personal kubernetes cluster. Cluster is present in Digital Ocean VM.`,
        `github.com/1995navinkumar/terraform.`,
      ],
    },
  ],
  skills: [
    "React",
    "Node.js",
    "WebRTC",
    "PWA",
    "Design Patterns",
    "SQL",
    "System Design",
    "Terraform",
    "AWS",
    "Docker and Kubernetes",
    "Grafana Observability Stack",
  ],
  education: [
    {
      institution: "Coimbatore Institute of Technology",
      degree: "Bachelor of Engineering",
      duration: "03/2013 - 03/2017",
      domain: "Electronics and Communication Engineering",
      grade: "CGPA: 8.1/10",
    },
    {
      institution:
        "G. Ramaswamy Naidu Metric Higher Secondary School",
      degree: "Higher Secondary Education",
      domain: "Computer Science",
      duration: "03/2011 - 03/2013",
      grade: "Percentage: 96.3%",
    },
  ],
};
