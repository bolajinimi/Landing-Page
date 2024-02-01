import React from 'react'
import styled from 'styled-components'

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 235px;
    height: 56px;
    background-color: #E16E4E;

 `;

export const Button = styled.button`

background-color: #E16E4E;
border: none;
color: white;
font-family: Bitter;
font-size: 16px;
font-weight: 600;
line-height: 24px;
letter-spacing: 0em;


`


const index = () => {
  return (
    <ButtonContainer>
      <Button>
        Buy Now
      </Button>
    </ButtonContainer>
  )
}

export default index
