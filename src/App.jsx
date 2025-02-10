import { useState } from 'react'
import FlowEditor from './components/FlowEditor'
import Sidebar from './components/Sidebar'
import Toolbar from './components/Toolbar'
import styled from '@emotion/styled'

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
`

const App = () => {
  return (
    <AppContainer>
      <Sidebar />
      <FlowEditor />
      <Toolbar />
    </AppContainer>
  )
}

export default App
