import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resume"
}

// ── Data ─────────────────────────────────────────────────────────────────────

const skills = {
  "Security & SIEM": [
    "Wazuh 4.x (deploy, enroll, tune, dashboard)",
    "MITRE ATT&CK",
    "Incident triage & IOC documentation",
    "Log analysis & threat investigation",
  ],
  "Networking & Infrastructure": [
    "VMware vSphere / VCD",
    "Proxmox",
    "NAT/DNAT · iptables · nftables",
    "TCP/IP · DNS · Grafana · Zabbix · Docker",
  ],
  "Operating Systems": [
    "Linux — Gentoo, Ubuntu, RHEL/CentOS, Arch",
    "Windows Server",
  ],
  Development: [
    "Java · Spring Boot · TypeScript · React",
    "PostgreSQL · Bash · Git · GitHub Actions",
  ],
  Certifications: [
    "CompTIA Project+",
    "CompTIA Security+ (in progress)",
    "AWS Cloud Practitioner (in progress)",
  ],
}

const experience = [
  {
    company: "Cloudkey",
    location: "Plano, TX",
    title: "Data Center Technician / Platform Associate",
    period: "May 2024 – Present",
    bullets: [
      "Operate and maintain a multi-tenant VMware Cloud Director platform hosting 400+ client VMs across 3 geographically separated data center sites",
      "Deployed and configured Wazuh 4.x SIEM — provisioned the manager VM, enrolled agents across Gentoo, Ubuntu, and Proxmox hosts, resolved NAT/DNAT misconfigurations on a VCD edge gateway",
      "Investigated a suspected process masquerading incident (TSTHEMES.exe → TSTHEME.exe); applied MITRE ATT&CK T1036 to assess scope and document findings",
      "Reduced MTTD on performance anomalies by 10% and MTTR on infrastructure incidents to under 15 minutes via Grafana and Zabbix monitoring; reduced escalation rate 18% through incident runbooks",
      "Configure and maintain firewall rules, network segmentation, and DNAT/SNAT policies on VCD edge gateways for tenant traffic isolation",
    ],
  },
  {
    company: "O'Neil Digital Solutions",
    location: "Plano, TX",
    title: "IT Support Technician",
    period: "Jan 2023 – May 2024",
    bullets: [
      "Resolved hardware, software, and connectivity incidents in an ITIL-aligned environment; maintained SLA compliance across endpoint and network infrastructure tickets",
    ],
  },
]

const projects = [
  {
    title: "Home SOC Lab — Wazuh SIEM",
    tags: ["Wazuh", "VMware", "Proxmox", "Linux"],
    year: "2026 – Present",
    severity: null,
    bullets: [
      "Deployed Wazuh 4.x behind a VMware Cloud Director edge gateway; configured DNAT rules to route agent enrollment traffic (ports 1514/1515) across network boundaries between separate vDCs",
      "Enrolled agents on heterogeneous hosts — Gentoo (compiled from source, resolved CMake 4.x policy break), Ubuntu, and Proxmox bare metal; validated event ingestion and syscollector inventory in OpenSearch Dashboards",
    ],
  },
  {
    title: "Dual-Actor Server Compromise — Incident Response",
    tags: ["Malware Analysis", "Incident Response", "Linux Forensics", "GRUB Recovery"],
    year: "2026",
    severity: "CRITICAL",
    bullets: [
      "Responded to and led full IR on a Linux server compromised by two simultaneous threat actors: Threat Actor Alpha deployed a multi-stage XMR cryptomining backdoor with Pastebin-based C2 for wallet rotation, process hiding via /proc bind mount, and SSH persistence on port 8882",
      "Threat Actor Beta independently deployed SORRY ransomware — appended .sorry extension to files, dropped README.md ransom notes, destroyed backup archives (Dec 2024), and corrupted GRUB config causing boot failure",
      "Recovered the system via Hyper-V console: manual GRUB intervention, initramfs rebuild with LVM support, shadow file root password reset; documented full IOC sets for both actors including XMR wallet, SSH backdoor key, TOX extortion ID, and C2 infrastructure",
    ],
  },
  {
    title: "EtherHiding Malware Analysis",
    tags: ["Threat Intel", "JS Reverse Engineering", "Blockchain C2"],
    year: "2026",
    severity: "HIGH",
    bullets: [
      "Decoded a multi-layer obfuscation chain (base64 → XOR key 121) from a malicious script injected into a compromised website; identified the payload as a BW/EtherHiding injector using a Polygon smart contract (0x994Cb8…) as an immutable C2 channel to evade domain takedown",
      "Attributed to SocGholish/FakeUpdates family; documented full IOC set — contract address, function selector, RC4 API key, and storage identifiers — and mapped 9 attack delivery modes (fake BSOD, Cloudflare, browser update lures)",
    ],
  },
  {
    title: "Art E-Commerce Platform",
    tags: ["Spring Boot", "React/TypeScript", "Stripe", "PostgreSQL", "Docker"],
    year: "2025",
    severity: null,
    bullets: [
      "Built payment and order management system with idempotent Stripe webhook handling and RBAC via Spring Security and JWT; implemented presigned URL pipeline to S3-compatible object storage",
      "Deployed full CI/CD pipeline via GitHub Actions and Docker Compose on a self-hosted runner; maintained secrets management and environment isolation across staging and production",
    ],
  },
]

