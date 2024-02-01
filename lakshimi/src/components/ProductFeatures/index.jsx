import React from 'react'
import { ProductContainer, ProductContent, ProductH01, ProductP01, ProductCards, ProductImage01, ProductCard01, ProductCard02, ProductH4, ProductP3 } from './product.styles'
import Button  from '../Button'
import SelectedImage001 from '../../assets/Images/image03.png'
import SelectedImage002 from '../../assets/Images/image04.png'


const index = () => {
  return (
    <ProductContainer>
        <ProductContent>
            <ProductH01>
                Product Features
            </ProductH01>
            <ProductP01>
                  Discover the Essence of Our Tea Collection
            </ProductP01>
        </ProductContent>

        <ProductCards>

            <ProductCard01>
                <ProductImage01>
                    <img src={SelectedImage001} alt="" />
                </ProductImage01>
                <ProductContent>
                        <ProductH4>
                        Honey that took over 2 years to find.
                        </ProductH4>
                        <ProductP3>
                        Discover the liquid gold that embodies patience and persistence 
                        – our honey took over 2 years to find. We have tried over a 1000 different types of honey of different locations and finally, 
                        after 2 years of extensive search and going all the way from Japan to Spain, 
                        we discovered the perfect honey for the perfect flavored blend of tea.
                        </ProductP3>
                        <Button />
                </ProductContent>
               
            </ProductCard01>
            <ProductCard02>
                  
                    <ProductContent>
                        <ProductH4>
                            Blended by Japanese tea sommelier Yoko Toda.
                        </ProductH4>
                        <ProductP3>
                        Crafted with precision and expertise, each blend bears the 
                        mark of Japanese tea sommelier Yoko Toda. Immerse yourself in the artistry of tea, 
                        perfected by a master for an unparalleled experience in every sip.

                        </ProductP3>
                        <Button />
                    </ProductContent>
                    
                    <ProductImage01>
                        <img src={SelectedImage002} alt=""/>
                    </ProductImage01>
            </ProductCard02>
        </ProductCards>
    </ProductContainer>
  )
}

export default index
