import { Grid, Stack, Text, ThemeIcon } from '@mantine/core'
import * as classes from './Sidebar.css'
import { sidebarItems } from '../../config/sidebar.config'

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
