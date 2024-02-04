import React from 'react'
import { IndulgeContainer, IndulgeContent,H01,P01,ContentWrapper, ButtonContainer } from './indulge.styles'
import Button from '../Button/index'


const index = () => {
  return (
    <IndulgeContainer>
      <IndulgeContent>
        <ContentWrapper>
          <H01>
              Indulge in the Extraordinary.
              <span> Elevate Your Sip, </span>Elevate Your Life.
          </H01>
          <P01>
              Ready to embark on a journey of unparalleled taste and tranquility? 
              Choose Lakshimi Japanese Tea where every cup is a 
              celebration of flavor, wellness, and pure indulgence.
          </P01>
        </ContentWrapper>
        <ButtonContainer>
                        <Button>
                            Buy Now
                        </Button>
                        </ButtonContainer>
      </IndulgeContent>
    </IndulgeContainer>
  )
}

export default index
