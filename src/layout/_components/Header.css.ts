import { style } from '@vanilla-extract/css'
import { vars } from '../../theme'
import { HEADER_HEIGHT } from '../layout.consts'

export const header = style({
  boxShadow: vars.shadows.md,
  height: HEADER_HEIGHT,
  position: 'fixed',
  width: '100%',
  zIndex: 1000,
  backgroundColor: vars.colors.default,
})
