import { Box, rem, Stack, Text, Title } from '@mantine/core'
import { HEADER_HEIGHT } from '../../../layout/layout.consts'
import { ExamplePages } from './ExamplePages'

export const Hero = () => {
  return (
    <>
      <Stack
        pt={50}
        style={{
          zIndex: 10,
        }}
        gap={'sm'}
      >
        <Title size={rem(54)} order={1} ta={'center'}>
          PhraseFlow Docs
        </Title>
        <Text c={'dimmed'} ta={'center'}>
          Welcome to PhraseFlow Docs. This is a documentation site for PhraseFlow, a tool for
          managing and translating phrases in your app.
        </Text>

        <ExamplePages />
      </Stack>
      <Box
        h={200}
        bg={'blue'}
        style={{
          zIndex: -1,
          position: 'absolute',
          top: HEADER_HEIGHT,
          left: '50%',
          right: 0,
          filter: 'blur(160px)',
        }}
      ></Box>
    </>
  )
}
