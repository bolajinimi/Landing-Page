import styled from "styled-components";

export const GetContainer = styled.div`
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    @media screen and (max-width: 768px) {
     margin-left: 20px;
    margin-right: 20px;
   
}

`
export const GetContent = styled.div`

text-align: center;
 @media screen and (max-width: 768px) {
display: flex;
flex-direction: column;
justify-content: center;
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

@media screen and (max-width: 768px) {
    font-family: Bitter;
font-size: 24px;
font-weight: 700;
line-height: 48px;
letter-spacing: 0em;


   
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
    font-size: 24px;
    line-height: 36px; 

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
    font-family: Mulish;
font-size: 18px;
font-weight: 400;
line-height: 32px;
letter-spacing: 0em;
    text-align: center;
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
color: #333333;

@media screen and (max-width: 768px) {
   font-size: 16px;
 
}

`
export const GetCards = styled.div`
margin-top: 50px;
width: 70%;
`
export const GetCard01 = styled.div`

  height: auto;
  display: flex;
  flex-direction: row;
  
  

@media screen and (max-width: 768px) {
  max-width: 100%;
  margin-right: 0;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 100%;
      height: auto;
    
    }
  
 
}
`
export const GetSmallCard01 = styled.div`
  
  display: none;

@media screen and (max-width: 768px) {
  max-width: 100%;
  margin-right: 0;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 100%;
      height: auto;
    
    }
}
`
export const GetCard02 = styled.div`
width: 953px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 20px;
margin-bottom: 50px;
@media screen and (max-width: 768px) {
  display: none;
  
   
}
`
export const GetImage01 = styled.div`

width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 20px;
margin-bottom: 50px;
img {
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
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    height: 56px;
    background-color: #E16E4E;
margin-bottom: 20px;

@media screen and (max-width: 768px) {
  width: auto;
  padding: 0px; 
  margin-right: 100px;
  box-sizing: border-box; 
  flex-direction: column; 
  gap: 10px; 
  height: auto; 
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
padding: 12px 24px; 

@media screen and (max-width: 768px) {
  width:auto; 
   margin-right: 0;
}

`