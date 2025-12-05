import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Card, CardFooter, CardImage, CardText } from "@/components/card";
import type { AlignOptions } from "@/components/card/card-image";

import { TEST_IMAGE } from "../constants";

type Props = React.ComponentProps<typeof Card> & {
  alignHorizontal?: AlignOptions["horizontal"];
  alignVertical?: AlignOptions["vertical"];
};

const meta: Meta<Props> = {
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    aspectRatio: {
      control: {
        type: "select",
        labels: {
          "1/1": "1:1",
          "4/3": "4:3",
          "16/9": "16:9",
          "19/10": "19:10",
          "3/4": "3:4",
          "9/16": "9:16",
        },
      },
      options: ["1/1", "4/3", "16/9", "19/10", "3/4", "9/16"],
    },
    alignHorizontal: {
      control: {
        type: "inline-radio",
      },
      options: ["left", "center", "right"],
      table: {
        category: "image",
      },
    },
    alignVertical: {
      control: {
        type: "inline-radio",
      },
      options: ["top", "center", "bottom"],
      table: {
        category: "image",
      },
    },
    children: {
      description:
        "Allow line breaks with `\\n`, truncate after two lines at footer.",
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ImageCard: Story = {
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
  args: {
    aspectRatio: "16/9",
  },
  render: ({ alignHorizontal, alignVertical, ...args }) => (
    <Card {...args} style={{ maxWidth: "20rem" }}>
      <CardImage
        src={TEST_IMAGE.src}
        alt={TEST_IMAGE.alt}
        align={
          {
            horizontal: alignHorizontal,
            vertical: alignVertical,
          } as AlignOptions
        }
      />
    </Card>
  ),
};

export const ImageCardWithFooter: Story = {
  args: {
    aspectRatio: "16/9",
    children: "Pretty Kame 🐢",
  },
  render: ({ alignHorizontal, alignVertical, children, ...args }) => (
    <Card {...args} style={{ maxWidth: "20rem" }}>
      <CardImage
        src={TEST_IMAGE.src}
        alt={TEST_IMAGE.alt}
        align={
          {
            horizontal: alignHorizontal,
            vertical: alignVertical,
          } as AlignOptions
        }
      />
      <CardFooter>{children}</CardFooter>
    </Card>
  ),
};

export const TextCard: Story = {
  argTypes: {
    alignHorizontal: {
      table: {
        disable: true,
      },
    },
    alignVertical: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    aspectRatio: "19/10",
    children: "呪○廻戦を見たら\n虫歯になっていた件について",
  },
  render: ({ children, ...args }) => (
    <Card {...args} style={{ maxWidth: "20rem" }}>
      <CardText>{children}</CardText>
    </Card>
  ),
};

export const TextCardWithImage: Story = {
  args: {
    aspectRatio: "19/10",
    children: "呪○廻戦を見たら\n虫歯になっていた件について",
  },
  render: ({ children, ...args }) => (
    <Card {...args} style={{ maxWidth: "20rem" }}>
      <CardImage src={TEST_IMAGE.src} alt={TEST_IMAGE.alt} />
      <CardText>{children}</CardText>
    </Card>
  ),
};
