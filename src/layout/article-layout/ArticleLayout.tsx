import { Box, Divider, SimpleGrid, Stack, Text } from '@mantine/core'
import * as classes from './ArtivleLayout.css'
import { Link } from 'react-router-dom'
type TPageLink = {
  label: string
  href: string
}
type ArticleLayoutProps = {
  children: React.ReactNode
  prevPage?: TPageLink
  nextPage?: TPageLink
}
export const ArticleLayout = ({ children, prevPage, nextPage }: ArticleLayoutProps) => {
  return (
    <Stack>
      {children}
      <Divider my={'md'} />
      <SimpleGrid cols={2}>
        {prevPage ? (
          <Box className={classes.button}>
            <Stack gap={2}>
              <Text fz={'sm'} fw={500} c={'dimmed'}>
                Prev
              </Text>
              <Text>{prevPage.label}</Text>
            </Stack>
          </Box>
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
