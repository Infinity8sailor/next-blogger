import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import { PageBlocksTrainTheme } from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const TrainTheme = ({ data }: { data: PageBlocksTrainTheme }) => {
  return (
    <Section color={data.color || ""}>
      <Container
        className={`prose prose-lg ${
          data.color === "primary" ? `prose-primary` : `dark:prose-dark`
        }`}
        data-tina-field={tinaField(data, "body")}
        size="large"
        width="medium"
      >
        <TinaMarkdown content={data.body} />
      </Container>
    </Section>
  );
};

export const trainThemeBlockSchema: TinaTemplate = {
  name: "trainTheme",
  label: "Train Theme",
  ui: {
    previewSrc: "/blocks/content.png",
    defaultItem: {
      body: "testing theme Item",
    },
  },
  fields: [
    {
      type: "rich-text",
      label: "Body",
      name: "body",
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};
