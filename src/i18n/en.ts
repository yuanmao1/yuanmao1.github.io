import type { SiteContent } from './zh';

export const en: SiteContent = {
  lang: 'en',
  meta: {
    title: 'Zhenye Chen — AI Systems · Knowledge Distillation · Agent Infrastructure',
    description:
      "Zhenye Chen's homepage: efficient deep learning and knowledge distillation, AI agent systems, tradable-object discovery and negotiation protocols (OCP), and enterprise AI transformation.",
  },
  nav: {
    items: [
      { num: '01', label: 'Trajectory', href: '#trajectory' },
      { num: '02', label: 'Research', href: '#research' },
      { num: '03', label: 'Projects', href: '#projects' },
      { num: '04', label: 'Open Source', href: '#opensource' },
      { num: '05', label: 'Contact', href: '#contact' },
    ],
    menu: 'Menu',
    close: 'Close',
    themeToggle: 'Toggle theme',
    langToggle: { label: '中', href: '/' },
  },
  hero: {
    name: 'Zhenye Chen',
    altName: '陈震烨',
    tagline: 'AI Systems · Knowledge Distillation · Agent Infrastructure',
    rotatePrefix: 'I build',
    rotateWords: [
      'efficient deep learning models',
      'agent infrastructure',
      'tradable-object protocols',
      'enterprise digital employees',
    ],
    intro: 'Taking intelligent systems from papers into real business workflows',
    availability: 'Open to collaboration',
    buttons: [
      { label: 'GitHub', href: 'https://github.com/yuanmao1', external: true },
      { label: 'Email', href: 'mailto:czyklein@outlook.com' },
      { label: 'Paper', href: '#research' },
    ],
  },
  trajectory: {
    label: '01 / Trajectory',
    heading: 'One through-line',
    bio: [
      "I'm Zhenye Chen, a software engineering student at Zhejiang University of Technology. My work falls into two threads: efficient deep learning research around knowledge distillation and model compression — with a paper accepted by Neural Networks — and building AI systems for real business workflows: recruiting and matching, collaborative writing, tradable-object discovery and negotiation protocols, and enterprise digital employees.",
      'Behind all of it is one through-line: making AI capabilities enter real-world workflows and transactions in ways that are verifiable, auditable, and hand-over-able.',
    ],
    nodes: [
      { title: 'Knowledge Distillation', desc: 'Efficient deep learning and model compression research' },
      { title: 'Agent Systems', desc: 'AI product engineering: PageFlux, arXtect' },
      { title: 'OCP Protocol', desc: 'Discovery, retrieval and negotiation of tradable objects' },
      { title: 'Enterprise AI', desc: 'FDE methodology and digital employee deployment' },
    ],
    marquee: [
      'Knowledge Distillation',
      'Model Compression',
      'Agent Infrastructure',
      'Protocol Design',
      'Semantic Retrieval',
      'Forward-Deployed Engineering',
      'Java',
      'Go',
      'Python',
      'Zig',
      'TypeScript',
      'Bazel',
      'LaTeX / Wasm',
    ],
  },
  research: {
    label: '02 / Research',
    heading: 'Research & Publications',
    paperTitle:
      'Unified Knowledge Distillation: Integrating Offline, Online, and Self-Distillation Paradigms for Image Classification',
    facts: ['Co-first author', 'Neural Networks', 'Accepted · 2026-07-03'],
    points: [
      'Studies a unified modeling relationship among offline, online, and self-distillation for image classification.',
      'Co-designed a unified knowledge distillation framework that brings different distillation paradigms into one training and experiment pipeline.',
      'Participated across model training, experimental validation, ablation analysis, result curation, and journal revision.',
    ],
    diagram: {
      branches: ['Offline KD', 'Online KD', 'Self KD'],
      unified: 'Unified Framework',
    },
    doiNote: 'DOI / ScienceDirect link will be added upon formal publication (in press)',
  },
  projects: {
    label: '03 / Projects',
    heading: 'Systems & Projects',
    items: [
      {
        num: '01',
        name: 'OCP',
        tagline: 'An agent-facing catalog layer for tradable objects',
        abstract:
          'OCP Catalog is the discovery, query-negotiation, permissioned-retrieval and resolution layer for commerce objects in the OCP ecosystem. Tradable objects go beyond products — jobs, résumés, local services, courses and supply-chain resources can all be discovered and compared by agents, then continue to merchant-owned execution after user confirmation.',
        points: [
          'A general commerce-object model: products, jobs, talent, quotes and bookings discovered and queried uniformly',
          'Catalog discovery and routing: agents find the right protocol surface for a user intent',
          'Search / Resolve / Action separation: standardized boundaries for retrieval, resolution and confirmed action',
          'Field-level permissions, provenance and audit records against overreach and data pollution',
          'CLI, agent skill, and Shopify / WooCommerce providers published as open source',
        ],
        flow: ['User goal', 'Agent', 'OCP Catalog', 'Provider', 'Confirmed action'],
        links: [
          { label: 'ocp.deeplumen.io', href: 'https://ocp.deeplumen.io' },
          { label: 'Protocol docs', href: 'https://ocp.deeplumen.io/docs' },
        ],
      },
      {
        num: '02',
        name: 'PageFlux',
        tagline: 'An AI learning and recruiting platform',
        abstract:
          'PageFlux connects résumés, capability profiles, growth paths, job matching and HR communication into one continuous workflow — helping individuals plan their growth while helping companies accumulate talent data. I build core AI system capabilities within it.',
        points: [
          'Résumé parsing and job understanding: unstructured text to structured profiles',
          'Candidate capability profiling and match ranking',
          'Personalized assessment and learning-path generation',
          'HR decision support and multi-agent task workflows',
        ],
        flow: ['Résumé', 'Capability profile', 'Job matching', 'Assessment / Learning path', 'HR workflow'],
        links: [{ label: 'pageflux.ai', href: 'https://www.pageflux.ai' }],
      },
      {
        num: '03',
        name: 'arXtect',
        tagline: 'An AI-integrated, in-browser LaTeX editor',
        abstract:
          'arXtect benchmarks against Overleaf, but compiles LaTeX locally in the browser via WebAssembly — insulating the writing flow from network jitter — with Yjs powering real-time collaboration. I worked on frontend interactions and AI writing suggestions, and helped maintain the backend and build system.',
        points: [
          'TeX engine running in-browser via Wasm, compiled locally',
          'Real-time collaborative editing with Yjs',
          'AI writing suggestions and structured document understanding',
          'Go / Python / frontend polyglot engineering, unified with Bazel',
        ],
        flow: ['LaTeX source', 'Wasm compile', 'Local PDF', 'Yjs sync', 'AI suggestions'],
        links: [{ label: 'arxtect.cn', href: 'https://www.arxtect.cn' }],
      },
      {
        num: '04',
        name: 'Siliconize',
        tagline: 'Enterprise AI transformation and digital employees',
        abstract:
          'I currently work forward-deployed (FDE), wiring AI agents into real enterprise workflows: from process diagnosis and permission design to production rollout — with results that are executable, auditable and takeover-able. A digital employee is not a chatbot; it is an execution system with roles, permissions, workflows, logs and human-confirmation checkpoints.',
        points: [
          'FDE method: on-site diagnosis → process decomposition → permission design → prototype → production',
          'High-impact actions keep human approval; automation and risk control coexist',
          'Browser operation, task orchestration, sandboxed permissions and audit logging',
          'Every deployment compounds into reusable workflows, components and domain playbooks',
        ],
        flow: ['Diagnosis', 'Permission design', 'Prototype', 'Production', 'Iteration'],
        links: [{ label: 'siliconize.cn', href: 'https://www.siliconize.cn/en' }],
      },
    ],
  },
  opensource: {
    label: '04 / Open Source',
    heading: 'Open Source',
    items: [
      {
        name: 'nullclaw',
        role: 'Contributor',
        stars: '7.7k+ stars',
        desc: 'Autonomous AI assistant infrastructure written in Zig. I landed multiple PRs that make it genuinely usable on Windows.',
        points: [
          'Windows compatibility and local command execution stability fixes',
          'Shell output encoding, path-length limits, streaming command execution',
          'Regression tests validated through the Zig build and test pipeline',
        ],
        link: 'https://github.com/nullclaw/nullclaw',
      },
      {
        name: 'ucp-sdk-java',
        role: 'Author / Maintainer',
        stars: '115+ stars',
        desc: 'A Java SDK for the Universal Commerce Protocol ecosystem, wrapping protocol models, authentication and API flows.',
        points: [
          'Java models generated from upstream protocol schemas',
          'Authentication, API invocation and provider onboarding wrappers',
          'Exploring agent-facing commerce protocols and interoperability',
        ],
        link: 'https://github.com/yuanmao1/ucp-sdk-java',
      },
    ],
  },
  contact: {
    label: '05 / Contact',
    heading: "Let's talk.",
    sub: 'Collaboration, research discussion, or any idea — reach out.',
    links: [
      { label: 'czyklein@outlook.com', href: 'mailto:czyklein@outlook.com' },
      { label: 'github.com/yuanmao1', href: 'https://github.com/yuanmao1' },
      { label: 'ocp.deeplumen.io', href: 'https://ocp.deeplumen.io' },
      { label: 'siliconize.cn', href: 'https://www.siliconize.cn/en' },
    ],
    copyright: '© 2026 Zhenye Chen · Built with Astro',
    backToTop: 'Back to top',
  },
};
