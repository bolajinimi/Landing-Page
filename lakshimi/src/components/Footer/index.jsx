import React from 'react'
import { FooterContainer,FooterImg,FooterP,FooterIcon, FooterContentWrapper } from './footer.styles'
import Footer from "../../assets/Images/navbar.png"
import { LiaTwitterSquare, LiaFacebookSquare,LiaLinkedin  } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa6";



const index = () => {
  return (
    <FooterContainer>
      <FooterContentWrapper>

      <FooterImg>
        <img src={Footer} alt="" width={48} height={48}/>
      </FooterImg>
      <FooterP>
            <p>Follow us</p>
      </FooterP>
      <FooterIcon>
       
        <LiaTwitterSquare />
        <FaInstagram />
        <LiaLinkedin />
        <LiaFacebookSquare />
      </FooterIcon>
      </FooterContentWrapper>
    </FooterContainer>
  )
}

export default index
