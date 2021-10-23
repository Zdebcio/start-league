import styled from 'styled-components'
import { colors } from 'config'

export const LoginPage = styled('div')`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`

export const ContentContainer = styled('div')`
  background-color: ${colors.components.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1vmin 1vmin ${colors.decorations.boxShadows.component};
`
