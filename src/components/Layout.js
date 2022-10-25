import React from 'react'
import styled from 'styled-components'

import Scroll from 'components/Scroll'
import Header from 'components/Header'

const Layout = ({ children }) => {
  return (
    <Main>
      <Header/>
      <Scroll>
        {children}
      </Scroll>
    </Main>
  )
}

export default Layout

const Main = styled.main`

`