import { MantineProvider } from '@mantine/core'

import '@mantine/core/styles.css'

import { myTheme, resolver } from './theme'
import { ViewHome } from './views/home/ViewHome'
import { AppLayout } from './layout/AppLayout'

export default function App() {
  return (
    <MantineProvider theme={myTheme['light']} cssVariablesResolver={resolver}>
      <AppLayout>
        <ViewHome />
      </AppLayout>
    </MantineProvider>
  )
}
