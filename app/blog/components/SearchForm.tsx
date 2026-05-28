'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import SearchIcon from "@/public/search.svg"

export default function SearchForm() {
  const router = useRouter()
  const [searchBox, setSearchBox] = useState({ query: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBox(prev => ({ ...prev, query: e.target.value }))
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchBox.query.trim()) {
      router.push(`/blog/search?query=${encodeURIComponent(searchBox.query)}`)
    }
    else {
      router.push(`/blog`)
    }
    setSearchBox({ query: "" })
  }

  return (
    <div className="max-w-fit mx-auto my-8">
      <form className="flex" onSubmit={handleSearch}>
        <Label htmlFor="search" className="font-light mx-2 dark:invert">
          <Image src={SearchIcon} alt="A magnifying glass" width={28} />
        </Label>
        <Input value={searchBox.query} onChange={handleChange} type="text" name="query" id="query" className="bg-inherit" placeholder="Search for a post..." />
      </form>
    </div>
  )
}
