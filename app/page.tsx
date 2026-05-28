'use client'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import Link from "next/link"
import Me from "@/public/me.jpg"
import { useState } from "react"
import MessageHandler from "@/actions/MessageHandler"

// ── Data ─────────────────────────────────────────────────────────────────────

const skills = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "TailwindCSS", "Angular"],
  },
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "PostgreSQL", "MariaDB", "Maven"],
  },
  {
    category: "Security",
    items: ["Wazuh SIEM", "MITRE ATT&CK", "Malware Analysis", "Incident Response", "IOC Documentation"],
  },
  {
    category: "DevOps",
    items: ["Docker", "GitHub Actions", "VMware VCD", "Proxmox", "Grafana"],
  },
  {
    category: "Systems",
    items: ["Linux (Gentoo/Ubuntu/Arch)", "Windows Server", "iptables / nftables", "Bash", "Jira"],
  },
  {
    category: "Certifications",
    items: ["B.S. Software Engineering — WGU", "CompTIA Security+ (in progress)", "AWS CCP (in progress)"],
  },
]

const highlights = [
  {
    label: "Wazuh SIEM Deployment",
    detail: "Multi-host agent enrollment · NAT/DNAT resolution · OpenSearch dashboards",
  },
  {
    label: "Dual-Actor IR — SORRY Ransomware + XMR Miner",
    detail: "Pastebin C2 · /proc process hiding · GRUB recovery · Full IOC documentation",
  },
  {
    label: "EtherHiding Malware Analysis",
    detail: "Decoded base64→XOR obfuscation · Polygon C2 contract · SocGholish attribution",
  },

  {
    label: "Valdivia Art — Client E-Commerce",
    detail: "Stripe + Shippo · Spring Boot + React · Docker Compose · CI/CD",
  },
]

// ── Section header ────────────────────────────────────────────────────────────

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-blue-500 uppercase">
        {label}
      </span>
      <div className="flex-1 h-px bg-border/60" />
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const [formData, setFormData] = useState({ subject: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    await MessageHandler(formData.subject, formData.message)
    setFormData({ subject: "", message: "" })
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="max-w-3xl mx-auto space-y-16">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="flex flex-col sm:flex-row gap-8 items-start">
          <div className="relative shrink-0 w-36 h-52 sm:w-44 sm:h-64 rounded-xl overflow-hidden border-2 border-border/60 hover:border-blue-500/50 transition-colors duration-300">
            <Image
              src={Me}
              alt="Dominick Smith"
              fill
              className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          <div className="flex-1 pt-1">
            <p className="font-mono text-xs text-muted-foreground mb-2 tracking-wider">
              // dominickcs.com
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-3">
              Hey, I'm{" "}
              <span className="text-blue-500">Dominick</span>.
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-md">
              Platform engineer and full-stack developer building production-ready software
              and investigating real-world threats. B.S. Software Engineering, 2+ years
              managing enterprise VMware infrastructure, and a genuine curiosity for how
              systems break.
            </p>
            <div className="flex flex-wrap gap-3 font-mono text-xs">
              <Link
                href="/projects"
                className="px-3 py-1.5 rounded border border-blue-500/40 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200"
              >
                projects →
              </Link>
              <Link
                href="/resume"
                className="px-3 py-1.5 rounded border border-border/60 text-muted-foreground hover:border-blue-500/40 hover:text-foreground transition-all duration-200"
              >
                resume →
              </Link>
              <Link
                href="/blog"
                className="px-3 py-1.5 rounded border border-border/60 text-muted-foreground hover:border-blue-500/40 hover:text-foreground transition-all duration-200"
              >
                blog →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Recent Highlights ─────────────────────────────────────────── */}
        <section>
          <SectionHeader label="Recent Work" />
          <div className="space-y-3">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-3 rounded-lg border border-border/40 hover:border-blue-500/30 hover:bg-muted/20 transition-all duration-200 group"
              >
                <span className="font-mono text-[10px] text-muted-foreground/50 pt-0.5 shrink-0 w-5 text-right">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground group-hover:text-blue-400 transition-colors duration-200">
                    {h.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 font-mono">{h.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Skills ────────────────────────────────────────────────────── */}
        <section>
          <SectionHeader label="Skills" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="rounded-lg border border-border/50 bg-muted/20 p-4 hover:border-blue-500/30 transition-colors duration-200"
              >
                <p className="text-[10px] font-mono font-bold text-blue-500 uppercase tracking-widest mb-2">
                  {skill.category}
                </p>
                <ul className="space-y-1">
                  {skill.items.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact ───────────────────────────────────────────────────── */}
        <section>
          <SectionHeader label="Get in Touch" />
          <div className="rounded-lg border border-border/50 p-6">
            <p className="text-sm text-muted-foreground mb-6 font-mono">
              // Available for freelance, full-time SWE/SOC roles, and collaboration.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="subject" className="text-xs font-mono text-muted-foreground mb-1.5 block">
                  subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="font-mono text-sm"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-xs font-mono text-muted-foreground mb-1.5 block">
                  message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Say something..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="font-mono text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 rounded border border-blue-500/50 text-blue-500 font-mono text-sm hover:bg-blue-500 hover:text-white transition-all duration-200 hover:font-bold"
              >
                {sent ? "// message sent ✓" : "send_message()"}
              </button>
            </form>
          </div>
        </section>

      </div>
    </div>
  )
}
