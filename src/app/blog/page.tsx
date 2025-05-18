import BlogPostCard from "@/components/BlogPostCard";
import { getBlogPosts } from "./utils";

export default function Blog() {
  let allBlogs = getBlogPosts();

  return (
    <section className="py-8">
      <div className="container-custom">
        <div>
          <h1 className="p-0 mb-2">Blog</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Thoughts and insights on development, design, and technology.
          </p>
        </div>

        <div className="space-y-4">
          {allBlogs
            .sort((a, b) => {
              if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
                return -1;
              }
              return 1;
            })
            .map((post, index) => (
              <BlogPostCard
                key={index}
                post={{
                  id: post.metadata.id || "",
                  title: post.metadata.title,
                  excerpt: post.metadata.excerpt || "",
                  date: post.metadata.date,
                  readTime: parseInt(post.metadata.readTime),
                }}
                index={index}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
