import { Stack } from '@mantine/core'

import { Hero } from './_components/Hero'
import { Introduction } from './_components/Introduction'
import { WhyUs } from './_components/WhyUs'
import { ArticleLayout } from '../../layout/article-layout/ArticleLayout'
import { routes } from '../../routes/routes'

const ViewHome = () => {
  return (
    <ArticleLayout
      nextPage={{
        label: 'Endpoint Overview',
        href: routes['endpoint-overview'],
      }}
    >
      <Stack gap={80}>
        <Hero />
        <Introduction />
        <WhyUs />
      </Stack>
    </ArticleLayout>
  )
}

export default ViewHome
