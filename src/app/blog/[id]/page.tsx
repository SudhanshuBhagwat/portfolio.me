import { blogPosts } from "@/data/blogPosts";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { default: Post } = await import(`@/content/${id}.mdx`);

  return (
    <div className="container-custom py-8">
      <Post />
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}
