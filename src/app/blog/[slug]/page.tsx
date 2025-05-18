import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/MDX";
import { getBlogPosts } from "../utils";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlogPostCard from "@/components/BlogPostCard";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let { title, date, excerpt: description } = post.metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      date,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function Blog({ params }: { params: { slug: string } }) {
  const allPosts = getBlogPosts();
  const post = allPosts.find((post) => post.slug === params.slug);
  const relatedPosts = allPosts.filter((currentPost) => {
    return currentPost.metadata.categories.some((category: string) => {
      return (
        post?.metadata?.id !== currentPost.metadata.id &&
        post?.metadata.categories?.includes(category)
      );
    });
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="py-8">
      <head></head>
      <div className="container-custom">
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 mb-8"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to all posts
        </Link>
        <div>
          <div className="mb-8">
            <h1>{post.metadata.title}</h1>
            <div className="text-gray-600 dark:text-gray-400">
              {post.metadata.date} • {post.metadata.readTime} min read
            </div>
          </div>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <article className="prose">
              <CustomMDX source={post.content} />
            </article>
          </div>
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
              <h2>Related Posts</h2>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost, index) => (
                  <BlogPostCard
                    key={relatedPost.metadata.id}
                    post={relatedPost.metadata}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
