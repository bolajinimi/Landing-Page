import styled from "styled-components";


export const AboutContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
  background-color: #FFFFFF;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
     margin-left: 20px;
    margin-right: 20px;
   
}
  `;

  export const AboutWrapper = styled.div`
  width: 499px;
  @media screen and (max-width: 768px) {
    width: 330px;
    margin-left: 20px;
    margin-right: 20px;
     
}
  
  `;
    export const AboutContent = styled.div`

      @media screen and (max-width: 768px) {
    width: 379px;
     
}
  
  
  `;
    export const AboutP1 = styled.p`
    font-family: Mulish;
font-size: 18px;
font-weight: 400;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
color: #333333;
@media screen and (max-width: 768px) {
  font-size: 14px;
    width: 330px;

}
  
  
  `;
  export const AboutH1 = styled.h2`
    font-family: Bitter;
    font-size: 64px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
    color: #E16E4E;
    margin-bottom: 0px;
    @media screen and (max-width: 768px) {
        font-size: 32px;

        line-height: 64px;

    }
;
  
  
  `;
   export const AboutImage = styled.div`

  width: 460.57px;
  height: 449px;
  margin-top: 50px;

  img {
  width: 100%;
  height: auto;
}
 @media screen and (max-width: 768px) {
  
    width: 320px;  
    margin-bottom: 0px; 
img {
  width: 100%;
    margin-right: 0px;
}
 }



  
  `;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 235px;
    height: 56px;
    background-color: #E16E4E;
@media screen and (max-width: 768px) {
  display: none; 
}
 `;

export const Button = styled.button`

background-color: #E16E4E;
border: none;
color: white;
font-family: Bitter;
font-size: 16px;
font-weight: 600;
line-height: 24px;
letter-spacing: 0em;


`
