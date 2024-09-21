import { Text, Title } from '@mantine/core'
import { ArticleLayout } from '../../layout/article-layout/ArticleLayout'

import { ResponseFieldsDatatable } from './_components/ResponseFieldsDatatable'
import { SIDEBAR_BASIC_USAGE, SIDEBAR_REQUEST_PARAMETERS } from '../../config/sidebar.config'

const ViewResponseStructure = () => {
  return (
    <ArticleLayout prevPage={SIDEBAR_REQUEST_PARAMETERS} nextPage={SIDEBAR_BASIC_USAGE}>
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
