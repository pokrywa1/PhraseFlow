import { MantineProvider } from '@mantine/core'

import '@mantine/core/styles.css'

import { myTheme, resolver } from './theme'

import { AppRoutes } from './views/AppRoutes'

export default function App() {
  return (
    <MantineProvider
      theme={myTheme['light']}
      defaultColorScheme="auto"
      cssVariablesResolver={resolver}
    >
      <AppRoutes />
    </MantineProvider>
  )
}
