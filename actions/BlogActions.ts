'use server'
import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: `${process.env.GHOST_API_URL}`,
  key: `${process.env.GHOST_CONTENT_API_KEY}`,
  version: "v6.0"
});

export async function FetchLatestPosts() {
  try {
    return await api.posts.browse({ limit: 100, include: ["tags", "count.posts"] })
  } catch (error) {
    return error
  }

}

export async function FetchPost(postSlug: string) {
  try {
    return await api.posts.read({
      slug: postSlug,
    })
  } catch (error) {
    return error
  }
}
