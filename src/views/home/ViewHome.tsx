import { Stack } from '@mantine/core'
import { Hero } from './_components/Hero'
import { Introduction } from './_components/Introduction'
import { WhyUs } from './_components/WhyUs'
import { ArticleLayout } from '../../layout/article-layout/ArticleLayout'
import { SIDEBAR_ENDPOINT_OVERVIEW } from '../../config/sidebar.config'

const ViewHome = () => {
  return (
    <ArticleLayout nextPage={SIDEBAR_ENDPOINT_OVERVIEW}>
      <Stack gap={80}>
        <Hero />
        <Introduction />
        <WhyUs />
      </Stack>
    </ArticleLayout>
  )
}

export default ViewHome
