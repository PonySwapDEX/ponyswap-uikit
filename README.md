# Pony UIkit

Pony UIkit is a set of React components and hooks used to build pages on Pony's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @ponyswapdex/uikit`

## Setup

### Theme

Before using Pony UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@ponyswapdex/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@ponyswapdex/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
