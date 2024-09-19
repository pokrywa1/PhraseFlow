import { style } from '@vanilla-extract/css'
import { vars } from '../../theme'
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from '../layout.consts'

export const sidebar = style({
  paddingTop: HEADER_HEIGHT,
  height: '100vh',
  width: SIDEBAR_WIDTH,
  borderRight: `1px solid ${vars.colors.defaultBorder}`,
  position: 'fixed',

  zIndex: 999,

  '@media': {
    [vars.smallerThan('md')]: {
      display: 'none',
    },
  },
})

export const sidebarLinkItem = style({
  borderRadius: vars.radius.md,

  selectors: {
    '&[data-link="true"]:hover': {
      cursor: 'pointer',

      backgroundColor: vars.colors.gray[0],
      transition: 'background-color 0.2s',
    },
  },
})
