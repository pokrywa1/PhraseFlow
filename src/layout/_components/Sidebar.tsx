import { Box, Stack } from '@mantine/core'
import * as classes from './Sidebar.css'

import { SidebarNavItems } from './SidebarItems'

export const Sidebar = () => {
  return (
    <Box className={classes.sidebar}>
      <Stack gap={0} p={'xs'}>
        <SidebarNavItems />
      </Stack>
    </Box>
  )
}
