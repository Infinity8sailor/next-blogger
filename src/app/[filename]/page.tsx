// "use client";
import { Blocks } from "../../components/blocks-renderer";
import client from "../../../tina/__generated__/client";

export default async function Filename({
  params,
}: {
  params: { filename: string };
}) {
  const { query } = await get_props(params);
  const { content } = await get_posts();
  const posts = content.data.postConnection.edges;

  return <Blocks query={query} posts={posts} />;
}

export const get_props = async (params) => {
  const tinaProps = await client.queries.contentQuery({
    relativePath: `${params.filename}.md`,
  });
  const props = {
    ...tinaProps,
    enableVisualEditing: process.env.VERCEL_ENV === "preview",
  };

  return {
    query: JSON.parse(JSON.stringify(props)) as typeof props,
  };
};

export const get_posts = async () => {
  const tinaProps = await client.queries.pageQuery();
  return {
    content: {
      ...tinaProps,
    },
  };
};

export const getStaticPaths = async () => {
  const pagesListData = await client.queries.pageConnection();
  return {
    paths: pagesListData.data.pageConnection?.edges?.map((page) => ({
      params: { filename: page?.node?._sys.filename },
    })),
    fallback: false,
  };
};
