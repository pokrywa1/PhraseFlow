import { createTheme, CSSVariablesResolver, DEFAULT_THEME, mergeMantineTheme } from '@mantine/core'
import { themeToVars } from '@mantine/vanilla-extract'

const themeOverride = createTheme({
  fontFamily: 'Inter, sans-serif',

  headings: {
    fontFamily: 'Inter, sans-serif',
  },

  primaryColor: 'blue',
  primaryShade: 8,
  colors: {
    blue: [
      '#e4ffff',
      '#d0fcff',
      '#a2f8fd',
      '#71f5fb',
      '#50f3fb',
      '#40f1fb',
      '#34f0fb',
      '#24d5e0',
      '#02bec7',
      '#00a5ae',
    ],
  },
  other: undefined,
})

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)

const otherLightTheme = {
  ...theme,
  other: {
    primaryText: '#1d1e20',
  },
}

const otherDarkTheme = {
  ...theme,
  other: {
    primaryText: '#eaeef6',
  },
}

export const myTheme = {
  light: otherLightTheme,
  dark: otherDarkTheme,
}

export const vars = themeToVars(theme)

// theme
export const resolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {
    // '--mantine-color-text': theme.other.primaryText,
  },
  dark: {
    // '--mantine-color-text': theme.other.primaryText,
  },
})
