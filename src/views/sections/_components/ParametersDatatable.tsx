import { Table } from '@mantine/core'

const PARAMETERS = [
  {
    parameter: 'text',
    type: 'string',
    required: 'yes',
    description:
      'The text you want to translate. This can be provided in any language and should be encoded properly in the request (e.g., URL encoding if necessary).',
  },
  {
    parameter: 'lang',
    type: 'string',
    required: 'yes',
    description:
      'The target language code representing the language to which you want the text translated. This should be provided as a two-letter ISO 639-1 language code.',
  },
]
export const ParametersDatatable = () => {
  const rows = PARAMETERS.map((element) => (
    <Table.Tr key={element.parameter}>
      <Table.Td>{element.parameter}</Table.Td>
      <Table.Td>{element.type}</Table.Td>
      <Table.Td>{element.required}</Table.Td>
      <Table.Td>{element.description}</Table.Td>
    </Table.Tr>
  ))

  return (
    <Table withTableBorder withColumnBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Parameter</Table.Th>
          <Table.Th>Type</Table.Th>
          <Table.Th>Required</Table.Th>
          <Table.Th>Description</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}
