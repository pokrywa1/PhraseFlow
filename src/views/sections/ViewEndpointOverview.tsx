import { Text, Title } from '@mantine/core'
import { ArticleLayout } from '../../layout/article-layout/ArticleLayout'
import { Code } from '../../components/mantine/Code'
import { API_URL } from '../../config/env'

import { SIDEBAR_INTRODUCTION, SIDEBAR_REQUEST_PARAMETERS } from '../../config/sidebar.config'

const ViewEndpointOverview = () => {
  return (
    <ArticleLayout prevPage={SIDEBAR_INTRODUCTION} nextPage={SIDEBAR_REQUEST_PARAMETERS}>
      <Title order={1}>Endpoint Overview</Title>
      <Text>
        In this section, you’ll find an overview of the key endpoints used to interact with our
        translation API. The API is designed to handle translation requests by sending a target
        language code and the text to be translated. The response will contain the translated text.
      </Text>
      <Title order={2}>Base URL</Title>
      <Text>All requests should be sent to the following base URL:</Text>
      <Code>{API_URL}api/translation</Code>
      <Text>
        This is the endpoint to which you will need to append the required parameters (such as the
        language code and text) in your request
      </Text>
    </ArticleLayout>
  )
}
export default ViewEndpointOverview
