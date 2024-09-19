import { Box } from '@mantine/core'
import { Header } from './_components/Header'
import { HEADER_HEIGHT } from './layout.consts'

type AppLayoutProps = {
  children: React.ReactNode
}
export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      <Box pt={HEADER_HEIGHT} component="main">
        {children}
      </Box>
    </>
  )
}
