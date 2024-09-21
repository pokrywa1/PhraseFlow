import { CodeProps as MantineCodeProps, Code as MantineCode } from '@mantine/core'
export const Code = ({ ...props }: MantineCodeProps) => {
  return <MantineCode p={'sm'} {...props} />
}
