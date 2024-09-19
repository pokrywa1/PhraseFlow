import { Stack } from '@mantine/core'

import { Hero } from './_components/Hero'
import { Introduction } from './_components/Introduction'
import { WhyUs } from './_components/WhyUs'

export const ViewHome = () => {
  return (
    <Stack gap={80}>
      <Hero />
      <Introduction />
      <WhyUs />
    </Stack>
  )
}
