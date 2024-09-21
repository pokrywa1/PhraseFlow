import { Text, Title } from '@mantine/core'
import { ArticleLayout } from '../../layout/article-layout/ArticleLayout'
import { routes } from '../../routes/routes'
import { ResponseFieldsDatatable } from './_components/ResponseFieldsDatatable'

const ViewResponseStructure = () => {
  return (
    <ArticleLayout
      prevPage={{
        href: '/previous',
        label: 'Previous',
      }}
      nextPage={{
        label: 'Kontakt i wsparcie',
        href: routes['request-parameters'],
      }}
    >
      <Title order={1}>Response Structure</Title>
      <Text>
        When a request is successfully made to the translation API, the server will return a JSON
        response containing the translated text along with the target language code.
      </Text>
      <Title order={2}>Response Fields</Title>
      <ResponseFieldsDatatable />
      <Text>
        The structure is designed to be simple and consistent, allowing for easy integration and
        parsing in your application.
      </Text>
    </ArticleLayout>
  )
}
export default ViewResponseStructure
