import type { Metadata } from "next";
import { notFound } from "next/navigation";
import client from "../../../../tina/__generated__/client";
import { Post } from "@/components/posts/post";

export const revalidate = 10;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const postResult = await client.queries.blogPostQuery({
    relativePath: `${params.slug}.mdx`,
  });

  return {
    title: postResult.data.post.title,
    description: postResult.data.post.excerpt,
  };
}

export async function generateStaticParams() {
  const result = await client.queries.postConnection();

  return result.data.postConnection.edges!.map((edge) => ({
    slug: edge!.node!._sys.filename,
  }));
}

export default async function ServerPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const postResult = await client.queries.post({
      relativePath: `${params.slug}.mdx`,
    });
    return <Post {...postResult.data.post} />;
  } catch (error) {
    return notFound();
    // return <>Error Occured</>;
  }
}
