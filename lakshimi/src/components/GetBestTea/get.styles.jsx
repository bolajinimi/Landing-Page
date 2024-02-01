import styled from "styled-components";

export const GetContainer = styled.div`
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    @media screen and (max-width: 768px) {
    /* flex-direction: column; */
    /* align-items: center;
    justify-content: center; */
    border: 1px solid red;
     margin-left: 20px;
    margin-right: 20px;
   
}

`
export const GetContent = styled.div`
/* border: 1px solid red; */
text-align: center;
  @media screen and (max-width: 768px) {
  width: 380px;
}

`

export const GetH01 = styled.h3`
font-family: Bitter;
font-size: 48px;
font-weight: 700;
line-height: 56px;
letter-spacing: 0em;
margin-bottom: 0px;
color: #E16E4E;
text-align: center;
@media screen and (max-width: 768px) {
    font-size: 30px;
    font-weight: 600;
   
}
`
export const GetH4 = styled.h4`
font-family: Bitter;
font-size: 32px;
font-weight: 600;
line-height: 48px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 0px;
@media screen and (max-width: 768px) {
  display: flex;
    flex-direction: column;
    font-size: 24px;
    /* align-items: center;
    justify-content: center; */
    /* width: 380px;   */
   
}

`
export const GetP01 = styled.p`
font-family: Mulish;
font-size: 18px;
font-weight: 400;
line-height: 32px;
letter-spacing: 0em;
color: #202020;
margin-top: 0px;
@media screen and (max-width: 768px) {
  display: flex;
    flex-direction: column;
    font-size: 16px;
  
}

`
export const GetP3 = styled.p`
font-family: Mulish;
font-size: 18px;
font-weight: 400;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
margin-top: 0px;

`
export const GetCards = styled.div`
margin-top: 50px;
`
export const GetCard01 = styled.div`
width: 953px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 20px;
margin-bottom: 50px;
@media screen and (max-width: 768px) {
  display: flex;
    flex-direction: column;
    /* align-items: center;
    justify-content: center; */
    /* width: 380px;   */
   
}
`
export const GetImage01 = styled.div`
width: 467px;
height: 440px;
margin-right: 20px;
 @media screen and (max-width: 768px) {
  
    width: 320px;   

 
  }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    height: 56px;
    background-color: #E16E4E;

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