import { Box, Container } from '@mantine/core'
import { Header } from './_components/Header'
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from './layout.consts'
import { Sidebar } from './_components/Sidebar'

type AppLayoutProps = {
  children: React.ReactNode
}
export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      <Sidebar />
      <Box pl={SIDEBAR_WIDTH} pt={HEADER_HEIGHT} component="main">
        <Container mt={'xl'}>{children}</Container>
        {/* {children} */}
      </Box>
    </>
  )
}