const education = [
  {
    school: "Western Governors University",
    location: "Remote",
    degree: "B.S. in Software Engineering",
    date: "Graduated January 2026",
  },
  {
    school: "Collin County Community College",
    location: "Plano, TX",
    degree: "A.A.S. in Computer Networking & Telecommunications",
    date: "Graduated May 2023",
  },
]

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <h2 className="text-xs font-mono font-semibold tracking-[0.2em] text-muted-foreground uppercase">
        {children}
      </h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  )
}

const severityStyles: Record<string, string> = {
  CRITICAL: "bg-red-500/10 text-red-400 border border-red-500/30",
  HIGH: "bg-amber-500/10 text-amber-400 border border-amber-500/30",
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ResumePage() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-3xl mx-auto space-y-12">

        {/* Header */}
        <div className="border-l-4 border-blue-500 pl-5">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h1 className="text-3xl font-bold tracking-tight">Dominick Smith</h1>
            <span className="font-mono text-xs text-muted-foreground">
              // SOC Analyst · Platform Engineer · Full-Stack Developer
            </span>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm font-mono text-muted-foreground">
            <Link href="https://linkedin.com/in/dominickcs" target="_blank" className="hover:text-blue-400 transition-colors">linkedin</Link>
            <Link href="https://github.com/DominickCS" target="_blank" className="hover:text-blue-400 transition-colors">github</Link>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Security-minded platform engineer with 2+ years managing enterprise VMware infrastructure across 400+ VMs.
            Hands-on SIEM deployment, real-world malware analysis, and incident response experience.
            B.S. Software Engineering — brings a developer's lens to threat detection and triage.
          </p>
        </div>

        {/* Skills */}
        <section>
          <SectionHeader>Technical Skills</SectionHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-lg border border-border/50 bg-muted/30 p-4 hover:border-blue-500/30 transition-colors duration-200"
              >
                <p className="text-xs font-mono font-semibold text-blue-500 mb-2">{category}</p>
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <SectionHeader>Experience</SectionHeader>
          <div className="space-y-8">
            {experience.map((job) => (
              <div key={job.company}>
                <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                  <div>
                    <h3 className="font-semibold text-base">{job.company}</h3>
                    <p className="text-sm text-blue-500 font-mono">{job.title}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs font-mono text-muted-foreground">{job.location}</p>
                    <p className="text-xs font-mono text-muted-foreground">{job.period}</p>
                  </div>
                </div>
                <ul className="space-y-2 border-l border-border/40 pl-4">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed relative">
                      <span className="absolute -left-4.25 top-1.75 w-1.5 h-1.5 rounded-full bg-blue-500/40" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <SectionHeader>Security & Engineering Projects</SectionHeader>
          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-lg border border-border/50 p-5 hover:border-blue-500/30 transition-colors duration-200"
              >
                <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-sm">{project.title}</h3>
                    {project.severity && (
                      <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full ${severityStyles[project.severity]}`}>
                        {project.severity}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-muted-foreground shrink-0">{project.year}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 border-l border-border/40 pl-4">
                  {project.bullets.map((b, i) => (
                    <li key={i} className="text-xs text-muted-foreground leading-relaxed relative">
                      <span className="absolute -left-4.25 top-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/40" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <SectionHeader>Education</SectionHeader>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.school} className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="font-semibold text-sm">{edu.school}</h3>
                  <p className="text-xs text-blue-500 font-mono">{edu.degree}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs font-mono text-muted-foreground">{edu.location}</p>
                  <p className="text-xs font-mono text-muted-foreground">{edu.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
