import { FetchLatestPosts } from "@/actions/BlogActions"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default async function BlogPage() {
  const posts = await FetchLatestPosts()

  console.log(posts)
  if (posts) {
    return (
      <div>
        <div className="mx-auto max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          {posts.map((post) => {
            const publishDate = new Date(post.created_at).toLocaleDateString() + " at " + new Date(post.created_at).toLocaleTimeString();
            return (
              <Link key={post.id} href={`/blog/post/${post.slug}`}>
                <Card className="max-h-svh overflow-clip my-8 shadow-xl/30 shadow-black hover:scale-95 hover:grayscale hover:bg-gray-100 duration-500">
                  <CardHeader>
                    <div className="relative w-full h-60 my-2">
                      <Image
                        className="rounded-lg object-cover"
                        src={post.feature_image}
                        fill
                        alt={post.feature_image_alt}
                      />
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <div>
                      <CardDescription>{publishDate}</CardDescription>
                      <CardDescription className="font-extralight mt-2">{`${post.reading_time} Minute Read`}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
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
