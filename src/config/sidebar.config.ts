import { TbAlertCircle, TbBook, TbCode, TbPhoneCall, TbQuestionMark, TbSend } from 'react-icons/tb'
import { TSidebarItem } from './sidebar.types'
import { routes } from '../routes/routes'

export const sidebarItems: TSidebarItem[] = [
  {
    type: 'title',
    icon: TbBook,
    label: 'Getting Started',
  },
  {
    type: 'link',
    label: 'Introduction',
    href: routes['introduction'],
  },

  {
    type: 'title',
    icon: TbSend,
    label: 'Making Requests',
  },
  {
    type: 'link',
    label: 'Endpoint Overview',
    href: '/endpoint-overview',
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
