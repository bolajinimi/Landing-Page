import React from 'react'
import { HeroContainer, HeroContent,H01,P01,ContentWrapper } from './hero.styles'
import Button from '../Button/index'


const index = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <ContentWrapper>
        <H01>The ultimate aroma and taste,  for blissful <span>relaxation</span>.</H01>
        <P01>
          Elevate your tea experience and discover the perfect balance of tranquility and taste,<br /> 
          sip by sip. Welcome to a journey where every cup is a celebration of serenity 
          and indulgence.
          </P01>
        </ContentWrapper>
     
        <Button />
      </HeroContent>
    </HeroContainer>
  )
}

export default index
