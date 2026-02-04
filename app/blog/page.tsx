import { FetchLatestPosts } from "@/actions/BlogActions"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import SearchIcon from "@/public/search.svg"
import Image from "next/image"
import Link from "next/link"

export default async function BlogPage() {
  const posts = await FetchLatestPosts()

  if (posts) {
    return (
      <div className="mx-4 min-h-screen">
        <div className="max-w-fit mx-auto my-8">
          <form className="flex">
            <Label htmlFor="search" className="font-light mx-2 dark:invert">
              <Image src={SearchIcon} alt="A magnifying glass" width={28} />
            </Label>
            <Input type="text" name="search" id="search" className="bg-inherit" placeholder="Search posts, and tags" />
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mx-auto">
          {posts.map((post) => {
            return (
              <Link key={post.id} href={`/blog/post/${post.slug}`}>
                <Card className="max-h-96 overflow-y-scroll shadow-2xl/20 shadow-accent-foreground hover:scale-95 hover:bg-accent duration-300">
                  <CardHeader>
                    {post.feature_image && (
                      <div className="relative w-full h-60 my-2">
                        <Image
                          className="rounded-lg object-cover"
                          src={post.feature_image}
                          fill
                          alt={post.feature_image_alt || ''}
                        />
                      </div>
                    )}
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    {post.primary_tag && (
                      <CardDescription className="font-bold tracking-wide rounded-full text-blue-500">
                        #{post.primary_tag.name}
                      </CardDescription>
                    )}
                    <div className="flex gap-4 justify-between font-extralight">
                      {post.published_at && (
                        <CardDescription>
                          {new Date(post.published_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </CardDescription>
                      )}
                      {post.reading_time && (
                        <CardDescription>{post.reading_time} min read</CardDescription>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="whitespace-pre-wrap my-4 font-light italic">
                    {post.excerpt}...
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Blog Page - No Posts...</h1>
      </div>
    )
  }
}
