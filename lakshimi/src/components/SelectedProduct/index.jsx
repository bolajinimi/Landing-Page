import React from 'react'
import { SelectedContainer, SelectedContent, SelectedH01, SelectedP01,SelectedCards, SelectedImage01, SelectedCard01, SelectedCard02, SelectedH4, SelectedP3, SelectedImage02 } from './selected.styles'
import Button  from '../Button'
import SelectedImage001 from '../../assets/Images/image01.png'
import SelectedImage002 from '../../assets/Images/image02.png'


const index = () => {
  return (
    <SelectedContainer>
        <SelectedContent>
            <SelectedH01>
                Selected Product
            </SelectedH01>
            <SelectedP01>
                    Indulge in Our Exceptional Tea Collection.
            </SelectedP01>
        </SelectedContent>

        <SelectedCards>

            <SelectedCard01>
                <SelectedImage01>
                    <img src={SelectedImage001} alt="" />
                </SelectedImage01>
                <SelectedContent>
                        <SelectedH4>
                            Premium Honey Tea
                        </SelectedH4>
                        <SelectedP3>
                                As a product delivered by a tea sommelier from a tea 
                                specialty shop, we have maximized the flavor of the tea leaves. We blend powdered multi-floral honey from 
                                Spain into the tea. The sweetness of the honey 
                                is so strong that there is no need to use sugar. Just one sip 
                                brings a feeling of happiness, a rich flavor. 
                                It’s a delicious tea, whether hot or iced, straight or as a milk tea.
                                where every sip is a celebration of taste and tranquility.
                        </SelectedP3>
                </SelectedContent>
                <Button />
            </SelectedCard01>
            <SelectedCard02>
                    <SelectedImage02>
                        <img src={SelectedImage002} alt=""/>
                    </SelectedImage02>
                    <SelectedContent>
                        <SelectedH4>
                            Premium Honey Lemon Tea
                        </SelectedH4>
                        <SelectedP3>
                            Indulge in the harmonious blend of nature's finest 
                            ingredients with Lakshimi Premium Honey Lemon Tea. 
                            Crafted with meticulous care, this exquisite infusion 
                            combines the sweetness of pure honey, the zest of 
                            sun-kissed lemons, and the premium quality tea 
                            leaves to create a tea experience like no other. Elevate your tea 
                            ritual with Lakshimi Premium Honey Lemon Tea, where 
                            every sip is a celebration of taste and tranquility.

                        </SelectedP3>
                    </SelectedContent>
                    <Button />
            </SelectedCard02>
        </SelectedCards>
    </SelectedContainer>
  )
}

export default index
