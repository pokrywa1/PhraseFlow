import { ActionIcon, Group, Image, useMantineColorScheme } from '@mantine/core'
import { HEADER_PADDING_HORIZONTAL } from '../layout.consts'

import { TbMoon, TbSun } from 'react-icons/tb'
import * as classes from './Header.css'
import { BurgerMenuWithButton } from './BurgerMenuWithButton'

export const Header = () => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme()

  return (
    <header className={classes.header}>
      <Group h={'100%'} px={HEADER_PADDING_HORIZONTAL} justify="space-between" align="center">
        <Image src={'/logo.svg'} alt={'Logo'} w={200} />
        <Group>
          <ActionIcon
            size={'lg'}
            variant="transparent"
            color="gray.6"
            onClick={toggleColorScheme}
            title="Dark mode"
            aria-label="Dark mode"
          >
            {colorScheme === 'dark' ? <TbSun size={22} /> : <TbMoon size={22} />}
          </ActionIcon>
          <BurgerMenuWithButton />
        </Group>
      </Group>
    </header>
  )
}
