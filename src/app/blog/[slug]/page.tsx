import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/MDX";
import { getBlogPosts } from "../utils";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
// import { baseUrl } from "app/sitemap";

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
  // let ogImage = image
  //   ? image
  //   : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      date,
      // url: `${baseUrl}/blog/${post.slug}`,
      // images: [
      //   {
      //     url: ogImage,
      //   },
      // ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      // images: [ogImage],
    },
  };
}

export default function Blog({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.date,
            dateModified: post.metadata.date,
            description: post.metadata.excerpt,
            // image: post.metadata.image
            //   ? `${baseUrl}${post.metadata.image}`
            //   : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            // url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <div className="py-8">
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
          </div>
        </div>
      </div>
    </section>
  );
}
