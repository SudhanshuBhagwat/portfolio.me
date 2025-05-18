"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Metadata } from "../app/blog/utils";

interface BlogPostCardProps {
  post: Metadata;
  index: number;
}

export default function BlogPostCard({ post, index }: BlogPostCardProps) {
  return (
    <motion.article
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.id}`} className="block group">
        <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {post.date} • {post.readTime} min read
        </div>
      </Link>
    </motion.article>
  );
}
