import React from 'react'
import { FAQContainer,FAQContent1, FAQContent, FAQH1, FAQP, FAQP1,FAQP2, Span, FAQInnerContent, ButtonContainer, Button,FAQDiv } from './faqs.styles'

const index = () => {
  return (
   
      <FAQContainer>
        <FAQContent1>
        <FAQH1>Frequently Asked Questions</FAQH1>
        <FAQP>Dive into the details! Here are answers to some commonly asked questions. 
            If you don't find what you're looking for, feel free to reach out to us – we're here to help!
        </FAQP>
        </FAQContent1>
        <FAQDiv>
        <FAQContent>
            <Span>01</Span>
            <FAQInnerContent>
                <FAQP1>Can children drink it?</FAQP1>
                <FAQP2>No. Do not give to children under 1 year old.</FAQP2>
            </FAQInnerContent>

        </FAQContent>
        <FAQContent>
            <Span>02</Span>
            <FAQInnerContent>
                <FAQP1>Are there staples attached to the tea bag?</FAQP1>
                <FAQP2>There are no staples nor any metals attached. So, please drink it with peace of mind.</FAQP2>
            </FAQInnerContent>
        
        </FAQContent>
        
        <FAQContent>
            <Span>03</Span>
            <FAQInnerContent>
                <FAQP1>Is there an expiration date?</FAQP1>
                <FAQP2>The expiration date is 2 years after the date of manufacture.</FAQP2>
            </FAQInnerContent>
        </FAQContent>
        <ButtonContainer>
                <Button>
                    Buy Now
                </Button>
            </ButtonContainer>

            </FAQDiv>
      </FAQContainer>
 
  )
}

export default index
