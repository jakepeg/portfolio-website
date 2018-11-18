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
    width: 27px;
    height: 27px;
    opacity: 0.8;
    border-radius: 0px;
    background-image: url(${props => props.image});
    background-size: 27px;
`

const CellTitle = styled.div`
    font-size: 20px;
    padding: 30px 0;
    color: #fff;
`

const Cell = props => (
    <CellGroup>
        <CellImage image={props.image}></CellImage>
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

export default Cell