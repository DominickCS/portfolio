import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const projects = [
  {
    title: "Valdivia Art",
    description: "A full-stack art e-commerce platform for a paid client.",
    status: "IN-PROGRESS",
    tech: ["Spring Boot", "React", "TypeScript", "Stripe", "Shippo", "PostgreSQL", "Garage S3"],
    demo: "http://art.dominickcs.com:5173",
    repo: "https://github.com/DominickCS/valdivia-art",
  },
  {
    title: "Y2KDOM BEATS",
    description: "A personal music production storefront with audio preview, presigned S3 delivery, and role-based admin.",
    status: "LIVE",
    tech: ["Spring Boot", "React", "Vite", "Tailwind", "PostgreSQL", "Cloudflare R2"],
    demo: "https://beatstore.dominickcs.com",
    repo: "https://github.com/DominickCS/beatstore",
  },
  {
    title: "Job Scheduler System",
    description: "A Spring Boot job scheduling system with JPA persistence and full JUnit test coverage.",
    status: null,
    tech: ["Spring Boot", "JPA", "JUnit", "PostgreSQL"],
    demo: null,
    repo: "https://github.com/DominickCS/job-scheduler",
  },
  {
    title: "WeddingInfo",
    description: "A full-stack RSVP page built for my upcoming wedding.",
    status: "LIVE",
    tech: ["Next.js", "React", "MariaDB"],
    demo: null,
    repo: "https://github.com/DominickCS/weddingInfo",
  },
]

const statusStyles: Record<string, string> = {
  "LIVE": "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
  "IN-PROGRESS": "bg-amber-500/10 text-amber-400 border border-amber-500/30",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-4 py-10">
      <div className="max-w-4xl mx-auto">

        <div className="mb-10 border-l-4 border-blue-500 pl-4">
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground text-sm mt-1 font-mono">
            // full-stack · backend · infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group relative flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 border border-border/60 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 bg-card"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <CardTitle className="text-lg font-semibold leading-tight group-hover:text-blue-500 transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                  {project.status && (
                    <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full shrink-0 ${statusStyles[project.status] ?? "bg-muted text-muted-foreground"}`}>
                      {project.status}
                    </span>
                  )}
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs font-mono border-t border-border/40 pt-4">
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="flex items-center gap-1.5 text-blue-500 hover:text-blue-400 transition-colors duration-150"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      LIVE DEMO
                    </Link>
                  )}
                  {project.repo && (
                    <Link
                      href={project.repo}
                      target="_blank"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-150"
                    >
                      SOURCE →
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
