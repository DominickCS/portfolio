import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Me from "@/public/me.jpg"

export default function Home() {
  return (
    <div className="min-h-screen px-24 pt-8">
      <Card className="shadow-2xl/10 shadow-accent-foreground">
        <CardHeader className="text-center text-blue-500 md:text-4xl text-2xl text-shadow-sm">
          <div className="relative md:h-220 md:w-180 h-110 w-90 sm:w-105 sm:h-130 mx-auto my-2">
            <Image src={Me} className="grayscale duration-300 border-border/70 border-24 rounded-t-full shadow-2xl/5 shadow-accent-foreground" fill objectFit="cover" alt="A photo of me." />
          </div>
          <CardTitle className="leading-relaxed my-8"><span className="mx-2">Hey! 👋</span>I'm <span className="font-extrabold">Dominick</span>! I create unique web experiences using clean <span className="font-light underline italic">AI-FREE</span> code 🚀</CardTitle>
          <CardDescription>
            <h1 className="text-3xl my-12 font-extrabold text-blue-500">Skills</h1>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-8 [&>div]:border-border [&>div]:border-4 [&>div]:hover:shadow-2xl/10 [&>div]:hover:shadow-accent-foreground [&>div]:duration-300">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-500 font-extrabold underline">FRONTEND</CardTitle>
                </CardHeader>
                <CardDescription>
                  <ul className="[&>li]:my-2 text-lg">
                    <li>JavaScript</li>
                    <li>Next.js</li>
                    <li>React</li>
                    <li>Angular</li>
                    <li>TailwindCSS</li>
                  </ul>
                </CardDescription>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-500 font-extrabold underline">BACKEND</CardTitle>
                </CardHeader>
                <CardDescription>
                  <ul className="[&>li]:my-2 text-lg">
                    <li>Java</li>
                    <li>Spring Framework</li>
                    <li>MariaDB</li>
                    <li>PostgreSQL</li>
                    <li>Maven</li>
                  </ul>
                </CardDescription>
              </Card>
              <Card></Card>
              <Card></Card>
            </div>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
