import styled from "styled-components";

export const ProductContainer = styled.div`
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
     margin-left: 20px;
    margin-right: 20px;
   
}
    

`
export const ProductContent = styled.div`
/* border: 1px solid red; */
text-align: left;
width: 65%;
   @media screen and (max-width: 768px) {
   width: 350px;
}

`

export const ProductH01 = styled.h3`

font-family: Bitter;
font-size: 48px;
font-weight: 700;
line-height: 56px;
letter-spacing: 0em;
margin-bottom: 0px;
color: #E16E4E;
   @media screen and (max-width: 768px) {
    font-size: 32px;
}
`
export const ProductH4 = styled.h4`
font-family: Bitter;
font-size: 32px;
font-weight: 600;
line-height: 48px;
letter-spacing: 0em;
margin-bottom: 0px;
/* text-align: left; */
@media screen and (max-width: 768px) {
   font-size: 24px;
}

`
export const ProductP01 = styled.p`
font-family: Mulish;
font-size: 18px;
font-weight: 400;
line-height: 32px;
letter-spacing: 0em;
margin-top: 0px;
/* text-align: center; */
color: #202020;
@media screen and (max-width: 768px) {
   font-size: 16px;
   width: 380px;
}

`
export const ProductP3 = styled.p`
font-family: Mulish;
font-size: 18px;
font-weight: 400;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
@media screen and (max-width: 768px) {
   font-size: 16px;
   width: 380px;
}

`
export const ProductCards = styled.div`

`
export const ProductCard01 = styled.div`
width: 953px;
display: flex;
gap: 20px;
margin-bottom: 50px;
@media screen and (max-width: 768px) {
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* width: 380px;   */
   
}
`
export const ProductImage01 = styled.div`
width: 467px;
margin-right: 20px;
  @media screen and (max-width: 768px) {
    
    width: 320px;   
}

`
export const ProductCard02 = styled.div`
width: 953px;
display: flex;
gap: 20px;
margin-bottom: 50px;
@media screen and (max-width: 768px) {
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* width: 380px;   */
   
}
`