import { Stack, Text, Title } from '@mantine/core'
import { vars } from '../../../theme'

export const Introduction = () => {
  return (
    <Stack gap={'xs'}>
      <Title mt={'md'} order={2}>
        Introduction
      </Title>
      <Text>
        <span
          style={{
            color: vars.colors.blue[6],
            fontWeight: 600,
          }}
        >
          PhraseFlow
        </span>{' '}
        is a simple and efficient translation API. It allows you to send a message and a country
        code, and in return, you receive the translated message. Whether you are building an
        international application or need quick translations, this API has you covered
      </Text>
    </Stack>
  )
}
