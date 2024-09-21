import { Anchor, List, Text, Title } from '@mantine/core'
import { ArticleLayout } from '../../layout/article-layout/ArticleLayout'

import { ParametersDatatable } from './_components/ParametersDatatable'
import { LanguageCodesDatatable } from './_components/LanguageCodesDatatable'
import { SIDEBAR_ENDPOINT_OVERVIEW, SIDEBAR_RESPONSE_STRUCTURE } from '../../config/sidebar.config'

const ViewRequestParameters = () => {
  return (
    <ArticleLayout prevPage={SIDEBAR_ENDPOINT_OVERVIEW} nextPage={SIDEBAR_RESPONSE_STRUCTURE}>
      <Title order={1}>Request Parameters</Title>
      <Text>
        To make a successful request to the translation API, you’ll need to provide two key
        parameters: text and lang.
      </Text>

      <List>
        <List.Item>
          <span
            style={{
              fontWeight: 'bold',
            }}
          >
            text
          </span>
          : The text you want to translate. This can be provided in any language and should be
          encoded properly in the request (e.g., URL encoding if necessary).
        </List.Item>
        <List.Item>
          <span
            style={{
              fontWeight: 'bold',
            }}
          >
            lang
          </span>
          : The target language code representing the language to which you want the text
          translated. This should be provided as a two-letter ISO 639-1 language code.
        </List.Item>
      </List>

      <Title order={2}>Example Request Parameters:</Title>
      <ParametersDatatable />

      <Title order={2}>Sample Language Codes:</Title>

      <LanguageCodesDatatable />

      <Text>
        Make sure to always use valid language codes in your requests. You can refer to the full
        list of ISO 639-1 codes if you need support for additional languages.
      </Text>

      <Text>
        This structure provides clear guidance on how to format the request, including what the
        parameters are and how they should be used. The sample table of language codes is also a
        helpful reference.
      </Text>

      <Text>
        This is the endpoint to which you will need to append the required parameters (such as the
        language code and text) in your request
      </Text>
      <Text>You can find the full list of ISO 639-1 language codes at the following link:</Text>
      <Anchor target="_blank" href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">
        ISO 639-1 Language Codes - Full List
      </Anchor>
    </ArticleLayout>
  )
}
export default ViewRequestParameters
