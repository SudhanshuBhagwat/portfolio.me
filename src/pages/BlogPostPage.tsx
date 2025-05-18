"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BlogPostCard from "../components/BlogPostCard";
import { BlogPost, blogPosts } from "../data/blogPosts";

export default function BlogPostPage({ id }: { id: string }) {
  const navigate = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.id === id);
    if (foundPost) {
      setPost(foundPost);
    } else {
      navigate.push("/blog");
    }
  }, [id, navigate]);
  if (!post) {
    return (
      <div className="container-custom py-16">
        <p>Loading post...</p>
      </div>
    );
  }
  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.id !== post.id &&
        p.categories.some((cat) => post.categories.includes(cat))
    )
    .slice(0, 3);
  return (
    <>
      <article className="py-8">
        <div className="container-custom">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 mb-8"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to all posts
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <h1>{post.title}</h1>
              <div className="text-gray-600 dark:text-gray-400">
                {post.date} • {post.readTime} min read
              </div>
            </div>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="lead">{post.excerpt}</p>
              {/* Post content */}
            </div>
          </motion.div>
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
              <h2>Related Posts</h2>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost, index) => (
                  <BlogPostCard
                    key={relatedPost.id}
                    post={relatedPost}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
