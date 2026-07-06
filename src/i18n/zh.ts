export interface SiteContent {
  lang: 'zh-CN' | 'en';
  meta: { title: string; description: string };
  nav: {
    items: { num: string; label: string; href: string }[];
    menu: string;
    close: string;
    themeToggle: string;
    langToggle: { label: string; href: string };
  };
  hero: {
    name: string;
    altName: string;
    tagline: string;
    rotatePrefix: string;
    rotateWords: string[];
    intro: string;
    availability: string;
    buttons: { label: string; href: string; external?: boolean }[];
  };
  trajectory: {
    label: string;
    heading: string;
    bio: string[];
    nodes: { title: string; desc: string }[];
    marquee: string[];
  };
  research: {
    label: string;
    heading: string;
    paperTitle: string;
    facts: string[];
    points: string[];
    diagram: { branches: string[]; unified: string };
    doiNote: string;
  };
  projects: {
    label: string;
    heading: string;
    items: {
      num: string;
      name: string;
      tagline: string;
      abstract: string;
      points: string[];
      flow: string[];
      links: { label: string; href: string }[];
    }[];
  };
  opensource: {
    label: string;
    heading: string;
    items: {
      name: string;
      role: string;
      stars: string;
      desc: string;
      points: string[];
      link: string;
    }[];
  };
  contact: {
    label: string;
    heading: string;
    sub: string;
    links: { label: string; href: string }[];
    copyright: string;
    backToTop: string;
  };
}

