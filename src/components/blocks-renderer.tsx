"use client";
import type {
  ContentQueryQuery,
  PageBlocks,
} from "../../tina/__generated__/types";
import { Content } from "./blocks/content";
import { Features } from "./blocks/features";
import { Hero } from "./blocks/hero";
import HeroPostsList from "./posts/hero_posts";
import { Testimonial } from "./blocks/testimonial";
import { tinaField, useTina } from "tinacms/dist/react";
import { Section } from "./util/section";
import { Container } from "./util/container";
import { TrainTheme } from "./blocks/train_arc";

export const Blocks = ({ query, posts }) => {
  const { data }: { data: ContentQueryQuery } = useTina(query);
  if (!data) return <></>;
  const blocks = data.page.blocks;
  return (
    <>
      {blocks
        ? blocks.map(function (block, i) {
            return block?.__typename === "PageBlocksFeatures" ? (
              <Section key={block?.__typename} className="flex-1">
                <Container size="large">
                  <HeroPostsList data={posts} />
                </Container>
              </Section>
            ) : (
              <div
                key={block?.__typename || i}
                data-tina-field={tinaField(block!)}
              >
                <Block {...block} />
              </div>
            );
          })
        : null}
    </>
  );
};

const Block = (block: PageBlocks) => {
  switch (block.__typename) {
    case "PageBlocksContent":
      return <Content data={block} />;
    case "PageBlocksHero":
      return <Hero data={block} />;
    case "PageBlocksFeatures":
      return <Features data={block} />;
    case "PageBlocksTestimonial":
      return <Testimonial data={block} />;
    case "PageBlocksTrainTheme":
      return <TrainTheme data={block} />;
    default:
      return null;
  }
};
