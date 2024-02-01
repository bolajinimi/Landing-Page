import React from 'react'
import { GetContainer, GetContent, GetH01, GetP01, GetCards, GetImage01, GetCard01,GetH4, GetP3 } from './get.styles'
import Button  from '../Button'
import SelectedImage001 from '../../assets/Images/image05.png'
import SelectedImage002 from '../../assets/Images/image06.png'


const index = () => {
  return (
    <GetContainer>
        <GetContent>
            <GetH01>
                Get the best from our Tea
            </GetH01>
            <GetP01>
                Style to your own taste.
            </GetP01>
        </GetContent>

        <GetCards>

            <GetCard01>
                <GetImage01>
                    <img src={SelectedImage001} alt="" />
                </GetImage01>
                <GetContent>
                        <GetH4>
                            With Milk
                        </GetH4>
                        <GetP3>
                            Savor the perfect union of tradition and comfort by enjoying our tea with milk. 
                            Elevate your tea-drinking experience as the rich, 
                            robust flavors intertwine with the creamy embrace of milk, 
                            creating a symphony of taste that lingers in every delightful sip.
                        </GetP3>
                        <Button />
                </GetContent>
               
            </GetCard01>
            <GetCard01>
                  
                    <GetContent>
                        <GetH4>
                            With Ice
                        </GetH4>
                        <GetP3>
                        Embrace the refreshing symphony of flavors as you take a cool journey through our teas enjoyed with ice. 
                        Immerse yourself in the invigorating fusion of iced tea, 
                        where each sip unfolds a delightful dance of chilled sophistication and exceptional taste.

                        </GetP3>
                        <Button />
                    </GetContent>
                    
                    <GetImage01>
                        <img src={SelectedImage002} alt=""/>
                    </GetImage01>
            </GetCard01>
        </GetCards>
    </GetContainer>
  )
}

export default index
