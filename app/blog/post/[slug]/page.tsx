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
    <article className="max-w-fit mx-auto px-4 py-12">
      {/* Feature Image */}
      {post.feature_image && (
        <div className="relative w-full h-100 mb-12 rounded-lg overflow-hidden">
          <Image
            className="hover:grayscale duration-500 object-cover"
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

      {/* Title & Meta */}
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

      {/* Blog Content */}
      <div
        className="prose prose-lg prose-gray max-w-none
          prose-headings:font-bold
          prose-h1:text-4xl prose-h1:mb-4
          prose-h2:text-3xl prose-h2:mb-3 prose-h2:mt-8
          prose-h3:text-2xl prose-h3:mb-2 prose-h3:mt-6
          prose-p:mb-6 prose-p:leading-relaxed
          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-l-4 prose-blockquote:border-gray-300 
          prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-700
          prose-strong:font-bold prose-strong:text-gray-900
          prose-em:italic
          prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
          prose-li:mb-3 prose-li:leading-relaxed
          prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8
          prose-figcaption:text-center prose-figcaption:text-sm 
          prose-figcaption:text-gray-600 prose-figcaption:mt-2
          prose-hr:my-12 prose-hr:border-gray-300"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      {/* Author Sign-off - Optional */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-center text-gray-600">
          Written by <span className="font-semibold">Dominick Smith</span>
        </p>
      </footer>
    </article>
  )
}
