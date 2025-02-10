import { useState } from 'react'
import FlowEditor from './components/FlowEditor'
import Sidebar from './components/Sidebar'
import styled from '@emotion/styled'

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`

const App = () => {
  return (
    <AppContainer>
      <Sidebar />
      <FlowEditor />
    </AppContainer>
  )
}

export default App
