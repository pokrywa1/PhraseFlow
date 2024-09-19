import { Card, Group, SimpleGrid, Text, ThemeIcon } from '@mantine/core'
import { IconType } from 'react-icons'
import { TbCode, TbPhoneCall, TbQuestionMark, TbSend } from 'react-icons/tb'

const EXAMPLE_PAGES: ExamplePageProps[] = [
  {
    icon: TbSend,
    label: 'Making Requests',
    href: '/making-requests',
  },
  {
    label: 'Examples',
    icon: TbCode,
    href: '/examples',
  },
  {
    label: 'FAQ',
    icon: TbQuestionMark,
    href: '/faq',
  },
  {
    label: 'Contact & Support',
    icon: TbPhoneCall,
    href: '/contact-support',
  },
]

export const ExamplePages = () => {
  return (
    <SimpleGrid
      mt={30}
      cols={{
        base: 1,
        sm: 2,
      }}
    >
      {EXAMPLE_PAGES.map((page) => (
        <ExamplePage key={page.label} {...page} />
      ))}
    </SimpleGrid>
  )
}

type ExamplePageProps = {
  label: string
  icon: IconType
  href: string
}
const ExamplePage = ({ icon: Icon, label }: ExamplePageProps) => {
  return (
    <Card
      withBorder
      radius={'md'}
      style={{
        cursor: 'pointer',
      }}
    >
      <Group>
        <ThemeIcon variant="transparent">
          <Icon size={20} />
        </ThemeIcon>
        <Text fw={500}>{label}</Text>
      </Group>
    </Card>
  )
}
