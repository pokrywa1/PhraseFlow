import { Grid, Stack, Text, ThemeIcon } from '@mantine/core'
import * as classes from './Sidebar.css'
import { TbAlertCircle, TbBook, TbCode, TbPhoneCall, TbQuestionMark, TbSend } from 'react-icons/tb'
import { IconType } from 'react-icons'

type TSidebarTitle = {
  icon: IconType
  label: string
  type: 'title'
}

type TSidebarLink = {
  type: 'link'
  label: string
  href: string
}

type TSidebarItem = TSidebarTitle | TSidebarLink

const sidebarItems: TSidebarItem[] = [
  {
    type: 'title',
    icon: TbBook,
    label: 'Getting Started',
  },
  {
    type: 'link',
    label: 'Introduction',
    href: '/introduction',
  },
  {
    type: 'link',
    label: 'Authentication',
    href: '/authentication',
  },
  {
    type: 'link',
    label: 'Rate Limiting',
    href: '/rate-limiting',
  },
  {
    type: 'title',
    icon: TbSend,
    label: 'Making Requests',
  },
  {
    type: 'link',
    label: 'Endpoints Overview',
    href: '/endpoints-overview',
  },
  {
    type: 'link',
    label: 'Request Parameters',
    href: '/request-parameters',
  },
  {
    type: 'link',
    label: 'Response Structure',
    href: '/response-structure',
  },
  {
    type: 'title',
    label: 'Error Handling',
    icon: TbAlertCircle,
  },
  {
    type: 'link',
    label: 'Error Codes',
    href: '/error-codes',
  },
  {
    type: 'link',
    label: 'Common Issues',
    href: '/common-issues',
  },
  {
    type: 'title',
    label: 'Examples',
    icon: TbCode,
  },
  {
    type: 'link',
    label: 'Basic Usage',
    href: '/basic-usage',
  },
  {
    type: 'link',
    label: 'Code Samples',
    href: '/code-samples',
  },
  {
    type: 'title',
    label: 'FAQ',
    icon: TbQuestionMark,
  },
  {
    type: 'link',
    label: 'Frequently Asked Questions',
    href: '/faq',
  },
  {
    type: 'title',
    label: 'Contact & Support',
    icon: TbPhoneCall,
  },
  {
    type: 'link',
    label: 'Contact Us',
    href: '/contact',
  },
  {
    type: 'link',
    label: 'API Status',
    href: '/status',
  },
]

export const Sidebar = () => {
  return (
    <nav className={classes.sidebar}>
      <Stack gap={0} p={'xs'}>
        {sidebarItems.map((item, index) => {
          return (
            <Grid
              py={6}
              className={classes.sidebarLinkItem}
              key={index}
              gutter={'xs'}
              align="center"
              data-link={item.type === 'link'}
            >
              <Grid.Col span={2}>
                {item.type === 'title' ? (
                  <ThemeIcon color={'gray.7'} variant="transparent">
                    <item.icon size={20} />
                  </ThemeIcon>
                ) : null}
              </Grid.Col>
              <Grid.Col span={10}>
                <Text c={item.type === 'link' ? 'dimmed' : undefined} fz={13} fw={500}>
                  {item.label}
                </Text>
              </Grid.Col>
            </Grid>
          )
        })}

        {/* <Grid.Col span={2}>
            <ThemeIcon color={'gray.7'} variant="transparent">
              <TbHome size={20} />
            </ThemeIcon>
          </Grid.Col>
          <Grid.Col span={10}>
            <Text fz={'sm'} fw={600}>
              Getting Started
            </Text>
          </Grid.Col>

          <Grid.Col span={2}></Grid.Col>
          <Grid.Col span={10}>
            <Text c={'dimmed'} fz={13} fw={500}>
              Introduction
            </Text>
          </Grid.Col> */}
      </Stack>
    </nav>
  )
}
