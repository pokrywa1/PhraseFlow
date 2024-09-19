import { Box, Group, rem, Text, ThemeIcon } from '@mantine/core'
import { sidebarItems } from '../../config/sidebar.config'

import * as classes from './Sidebar.css'
export const SidebarNavItems = () => {
  return (
    <nav>
      {sidebarItems.map((item, index) => {
        return (
          <Group
            py={6}
            px={'xs'}
            className={classes.sidebarLinkItem}
            key={index}
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
      })}
    </nav>
  )
}
