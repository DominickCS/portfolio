'use client'
import { FetchLatestPosts } from "@/actions/BlogActions"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import type { PostsOrPages } from "@tryghost/content-api"
import SearchForm from "@/app/blog/components/SearchForm"

export default function BlogPage() {
  const [posts, setPosts] = useState<PostsOrPages | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAllPosts = async () => {
      const response = await FetchLatestPosts()
      setPosts(response)
    }
    fetchAllPosts()
    setLoading(false)
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl">Loading posts...</h1>
      </div>
    )
  }

  if (posts?.length != 0) {
    return (
      <div className="mx-4 min-h-screen">
        <SearchForm />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mx-auto">
          {posts?.map((post) => {
            return (
              <Link key={post.id} href={`/blog/post/${post.slug}`}>
                <Card className="max-h-96 overflow-y-scroll shadow-2xl/10 shadow-accent-foreground hover:scale-95 hover:bg-accent duration-300">
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
                      <CardDescription className="font-bold tracking-wide rounded-full text-blue-500 flex justify-between">
                        <Link href={`/blog/tag/${post.primary_tag.slug}`}>#{post.primary_tag.name}</Link>
                        {post.reading_time && (
                          <CardDescription>{post.reading_time} min read</CardDescription>
                        )}
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
  }
  if (!loading && posts == null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl">Looks a bit empty right now...</h1>
      </div>
    )
  }
}
