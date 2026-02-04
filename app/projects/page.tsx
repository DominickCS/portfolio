import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 pt-4 text-center">
      <Card className="text-blue-500 hover:scale-95 duration-300 shadow-2xl shadow-accent-foreground/20 border-accent border-4">
        <CardHeader>
          <CardTitle className="text-2xl">WeddingInfo</CardTitle>
          <CardDescription>A full-stack RSVP page for my upcoming wedding.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="my-4 border-b-4 pb-4">
            <CardDescription className="underline">Technologies Used</CardDescription>
            <ul>
              <li>Next.js</li>
              <li>MariaDB</li>
              <li>React</li>
            </ul>
          </div>
          <div className="flex flex-col [&>a]:my-1 [&>a]:hover:text-blue-600 [&>a]:hover:font-extrabold [&>a]:duration-300">
            <Link href={'https://rsvp.dominickcs.com'} target="_blank">LIVE DEMO</Link>
            <Link href={'https://www.github.com/DominickCS/weddingInfo'} target="_blank">CODE REPOSITORY</Link>
          </div>
        </CardContent>
      </Card>
      <Card className="text-blue-500 hover:scale-95 duration-300 shadow-2xl shadow-accent-foreground/20 border-accent border-4">
        <CardHeader>
          <CardTitle className="text-2xl">Wellness Tracker</CardTitle>
          <CardDescription>A full-stack health and wellness tracking application.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="my-4 border-b-4 pb-4">
            <CardDescription className="underline">Technologies Used</CardDescription>
            <ul>
              <li>Next.js</li>
              <li>MariaDB</li>
              <li>React</li>
              <li>Spring Boot</li>
              <li>Spring Security</li>
            </ul>
          </div>
          <div className="flex flex-col [&>a]:my-1 [&>a]:hover:text-blue-600 [&>a]:hover:font-extrabold [&>a]:duration-300">
            <Link href={'https://wellnesstracker.dominickcs.com'} target="_blank">LIVE DEMO</Link>
            <Link href={'https://www.github.com/DominickCS/wellnessTracker'} target="_blank">CODE REPOSITORY</Link>
          </div>
        </CardContent>
      </Card>
      <Card className="text-blue-500 hover:scale-95 duration-300 shadow-2xl shadow-accent-foreground/20 border-accent border-4">
        <CardHeader>
          <CardTitle className="text-2xl">BlogCMS</CardTitle>
          <CardDescription className="font-extralight">(IN PROGRESS)</CardDescription>
          <CardDescription>A full-stack blog Content Management System (CMS).</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="my-4 border-b-4 pb-4">
            <CardDescription className="underline">Technologies Used</CardDescription>
            <ul>
              <li>Next.js</li>
              <li>MariaDB</li>
              <li>Spring Boot</li>
              <li>Spring Security</li>
              <li>React</li>
            </ul>
          </div>
          <div className="flex flex-col [&>a]:my-1 [&>a]:hover:text-blue-600 [&>a]:hover:font-extrabold [&>a]:duration-300">
            <Link href={'https://www.github.com/DominickCS/blog'} target="_blank">CODE REPOSITORY</Link>
          </div>
        </CardContent>
      </Card>
      <Card className="text-blue-500 hover:scale-95 duration-300 shadow-2xl shadow-accent-foreground/20 border-accent border-4">
        <CardHeader>
          <CardTitle className="text-xl">Coming Soon...</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            I am consistently striving to create new and useful software!
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}
