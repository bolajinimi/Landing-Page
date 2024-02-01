import React from 'react'
import { AwardContainer, AwardContent, AwardH01, AwardP01,AwardCards, AwardImage01, AwardCard01, AwardCard02,  AwardP3,ButtonContainer} from './award.styles'
import Button  from '../Button'
import SelectedImage001 from '../../assets/Images/image07.png'
import SelectedImage002 from '../../assets/Images/image08.png'


const Index = () => {
    return (
      <AwardContainer>
          <AwardContent>
              <AwardH01>
                Awards & Recognition
              </AwardH01>
              <AwardP01>
                 Our work speaks for us.
              </AwardP01>
          </AwardContent>
  
          <AwardCards>
  
              <AwardCard01>
                  <AwardImage01>
                      <img src={SelectedImage001} alt="" />
                  </AwardImage01>
                  <AwardContent>

                          <AwardP3>
                            Top sales in tea category in Japanese EC site.
                          </AwardP3>
                  </AwardContent>
                  <ButtonContainer>
                <Button>
                    Buy Now
                </Button>
            </ButtonContainer>
              </AwardCard01>
              <AwardCard02>
                      <AwardImage01>
                          <img src={SelectedImage002} alt=""/>
                      </AwardImage01>
                      <AwardContent>
                          <AwardP3>
                            Top sales in tea category in department stores.
                          </AwardP3>
                      </AwardContent>
                      
            <ButtonContainer>
                <Button>
                    Buy Now
                </Button>
            </ButtonContainer>
              </AwardCard02>
          </AwardCards>
      </AwardContainer>
    )
  }
  
  export default Index
  
