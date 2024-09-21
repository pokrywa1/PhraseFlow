import { style } from '@vanilla-extract/css'
import { vars } from '../../theme'

export const button = style({
  borderRadius: vars.radius.md,
  padding: '10px 20px',
  cursor: 'pointer',
  transition: 'background-color 200ms ease',
  ':hover': {
    backgroundColor: vars.colors.defaultHover,
  },
})