export const zh: SiteContent = {
  lang: 'zh-CN',
  meta: {
    title: '陈震烨 / Zhenye Chen — AI Systems · Knowledge Distillation · Agent Infrastructure',
    description:
      '陈震烨的个人主页：关注高效深度学习与知识蒸馏、AI Agent 系统、可交易对象检索与协商协议（OCP），以及企业智能化系统改造。',
  },
  nav: {
    items: [
      { num: '01', label: '主线', href: '#trajectory' },
      { num: '02', label: '研究', href: '#research' },
      { num: '03', label: '项目', href: '#projects' },
      { num: '04', label: '开源', href: '#opensource' },
      { num: '05', label: '联系', href: '#contact' },
    ],
    menu: 'Menu',
    close: 'Close',
    themeToggle: '切换主题',
    langToggle: { label: 'EN', href: '/en/' },
  },
  hero: {
    name: '陈震烨',
    altName: 'Zhenye Chen',
    tagline: 'AI Systems · Knowledge Distillation · Agent Infrastructure',
    rotatePrefix: '我构建',
    rotateWords: ['高效深度学习模型', 'Agent 基础设施', '可交易对象协议', '企业数字员工'],
    intro: '让智能系统从论文走进真实业务流程',
    availability: 'Open to collaboration',
    buttons: [
      { label: 'GitHub', href: 'https://github.com/yuanmao1', external: true },
      { label: 'Email', href: 'mailto:czyklein@outlook.com' },
      { label: '论文', href: '#research' },
    ],
  },
  trajectory: {
    label: '01 / Trajectory',
    heading: '一条主线',
    bio: [
      '我是陈震烨，浙江工业大学软件工程专业学生。我目前主要做两类事情：一是围绕知识蒸馏和模型压缩进行高效深度学习研究，论文已被 Neural Networks 接收；二是构建面向真实业务流程的 AI 系统——从招聘匹配、协同写作，到可交易对象检索与协商协议，再到企业数字员工。',
      '这些工作背后是同一条主线：让 AI 能力以可验证、可审计、可交接的方式，进入真实世界的流程和交易。',
    ],
    nodes: [
      { title: '知识蒸馏', desc: '高效深度学习与模型压缩研究' },
      { title: 'Agent 系统', desc: 'PageFlux、arXtect 等 AI 产品工程' },
      { title: 'OCP 协议', desc: '可交易对象的发现、检索与协商' },
      { title: '企业落地', desc: 'FDE 方法与数字员工部署' },
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
    heading: '研究与论文',
    paperTitle:
      'Unified Knowledge Distillation: Integrating Offline, Online, and Self-Distillation Paradigms for Image Classification',
    facts: ['共同第一作者', 'Neural Networks', 'Accepted · 2026-07-03'],
    points: [
      '围绕图像分类任务，研究离线蒸馏、在线蒸馏与自蒸馏之间的统一建模关系。',
      '参与设计统一知识蒸馏框架，将不同蒸馏范式纳入统一训练与实验流程。',
      '参与模型训练、实验验证、消融分析、结果整理与期刊修改全过程。',
    ],
    diagram: {
      branches: ['Offline KD', 'Online KD', 'Self KD'],
      unified: 'Unified Framework',
    },
    doiNote: 'DOI / ScienceDirect 链接将在正式出版后补充（in press）',
  },
  projects: {
    label: '03 / Projects',
    heading: '系统与项目',
    items: [
      {
        num: '01',
        name: 'OCP',
        tagline: '面向 Agent 的可交易对象目录层',
        abstract:
          'OCP Catalog 是 OCP 体系中商业对象的发现、查询协商、权限化检索与解析层。可交易对象不局限于商品——岗位、简历、本地生活服务、课程、供应链资源都可以被 Agent 发现、比较，并在用户确认后连接到商家真实的交易入口。',
        points: [
          '通用商业对象模型：商品、职位、人才、报价、预约资源统一发现与查询',
          'Catalog 发现与路由：Agent 根据用户意图找到正确的协议入口',
          'Search / Resolve / Action 分层：检索、解析与动作确认边界标准化',
          '字段级权限、来源证明与审计记录，降低越权访问与数据污染风险',
          'CLI、Agent skill 与 Shopify / WooCommerce Provider 已开源发布',
        ],
        flow: ['用户目标', 'Agent', 'OCP Catalog', 'Provider', '确认后动作'],
        links: [
          { label: 'ocp.deeplumen.io', href: 'https://ocp.deeplumen.io' },
          { label: '协议文档', href: 'https://ocp.deeplumen.io/docs' },
        ],
      },
      {
        num: '02',
        name: 'PageFlux',
        tagline: 'AI 学习与招聘平台',
        abstract:
          'PageFlux 把简历、能力画像、成长路线、岗位匹配和 HR 沟通连成一条连续流程：帮助个人规划发展，也帮助企业沉淀人才数据。我参与构建其中的核心 AI 系统能力。',
        points: [
          '简历解析与岗位理解：非结构化文本到结构化画像',
          '候选人能力画像与岗位匹配排序',
          '个性化测评与学习路径生成',
          'HR 决策辅助与多 Agent 任务流程',
        ],
        flow: ['简历', '能力画像', '岗位匹配', '测评 / 学习路径', 'HR 协同'],
        links: [{ label: 'pageflux.ai', href: 'https://www.pageflux.ai' }],
      },
      {
        num: '03',
        name: 'arXtect',
        tagline: 'AI 集成的浏览器本地 LaTeX 编辑器',
        abstract:
          'arXtect 对标 Overleaf，但把 LaTeX 编译器通过 WebAssembly 搬进浏览器本地运行，降低网络波动对写作节奏的影响，并以 Yjs 支撑多人实时协同。我负责部分前端交互与 AI 写作建议功能，并参与后端与构建系统维护。',
        points: [
          'Wasm 浏览器内运行 TeX 引擎，本地编译',
          'Yjs 实时多人协同编辑',
          'AI 写作建议与结构化文档理解',
          'Go / Python / 前端多语言工程，Bazel 统一构建',
        ],
        flow: ['LaTeX 源码', 'Wasm 编译', '本地 PDF', 'Yjs 协同', 'AI 建议'],
        links: [{ label: 'arxtect.cn', href: 'https://www.arxtect.cn' }],
      },
      {
        num: '04',
        name: 'Siliconize',
        tagline: '企业智能化改造与数字员工',
        abstract:
          '我近期以 FDE（前沿部署工程）的方式，把 AI Agent 接入企业真实业务流程：从流程诊断、权限设计到生产上线，让结果可执行、可审计、可接管。数字员工不是聊天机器人，而是有角色、权限、流程、日志和人工确认节点的执行系统。',
        points: [
          'FDE 方法：现场诊断 → 流程拆解 → 权限设计 → 原型 → 生产上线',
          '高影响动作保留人工审批，自动化与风控并存',
          '浏览器操作、任务编排、沙盒权限与日志审计',
          '每次部署沉淀为可复用的工作流、组件与行业经验',
        ],
        flow: ['流程诊断', '权限设计', '原型部署', '生产上线', '持续优化'],
        links: [{ label: 'siliconize.cn', href: 'https://www.siliconize.cn' }],
      },
    ],
  },
  opensource: {
    label: '04 / Open Source',
    heading: '开源贡献',
    items: [
      {
        name: 'nullclaw',
        role: 'Contributor',
        stars: '7.7k+ stars',
        desc: 'Zig 编写的 autonomous AI assistant infrastructure。我提交并合并多个 PR，让它在 Windows 上真正可用。',
        points: [
          'Windows 平台兼容性与本地命令执行稳定性修复',
          'shell 输出编码、路径长度限制、命令流式执行',
          '补充回归测试，以 Zig 构建与测试流程验证修复',
        ],
        link: 'https://github.com/nullclaw/nullclaw',
      },
      {
        name: 'ucp-sdk-java',
        role: 'Author / Maintainer',
        stars: '115+ stars',
        desc: '面向 Universal Commerce Protocol 生态的 Java SDK，封装协议模型、认证与 API 调用流程。',
        points: [
          '根据上游协议 Schema 生成 Java 模型',
          '认证、API 调用与 Provider 接入封装',
          '面向 AI Agent 的商业协议与互操作能力探索',
        ],
        link: 'https://github.com/yuanmao1/ucp-sdk-java',
      },
    ],
  },
  contact: {
    label: '05 / Contact',
    heading: "Let's talk.",
    sub: '合作、研究讨论或任何想法，欢迎联系。',
    links: [
      { label: 'czyklein@outlook.com', href: 'mailto:czyklein@outlook.com' },
      { label: 'github.com/yuanmao1', href: 'https://github.com/yuanmao1' },
      { label: 'ocp.deeplumen.io', href: 'https://ocp.deeplumen.io' },
      { label: 'siliconize.cn', href: 'https://www.siliconize.cn' },
    ],
    copyright: '© 2026 陈震烨 · Built with Astro',
    backToTop: '回到顶部',
  },
};
