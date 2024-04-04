import { Container } from "../../components/util/container";
import { Section } from "../../components/util/section";
import { Posts } from "../../components/posts";
import { InferGetStaticPropsType } from "next";
import HeroPostsList from "../../components/posts/hero_posts";
import client from "../../../tina/__generated__/client";
import { get_props } from "../[filename]/page";
import ToggleViewBtn from "@/components/util/toggle_view";

export default async function HomePage() {
  const { props } = await get_posts();

  const posts = props.data.postConnection.edges;

  return (
    <Section className="flex-1">
      <Container size="large">
        <ToggleViewBtn
          child1={<HeroPostsList data={posts!} />}
          child2={<Posts data={posts!} />}
        />
      </Container>
    </Section>
  );
}

export const get_posts = async () => {
  const tinaProps = await client.queries.pageQuery();
  return {
    props: {
      ...tinaProps,
    },
  };
};

export type PostsType = InferGetStaticPropsType<
  typeof get_props
>["data"]["postConnection"]["edges"][number];
