import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  width: ${(props) => props.width || '24px'};
  height: ${(props) => props.height || '24px'};
  fill: ${(p) => p.theme.colors.textPrimary};
  justify-self: end;
  &:hover {
    cursor: pointer;
  }
`
const StyledPath = styled.path`
  fill: ${p => p.theme.colors.background};
  stroke: ${p => p.theme.colors.textPrimary};
`
const ContrastPolygon = styled.polygon`
  fill: ${p => p.theme.colors.textPrimary}
`

const CloseIcon = ({ 
  width, 
  height,
  onClick
}) => {

  return (
  <Svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    width={width}
    height={height}
  >
    <StyledPath d="M32.01 2l0 0c16.56,0 29.99,13.43 29.99,29.99l0 0c0,16.58 -13.43,30.01 -29.99,30.01l0 0c-16.58,0 -30.01,-13.43 -30.01,-30.01l0 0c0,-16.56 13.43,-29.99 30.01,-29.99z"/>
    <ContrastPolygon fillRule="nonzero" points="22.85,20.7 32,29.84 41.15,20.7 43.3,22.86 34.15,31.99 43.3,41.12 41.15,43.28 32,34.14 22.85,43.28 20.7,41.12 29.85,31.99 20.7,22.86 "/>
  </Svg>
)}

export default CloseIcon;
