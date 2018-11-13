import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`
    display: grid;
    grid-template-columns: 60px auto;
    grid-gap: 25px;
    align-items: center;
    min-width: 320px;
`

const CellImage = styled.div`
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 0px;
    background-image: url(${props => props.image});
    background-size: 30px;
`

const CellTitle = styled.div`
    font-size: 20px;
    padding: 30px 0;
`

const Cell = props => (
    <CellGroup>
        <CellImage image={props.image}></CellImage>
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

export default Cell