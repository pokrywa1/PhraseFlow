import { Divider, SimpleGrid, Stack, Text } from '@mantine/core'
import * as classes from './ArtivleLayout.css'
import { Link } from 'react-router-dom'
import { TSidebarLinkItem } from '../../config/sidebar.types'

type ArticleLayoutProps = {
  children: React.ReactNode
  prevPage?: TSidebarLinkItem
  nextPage?: TSidebarLinkItem
}
export const ArticleLayout = ({ children, prevPage, nextPage }: ArticleLayoutProps) => {
  return (
    <Stack>
      {children}
      <Divider my={'md'} />
      <SimpleGrid cols={2}>
        {prevPage ? (
          <Link to={prevPage.href} className={classes.button}>
            <Stack gap={2}>
              <Text fz={'sm'} fw={500} c={'dimmed'}>
                Prev
              </Text>
              <Text>{prevPage.label}</Text>
            </Stack>
          </Link>
        ) : (
          <div />
        )}

        {nextPage && (
          <Link to={nextPage.href} className={classes.button}>
            <Stack align="end" gap={2}>
              <Text fz={'sm'} fw={500} c={'dimmed'}>
                Next
              </Text>
              <Text>{nextPage.label}</Text>
            </Stack>
          </Link>
        )}
      </SimpleGrid>
      <Divider my={'xl'} />
    </Stack>
  )
}
