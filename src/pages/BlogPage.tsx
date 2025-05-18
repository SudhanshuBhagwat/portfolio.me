"use client";

import { motion } from "framer-motion";
import BlogPostCard from "../components/BlogPostCard";
import { blogPosts } from "../data/blogPosts";

export default function BlogPage() {
  return (
    <>
      <section className="py-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="p-0 mb-2">Blog</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Thoughts and insights on development, design, and technology.
            </p>
          </motion.div>

          <div className="space-y-4">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
