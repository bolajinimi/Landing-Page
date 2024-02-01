import React from 'react'
import { AboutContainer, AboutContent, AboutWrapper, AboutImage,AboutH1,AboutP1,ButtonContainer } from './about.styles'
import AboutBrandImage from '../../assets/Images/about.png';
import Button from '../Button/index'

const index = () => {
  return (
    <AboutContainer>
        <AboutContent>
            <AboutWrapper>
                <AboutH1>About Brand</AboutH1>
                <AboutP1>
                    Lakshimi started with a tea class that the representative, 
                    Yoko Toda, started at home. In 2005, “Lakshimi Tea Shop” 
                    opened in Kitano, Kobe.
                </AboutP1>
                <AboutP1>In 2008, we started to blend our own original tea. Initially,
                     we started with only a few blends, but as we learned about 
                     the tastes and preferences of our customers, we gradually 
                     increased the number of original blends.
                </AboutP1>
                <AboutP1>
                    In 2011, we developed our popular product, “Premium 
                    Honey Tea”. This tea was well-received by customers who 
                    enjoyed its sweet yet low-calorie content, making it a 
                    mainstay in our store.
                </AboutP1>
              
            </AboutWrapper>
        
            <ButtonContainer>
                <Button>
                    Buy Now
                </Button>
            </ButtonContainer>

        </AboutContent>
        <AboutImage>
                <img src={AboutBrandImage} alt="about" />
            </AboutImage>
    </AboutContainer>
  )
}

export default index
