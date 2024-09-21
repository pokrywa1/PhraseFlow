import { Title } from '@mantine/core'
import { ArticleLayout } from '../../layout/article-layout/ArticleLayout'

const ViewEndpointOverview = () => {
  return (
    <ArticleLayout
      nextPage={{
        label: 'Kontakt i wsparcie',
        href: '/previous',
      }}
    >
      <Title order={1}>Endpoint Overview</Title>
    </ArticleLayout>
  )
}
export default ViewEndpointOverview
