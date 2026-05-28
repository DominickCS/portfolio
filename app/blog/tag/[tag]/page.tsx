import Link from "next/link"
import SearchForm from "../../components/SearchForm"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { FetchByTag } from "@/actions/BlogActions"

export default async function TagPage({
  params
}: {
  params: Promise<{ tag: string }>
}) {
  const { tag } = await params
  const results = await FetchByTag(tag)

  return (
    <div className="mx-4 min-h-screen">
      <SearchForm />
      <div className="my-4">
        <p>{results?.length} {results?.length == 1 ? "Post" : "Posts"} found under #{tag}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mx-auto">
        {results?.map((post) => {
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
                    <CardDescription className="font-bold tracking-wide rounded-full text-blue-500">
                      #<Link href={`/blog/tag/${post.primary_tag.slug}`}>{post.primary_tag.name}</Link>
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
    </div >
  )
}
