'use server'
import GhostContentAPI, { PostOrPage, PostsOrPages } from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: `${process.env.GHOST_API_URL}`,
  key: `${process.env.GHOST_CONTENT_API_KEY}`,
  version: "v6.0"
});

export async function FetchLatestPosts(): Promise<PostsOrPages | null> {
  try {
    return await api.posts.browse({ limit: 100, include: ["tags"] })
  } catch (error: any) {
    return error
  }
}

export async function FetchPost(postSlug: string): Promise<PostOrPage | null> {
  try {
    return await api.posts.read({
      slug: postSlug,
    })
  } catch (error: any) {
    return error
  }
}

export async function FetchByTag(tag: string): Promise<PostsOrPages | null> {
  try {
    return await api.posts.browse({
      limit: 100,
      include: ["tags"],
      filter: `tag:${tag}`
    })
  } catch (error: any) {
    return error
  }
}

export async function SearchPosts(query: string): Promise<PostsOrPages | null> {
  try {
    return await api.posts.browse({
      limit: 100,
      include: ["tags"],
      filter: `title:~'${query}',tag:'${query}'`
    })
  } catch (error: any) {
    return error
  }
}
