import { Anchor, Text, Title } from '@mantine/core'
import { ArticleLayout } from '../../layout/article-layout/ArticleLayout'
import { routes } from '../../routes/routes'
import { Code } from '../../components/mantine/Code'
import { codeForBasicUsageExample } from './utils/codeForBasicUsageExample'
import { API_URL } from '../../config/env'
import { Link } from 'react-router-dom'

const ViewBasicUsage = () => {
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
      <Title order={1}>Basic Usage</Title>
      <Text>
        This section demonstrates how to make a basic request to the translation API by passing text
        and lang as URL parameters.
      </Text>
      <Title order={2}>Example</Title>
      <Text>
        To send a translation request, make an HTTP GET request to the API’s endpoint, providing the
        text and lang parameters in the query string. Here’s an example using fetch in JavaScript:
      </Text>
      <Code block>{codeForBasicUsageExample}</Code>
      <Title order={3}>URL</Title>
      <Text>
        {`The base URL for the translation API is ${API_URL}. The text and lang
        parameters are appended as query parameters (?text=Hello&lang=pl).`}
      </Text>

      <Title order={3}>Method:</Title>
      <Text>
        The request method is GET, as we are passing the parameters via the URL query string.
      </Text>
      <Title order={3}>Query Parameters:</Title>
      <Text>
        The parameters text and lang were discussed in detail on another page in the documentation.
      </Text>

      <Anchor to={routes['request-parameters']} component={Link}>
        Learn more about request parameters
      </Anchor>
    </ArticleLayout>
  )
}
export default ViewBasicUsage
