import { TbBook, TbCode, TbPhoneCall, TbQuestionMark, TbSend } from 'react-icons/tb'
import { TSidebarItem, TSidebarLink, TSidebarTitle } from './sidebar.types'
import { routes } from '../routes/routes'

export const SIDEBAR_GETTING_STARTED: TSidebarTitle = {
  type: 'title',
  icon: TbBook,
  label: 'Getting Started',
}

export const SIDEBAR_INTRODUCTION: TSidebarLink = {
  type: 'link',
  label: 'Introduction',
  href: routes['introduction'],
}

export const SIDEBAR_MAKING_REQUESTS: TSidebarTitle = {
  type: 'title',
  icon: TbSend,
  label: 'Making Requests',
}

export const SIDEBAR_ENDPOINT_OVERVIEW: TSidebarLink = {
  type: 'link',
  label: 'Endpoint Overview',
  href: routes['endpoint-overview'],
}

export const SIDEBAR_REQUEST_PARAMETERS: TSidebarLink = {
  type: 'link',
  label: 'Request Parameters',
  href: routes['request-parameters'],
}

export const SIDEBAR_RESPONSE_STRUCTURE: TSidebarLink = {
  type: 'link',
  label: 'Response Structure',
  href: routes['response-structure'],
}

export const SIDEBAR_EXAMPLES: TSidebarTitle = {
  type: 'title',
  label: 'Examples',
  icon: TbCode,
}

export const SIDEBAR_BASIC_USAGE: TSidebarLink = {
  type: 'link',
  label: 'Basic Usage',
  href: routes['basic-usage'],
}

export const SIDEBAR_FAQ: TSidebarTitle = {
  type: 'title',
  label: 'FAQ',
  icon: TbQuestionMark,
}

export const SIDEBAR_FREQUENTLY_ASKED_QUESTIONS: TSidebarLink = {
  type: 'link',
  label: 'Frequently Asked Questions',
  href: routes['faq'],
}

export const SIDEBAR_CONTACT_SUPPORT: TSidebarTitle = {
  type: 'title',
  label: 'Contact & Support',
  icon: TbPhoneCall,
}

export const SIDEBAR_CONTACT_US: TSidebarLink = {
  type: 'link',
  label: 'Contact Us',
  href: routes['contact-us'],
}

export const sidebarItems: TSidebarItem[] = [
  SIDEBAR_GETTING_STARTED,
  SIDEBAR_INTRODUCTION,
  SIDEBAR_MAKING_REQUESTS,
  SIDEBAR_ENDPOINT_OVERVIEW,
  SIDEBAR_REQUEST_PARAMETERS,
  SIDEBAR_RESPONSE_STRUCTURE,
  SIDEBAR_EXAMPLES,
  SIDEBAR_BASIC_USAGE,
  SIDEBAR_FAQ,
  SIDEBAR_FREQUENTLY_ASKED_QUESTIONS,
  SIDEBAR_CONTACT_SUPPORT,
  SIDEBAR_CONTACT_US,
]
