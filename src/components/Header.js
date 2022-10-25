import React from 'react'
import styled, { css } from 'styled-components'

import { ReactComponent as LogoSVG } from 'images/logo-full.svg'
import fullyResponsive from '../utils/fullyResponsive'

const Header = () => {
  return (
    <Wrapper>
      <Logo/>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed; 
  z-index: 9;
  top: 0;
  left: 0;
  width: 100vw;

  ${fullyResponsive(css`
    height: 138px;
    padding: 0px 130px;
  `)}
`

const Logo = styled(LogoSVG)`
  height: auto;

  ${fullyResponsive(css`
    width: 328px;
  `)}
`