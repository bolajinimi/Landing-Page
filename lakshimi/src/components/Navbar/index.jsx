import React from 'react'
import { NavbarContainer,NavbarInnerContainer, NavLeft, NavRight, NavImage, Span01} from './navbar.styles'
import HeadImage from '../../assets/Images/navbar.png'
const index = () => {
  return (
    <NavbarContainer>
     <NavbarInnerContainer>
        <NavLeft>
            <Span01>
                Home
            </Span01>
            <Span01>
                About
            </Span01>
            <Span01>
                Products
            </Span01>
        </NavLeft>
        <NavImage>
            <img src={HeadImage} alt="" width={58} height={58}/>
        </NavImage>
        <NavRight>
            <Span01>
                Feature
            </Span01>
            <Span01>
                Awards
            </Span01>
            <Span01>
                FAQS
            </Span01>
        </NavRight>
      </NavbarInnerContainer>
    </NavbarContainer>
  )
}

export default index
