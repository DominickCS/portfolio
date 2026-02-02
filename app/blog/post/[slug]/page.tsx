'use client'
import { FetchPost } from "@/actions/BlogActions"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function BlogPost() {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const postSlug = usePathname().split('/').at(3)

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true)
      const fetchedPost = await FetchPost(postSlug)
      setPost(fetchedPost)
      setLoading(false)
    }
    fetchPost()
  }, [postSlug])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Post not found</div>
      </div>
    )
  }

  return (
    <article className="mx-auto pb-12">
      {post.feature_image && (
        <div className="relative w-full h-150 mb-12 overflow-hidden">
          <Image
            className="hover:grayscale duration-500 object-cover border-b-4 border-border"
            src={post.feature_image}
            fill
            alt={post.feature_image_alt || post.title}
            priority
          />
          {post.feature_image_caption && (
            <div
              className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2 text-center"
              dangerouslySetInnerHTML={{ __html: post.feature_image_caption }}
            />
          )}
        </div>
      )}

      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

        {post.custom_excerpt && (
          <p className="text-xl text-gray-600 mb-6 italic">
            {post.custom_excerpt}
          </p>
        )}

        <div className="flex gap-4 justify-center text-gray-600">
          <time dateTime={post.published_at}>
            {new Date(post.published_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <span>•</span>
          <span>{post.reading_time} min read</span>
        </div>
      </header>

      <div className="
        mx-auto
        max-w-xs
        sm:max-w-3xl
        px-8
        prose dark:prose-invert 
        prose-slate 
        prose-h1:text-6xl
        prose-h2:text-4xl
        prose-h3:text-2xl
        prose-h4:text-lg
        prose-p:text-lg prose-p:leading-10
        prose-li:leading-relaxed prose-li:py-2
        prose-em:italic prose-em:font-semibold prose-em:tracking-tight
        prose-a:hover:text-blue-500
        prose-figure:flex prose-figure:flex-col
        prose-figcaption:text-center
        prose-img:shadow-2xl/30 prose-img:rounded-xl prose-img:my-4 prose-img:hover:scale-95 prose-img:duration-300 prose-img:border-base prose-img:border-4
        prose-strong:font-extrabold
        " dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  )
}
