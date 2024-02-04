import styled from "styled-components";

export const AwardContainer = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    background-color: #FFFAFF;
    @media screen and (max-width: 768px) {
      /* display: flex;
    flex-direction: column;
    align-items: center; */
    /* border: 1px solid red; */
     margin-left: 20px;
    margin-right: 20px;
   
}
    
    
;
  
`
export const AwardContent = styled.div`
  /* width: 65%; */
  
 @media screen and (max-width: 768px) {
    /* width: auto; */
  }

`


export const AwardP3 = styled.p`
  font-family: Mulish;
font-size: 18px;
font-weight: 400;
/* line-height: 32px; */
letter-spacing: 0em;
/* text-align: left; */
/* width: 411px; */
@media screen and (max-width: 768px) {
    text-align: center;
    font-size: 14px;
}

`
export const AwardCard01 = styled.div`
@media screen and (max-width: 768px) {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}
  
`
export const AwardCard02 = styled.div`
  @media screen and (max-width: 768px) {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}
`
export const AwardImage01 = styled.div`
 
 img {
  width: 100%;
  height: auto;
  
}
 @media screen and (max-width: 768px) {
  
    width: 80%;  
    margin-bottom: 0px; 
img {
  width: 100%;
    margin-right: 0px;
}
 
  }
`
export const AwardImage02 = styled.div`
  
`
export const AwardH01= styled.h3`
        font-family: Bitter;
font-size: 48px;
font-weight: 700;
line-height: 56px;
letter-spacing: 0em;
text-align: left;
color:  #E16E4E;
margin-bottom: 0px;
@media screen and (max-width: 768px) {
    font-size: 32px;
   text-align: center;
  }


`
export const AwardP01= styled.p`
        font-family: Mulish;
        font-size: 18px;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: 0em;
        text-align: left;
        margin-top: 0px;

`

export const AwardCards = styled.h3`
width: 465px;
display: flex;
gap: 20px;
align-items: center;
justify-content: center;
@media screen and (max-width: 768px) {
  display: flex;
    flex-direction: column;
    width: 380px;  
   
}

`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    background-color: #E16E4E;
    @media screen and (max-width: 768px) {
      width: 198px;
      height:  56px;
      gap: 10px;
      margin-bottom: 20px;
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
