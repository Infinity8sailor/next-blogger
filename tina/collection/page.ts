import type { Collection } from "tinacms";
import { heroBlockSchema } from "../../src/components/blocks/hero";
import { contentBlockSchema } from "../../src/components/blocks/content";
import { testimonialBlockSchema } from "../../src/components/blocks/testimonial";
import { featureBlockSchema } from "../../src/components/blocks/features";
import { trainThemeBlockSchema } from "../../src/components/blocks/train_arc";

const Page: Collection = {
  label: "Pages",
  name: "page",
  path: "content/pages",
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      if (document._sys.filename === "about") {
        return `/about`;
      }
      return undefined;
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      description:
        "The title of the page. This is used to display the title in the CMS",
      isTitle: true,
      required: true,
    },
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Sections",
      ui: {
        visualSelector: true,
      },
      templates: [
        heroBlockSchema,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        featureBlockSchema,
        contentBlockSchema,
        testimonialBlockSchema,
        trainThemeBlockSchema,
      ],
    },
  ],
};

export default Page;
