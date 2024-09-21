import { IconType } from 'react-icons'

export type TSidebarTitle = {
  icon: IconType
  label: string
  type: 'title'
}

export type TSidebarLink = {
  type: 'link'
  label: string
  href: string
}

export type TSidebarItem = TSidebarTitle | TSidebarLink

export type TSidebarLinkItem = Extract<TSidebarItem, { type: 'link' }>
export type TSidebarTitleItem = Extract<TSidebarItem, { type: 'title' }>
