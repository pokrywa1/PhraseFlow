import { TbWorld, TbRocket, TbClock, TbPencil, TbTool, TbHeadset } from 'react-icons/tb'
import { IconType } from 'react-icons'
import { Group, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core'

type FeatureItem = {
  title: string
  description: string
  icon: IconType
}

export const whyUsePhraseFlow: FeatureItem[] = [
  {
    title: 'Simple and Intuitive API',
    description:
      'PhraseFlow is designed to be easy to use, with clear and concise endpoints. You don’t need to worry about complex setups—just send a message with a country code, and get a quick, accurate translation in return.',
    icon: TbPencil,
  },
  {
    title: 'Fast and Reliable Translations',
    description:
      'With our optimized backend, you can expect lightning-fast response times, ensuring that your users experience smooth and efficient translations in real-time.',
    icon: TbClock,
  },
  {
    title: 'Support for Multiple Languages',
    description:
      'PhraseFlow supports a wide range of languages across the globe. Whether you need to translate into common languages like Spanish, French, or German, or lesser-known languages, PhraseFlow has you covered.',
    icon: TbWorld,
  },
  {
    title: 'Scalable for Any Application',
    description:
      "Whether you're building a small project or a large-scale application with millions of users, PhraseFlow is built to scale alongside your needs, with robust rate limiting and consistent performance.",
    icon: TbRocket,
  },

  {
    title: 'Comprehensive Documentation',
    description:
      'Our detailed documentation includes everything you need to get started quickly, with examples, error codes, and FAQs to answer any questions you might have during integration.',
    icon: TbTool,
  },
  {
    title: 'Support',
    description:
      'Need help? I am here to assist you. Whether it’s a question about implementation or a more complex issue, I provide timely and helpful support.',
    icon: TbHeadset,
  },
]

export const WhyUs = () => {
  return (
    <Stack>
      <Title order={2}>Why Use PhraseFlow?</Title>

      <SimpleGrid
        cols={{
          base: 1,
          md: 2,
        }}
      >
        {whyUsePhraseFlow.map((feature) => (
          <Feature key={feature.title} {...feature} />
        ))}
      </SimpleGrid>
    </Stack>
  )
}

const Feature = ({ title, description, icon: Icon }: FeatureItem) => {
  return (
    <Group align="start" wrap="nowrap">
      <ThemeIcon size={'xl'} variant="light">
        <Icon size={30} />
      </ThemeIcon>
      <Stack gap={2}>
        <Text fw={600}>{title}</Text>
        <Text c={'dimmed'}>{description}</Text>
      </Stack>
    </Group>
  )
}
