import styled from "styled-components";
import IndulgeImg from "../../assets/Images/image09.png";

export const IndulgeContainer = styled.div`
  background-image: url(${IndulgeImg});
  background-size: cover;
  height: 640px;
  margin-top: 100px;
  width: 100%;

`;

export const IndulgeContent = styled.div`
   
  display: flex;
  padding-top: 50px;
  padding-bottom: 100px;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 100px;
  gap: 40px;
  @media screen and (max-width: 768px) {
   padding-left: 0px;
   padding-right: 20px;
  }
`;
export const H01 = styled.h1`
font-family: Oswald;
font-size: 48px;
font-weight: 500;
letter-spacing: 0em;
text-align: left;
line-height: 64px;
color: #fff;
margin-bottom: 0px;

   > span {
    color: yellow;
  }
  @media screen and (max-width: 768px) {
font-size: 32px;
line-height: 64px;
}
`;
export const P01 = styled.p`
font-family: Mulish;
font-size: 18px;
font-weight: 400;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;
  @media screen and (max-width: 768px) {
font-size: 18px;
line-height: 32px;
}

 
`;
export const ContentWrapper = styled.div`
    width: 647px;
  @media screen and (max-width: 768px) {
  
    width: 340px;
   
    margin-left: 20px;
  }


 
`;



export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    width: 280px;
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
