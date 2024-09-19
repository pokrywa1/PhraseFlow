import { Box, Container } from '@mantine/core'
import { Header } from './_components/Header'
import { HEADER_HEIGHT, MAX_CONTENT_WIDTH, SIDEBAR_WIDTH } from './layout.consts'
import { Sidebar } from './_components/Sidebar'
import { useMediaQuery } from '@mantine/hooks'
import { vars } from '../theme'

type AppLayoutProps = {
  children: React.ReactNode
}
export const AppLayout = ({ children }: AppLayoutProps) => {
  const smallerThanMd = useMediaQuery(vars.smallerThan('md'))
  return (
    <>
      {/* Mobile Sidebar in Header */}
      <Header />
      {/* Desktop Sidebar */}
      <Sidebar />
      <Box
        style={{
          position: 'relative',
        }}
        pl={smallerThanMd ? undefined : SIDEBAR_WIDTH}
        py={HEADER_HEIGHT}
        component="main"
      >
        <Container mt={'xl'} size={MAX_CONTENT_WIDTH}>
          {children}
        </Container>
      </Box>
    </>
  )
}
