import { Burger, Drawer, Grid, Text, ThemeIcon } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { sidebarItems } from '../../config/sidebar.config'
import * as classes from './Sidebar.css'

export const BurgerMenuWithButton = () => {
  const [opened, { toggle, close }] = useDisclosure()

  return (
    <>
      <Drawer opened={opened} onClose={close}>
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
