import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 0;
  align-items: center;
  min-width: 320px;
`

const CellImage = styled.div`
  width: 27px;
  height: 27px;
  opacity: 0.8;
  border-radius: 0px;
  /* background-image: url(${props => props.image});
  background-size: 27px; */
`

const CellTitle = styled.div`
  font-size: 24px;
  padding: 20px 0;
  color: #fff;
`

const Cell = props => (
  <CellGroup>
    <CellImage>
      <img src={require('../images/skills-icon.svg')} width="20" />
    </CellImage>
    <CellTitle>{props.title}</CellTitle>
  </CellGroup>
)

export default Cell
