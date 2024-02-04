import styled from "styled-components";
import HeroImg from "../../assets/Images/Landing.png";

export const HeroContainer = styled.div`
  background-image: url(${HeroImg});
  background-size: cover;
  height: 720px;
`;
export const HeroContent = styled.div`
  display: flex;
  padding-top: 100px;
  padding-bottom: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding-top: 0px;
  padding-bottom: 0px;
}
 
`;
export const H01 = styled.h1`
font-family: Oswald;
font-size: 72px;
font-weight: 400;
letter-spacing: 0em;
text-align: center;
color: #fff;
margin-bottom: 0px;

   > span {
    color: yellow;
  }
  @media screen and (max-width: 768px) {
font-size: 48px;
line-height: 64px;
}
`;
export const P01 = styled.p`
font-family: Mulish;
font-size: 16px;
font-weight: 600;
line-height: 28px;
letter-spacing: 0em;
text-align: center;
color: #FFFFFF;
  @media screen and (max-width: 768px) {
font-size: 16px;
line-height: 28px;
width: 355px;

}

 
`;
export const ContentWrapper = styled.h1`
      width: 858px;
  @media screen and (max-width: 768px) {
    width: 363px;
  }


 
`;