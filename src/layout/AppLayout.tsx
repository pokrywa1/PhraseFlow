import { Box, Container } from '@mantine/core'
import { Header } from './_components/Header'
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from './layout.consts'
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
      <Box pl={smallerThanMd ? undefined : SIDEBAR_WIDTH} pt={HEADER_HEIGHT} component="main">
        <Container mt={'xl'}>{children}</Container>
      </Box>
    </>
  )
}
