import { Box, Burger, Drawer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { SidebarNavItems } from './SidebarItems'

export const BurgerMenuWithButton = () => {
  const [opened, { toggle, close }] = useDisclosure()

  return (
    <>
      <Drawer hiddenFrom={'md'} opened={opened} onClose={close}>
        <Box pt={'md'}>
          <SidebarNavItems closeSidebar={close} />
        </Box>
      </Drawer>
      <Burger
        color="gray.6"
        hiddenFrom={'md'}
        opened={opened}
        onClick={toggle}
        aria-label="Toggle navigation"
      />
    </>
  )
}
