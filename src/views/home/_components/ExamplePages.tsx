import { Card, Group, SimpleGrid, Text, ThemeIcon } from '@mantine/core'
import { IconType } from 'react-icons'
import { TbCode, TbPhoneCall, TbQuestionMark, TbSend } from 'react-icons/tb'
import { routes } from '../../../routes/routes'
import { Link } from 'react-router-dom'

const EXAMPLE_PAGES: ExamplePageProps[] = [
  {
    icon: TbSend,
    label: 'Endpoint Overview',
    href: routes['endpoint-overview'],
  },
  {
    label: 'Basic Usage',
    icon: TbCode,
    href: routes['basic-usage'],
  },
  {
    label: 'FAQ',
    icon: TbQuestionMark,
    href: routes['faq'],
  },
  {
    label: 'Contact & Support',
    icon: TbPhoneCall,
    href: routes['contact-us'],
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
const ExamplePage = ({ icon: Icon, label, href }: ExamplePageProps) => {
  return (
    <Link to={href}>
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
    </Link>
  )
}
