import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    /* border: 1px solid red; */
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const ProductContent = styled.div`
  text-align: left;
  @media screen and (max-width: 768px) {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

  }
`;

export const ProductH01 = styled.h3`
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: 0em;
  margin-bottom: 0px;
  color: #e16e4e;
  text-align: left;
  @media screen and (max-width: 768px) {
    font-size: 24px;
       /* width: 380px; */
  }
`;

export const ProductH4 = styled.h4`
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0em;
  margin-bottom: 0px;
  text-align: left;

  @media screen and (max-width: 768px) {
 font-family: Bitter;
font-size: 24px;
font-weight: 600;
line-height: 32px;
letter-spacing: 0em;
margin-top: 0px;

      text-align: left;
  }
`;

export const ProductP01 = styled.p`
  font-family: Mulish;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  margin-top: 0px;
  color: #202020;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const ProductP3 = styled.p`
  font-family: Mulish;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  
  }
`;

export const ProductCards = styled.div`
width: 70%;


  @media screen and (max-width: 768px) {
   width: 100%;
  }
`;

export const ProductCard01 = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;



export const ProductSmallCard01 = styled.div`
 
  display: none;
  

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ProductImage01 = styled.div`
  width: 100%;


  @media screen and (max-width: 768px) {
   img {
    max-width: 100%;
   
  }

  
  }
`;

export const ProductCard02 = styled(ProductCard01)`
 @media screen and (max-width: 768px) {
 
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    width: 320px;
    height: auto;
  
  }
`;

export const Button = styled.button`
  background-color: #e16e4e;
  border: none;
  color: white;
  font-family: Bitter;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  padding: 12px 24px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
