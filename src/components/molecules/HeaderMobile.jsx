import React from 'react'

import styled from 'styled-components'
import Logo from '../atoms/logo.svg'

const FrameHeader = styled.div` 
  background-color: white;

`

export const HeaderMobile = () => {
  return (
    <FrameHeader>
      <div>{Logo} </div>
    </FrameHeader>
  )
}
