import { Table } from '@mantine/core'

const RESPONSE_FIELDS = [
  {
    field: 'translation',
    type: 'string',
    description: 'The translated text. This is the result of the API’s translation process.',
  },
  {
    field: 'lang',
    type: 'string',
    description:
      'The target language code representing the language to which the text was translated. This is the same language code that was provided in the request.',
  },
]
export const ResponseFieldsDatatable = () => {
  const rows = RESPONSE_FIELDS.map((element) => (
    <Table.Tr key={element.field}>
      <Table.Td>{element.field}</Table.Td>
      <Table.Td>{element.type}</Table.Td>
      <Table.Td>{element.description}</Table.Td>
    </Table.Tr>
  ))

  return (
    <Table w={'fit-content'} withTableBorder withColumnBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Field</Table.Th>
          <Table.Th>Type</Table.Th>
          <Table.Th>Description</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}
