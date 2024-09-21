import { Box, Group, rem, Text, ThemeIcon } from '@mantine/core'
import { sidebarItems } from '../../config/sidebar.config'

import * as classes from './Sidebar.css'

import { TSidebarItem } from '../../config/sidebar.types'
import { Link } from 'react-router-dom'
export const SidebarNavItems = () => {
  return (
    <nav>
      {sidebarItems.map((item, index) => {
        return item.type === 'title' ? (
          <Item key={index} item={item} />
        ) : (
          <Link to={item.href}>
            <Item key={index} item={item} />
          </Link>
        )
      })}
    </nav>
  )
}

type ItemProps = {
  item: TSidebarItem
}
const Item = ({ item }: ItemProps) => {
  return (
    <Group
      py={6}
      px={'xs'}
      className={classes.sidebarLinkItem}
      align="center"
      data-link={item.type === 'link'}
    >
      <Box w={rem(24)}>
        {item.type === 'title' ? (
          <ThemeIcon color={'gray.7'} variant="transparent">
            <item.icon size={20} />
          </ThemeIcon>
        ) : null}
      </Box>

      <Text c={item.type === 'link' ? 'dimmed' : undefined} fz={13} fw={500}>
        {item.label}
      </Text>
    </Group>
  )
}
