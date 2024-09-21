import { Accordion, Text, Title } from '@mantine/core'
import { ArticleLayout } from '../../layout/article-layout/ArticleLayout'

import { SIDEBAR_BASIC_USAGE, SIDEBAR_CONTACT_US } from '../../config/sidebar.config'

const FAQ_DATA = [
  {
    question: 'How can I contact support?',
    answer:
      'If you have additional questions or need assistance, please visit our Contact Us page for support options.',
  },
  {
    question: 'What languages are supported by the API?',
    answer:
      'The API supports a wide range of languages, identified by their ISO 639-1 language codes. For a complete list, please refer to our list of language codes.',
  },
  {
    question: 'Is the API free to use?',
    answer: 'Yes, the API is free to use for all users.',
  },
  {
    question: 'Are there any limits on usage?',
    answer: 'No, there are currently no limits on the number of requests you can make.',
  },
]

const ViewFaq = () => {
  return (
    <ArticleLayout prevPage={SIDEBAR_BASIC_USAGE} nextPage={SIDEBAR_CONTACT_US}>
      <Title>Frequently Asked Questions (FAQ)</Title>
      <Accordion variant="separated">
        {FAQ_DATA.map((faq, index) => (
          <Accordion.Item value={faq.question} key={index}>
            <Accordion.Control>
              <Text fw={500}>{faq.question}</Text>
            </Accordion.Control>
            <Accordion.Panel>{faq.answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </ArticleLayout>
  )
}
export default ViewFaq
