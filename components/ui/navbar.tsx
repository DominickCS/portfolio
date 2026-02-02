'use client'
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export default function NavigationBar() {
  const { theme, setTheme } = useTheme()

  function handleTheme() {
    if (theme === "light" || theme === "system") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <div className="[&>div]:md:py-4 [&>div]:py-2 md:py-8 border-b-2 border-border shadow-lg/30 overflow-hidden sticky top-0 z-1 bg-inherit/20 backdrop-blur-xl backdrop-grayscale md:flex text-center justify-between">
      <div className="mx-8">
        <h1 className="text-blue-500 font-extrabold text-shadow-sm hover:text-blue-400 transition-colors hover:cursor-default">DominickCS_</h1>
      </div>
      <div>
        <nav className="items-center [&>button]:mx-4 [&>a]:md:mx-4 [&>a]:hover:scale-105 [&>a]:hover:tracking-widest [&>a]:hover:text-blue-500 [&>a]:hover:font-extrabold [&>a]:duration-300 md:flex">
          <Switch className="hidden md:block border-foreground/10" onClick={handleTheme} />
          <Link className="mx-2" href={'/home'}>Home</Link>
          <Link className="mx-2" href={'/blog'}>Blog</Link>
          <Link className="mx-2" href={'/resume'}>Resume</Link>
          <Link className="mx-2" href={'/projects'}>Projects</Link>
          <Link className="mx-2" href={'/contact'}>Contact</Link>
        </nav>
      </div>
    </div>
  )
}
