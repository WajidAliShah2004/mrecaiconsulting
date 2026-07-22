import type { Metadata } from 'next';
import { supabase, Blog } from '@/lib/supabase';
import BlogPost from '@/pages/BlogPost';

// Posts are fetched from Supabase at build time (SSG). Publishing a new post
// from /admin requires a rebuild + redeploy for it to appear on the live site.

async function getPost(slug: string): Promise<Blog | null> {
  const { data } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();
  return data ?? null;
}

// Only slugs returned at build time are exported; anything else 404s.
export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const { data, error } = await supabase.from('blogs').select('slug').eq('status', 'published');
    if (error) throw error;
    console.log(`[blog SSG] exporting ${data?.length ?? 0} published post(s)`);
    return (data ?? []).map((post: { slug: string }) => ({ slug: post.slug }));
  } catch (err) {
    console.warn(
      '[blog SSG] could not fetch posts from Supabase at build time — exporting 0 posts. ' +
        `Check NEXT_PUBLIC_SUPABASE_URL/ANON_KEY. (${err instanceof Error ? err.message : String(err)})`
    );
    // Static export requires at least one param; emit a noindexed placeholder.
    return [{ slug: '_' }];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) {
    return { title: { absolute: 'Blog Post Not Found | MRECAI' }, robots: { index: false } };
  }
  const suffixed = `${post.title} | MRE Consulting & Insurance`;
  const title = suffixed.length <= 60 ? suffixed : post.title;
  const description = post.excerpt;
  const canonical = `/blog/${slug}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      siteName: 'MRE Consulting & Insurance',
      images: [post.featured_image || '/og-image.jpg'],
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return <BlogPost initialBlog={post} />;
}
