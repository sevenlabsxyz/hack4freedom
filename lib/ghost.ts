const GHOST_URL = process.env.GHOST_URL;
const GHOST_KEY = process.env.GHOST_KEY;

export interface GhostPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  url: string;
  feature_image: string | null;
}

export async function getPostsByTag(tag: string): Promise<GhostPost[]> {
  if (!GHOST_URL || !GHOST_KEY) {
    console.warn("Ghost API credentials not configured");
    return [];
  }

  try {
    const res = await fetch(
      `${GHOST_URL}/ghost/api/content/posts/?key=${GHOST_KEY}&filter=tag:${encodeURIComponent(tag)}&include=tags&fields=id,slug,title,excerpt,url,feature_image`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      console.error("Ghost API error:", res.status);
      return [];
    }

    const data = await res.json();
    return data.posts || [];
  } catch (error) {
    console.error("Failed to fetch Ghost posts:", error);
    return [];
  }
}
