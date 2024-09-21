import { Table } from '@mantine/core'

const LANGUAGES_CODE = [
  {
    lng: 'Poland',
    code: 'pl',
  },
  {
    lng: 'English',
    code: 'en',
  },
  {
    lng: 'Spanish',
    code: 'es',
  },
  {
    lng: 'French',
    code: 'fr',
  },
  {
    lng: 'German',
    code: 'de',
  },
  {
    lng: 'Italian',
    code: 'it',
  },
  {
    lng: 'Dutch',
    code: 'nl',
  },
  {
    lng: 'Portuguese',
    code: 'pt',
  },

  {
    lng: 'Japanese',
    code: 'ja',
  },
  {
    lng: 'Chinese',
    code: 'zh',
  },
  {
    lng: 'Arabic',
    code: 'ar',
  },
  {
    lng: 'Turkish',
    code: 'tr',
  },
  {
    lng: 'Korean',
    code: 'ko',
  },
  {
    lng: 'Swedish',
    code: 'sv',
  },
  {
    lng: 'Danish',
    code: 'da',
  },
  {
    lng: 'Finnish',
    code: 'fi',
  },
  {
    lng: 'Norwegian',
    code: 'no',
  },
  {
    lng: 'Czech',
    code: 'cs',
  },
  {
    lng: 'Slovak',
    code: 'sk',
  },

  {
    lng: 'Ukrainian',
    code: 'uk',
  },

  {
    lng: 'Estonian',
    code: 'et',
  },
]
export const LanguageCodesDatatable = () => {
  const rows = LANGUAGES_CODE.map((element) => (
    <Table.Tr key={element.code}>
      <Table.Td>{element.lng}</Table.Td>
      <Table.Td>{element.code}</Table.Td>
    </Table.Tr>
  ))

  return (
    <Table w={'fit-content'} withTableBorder withColumnBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Language</Table.Th>
          <Table.Th>Code</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}
