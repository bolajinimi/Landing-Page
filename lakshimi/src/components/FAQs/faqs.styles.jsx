import styled from "styled-components";

export const FAQContainer = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  
`
export const FAQH1 = styled.h2`

font-family: Bitter;
font-size: 48px;
font-weight: 700;
line-height: 56px;
letter-spacing: 0em;
text-align: center;
margin-bottom: 0px;
color: #E16E4E;

`
export const FAQP1 = styled.p`
  font-family: Mulish;
font-size: 18px;
font-weight: 400;
line-height: 32px;
letter-spacing: 0em;
text-align: left;

margin-bottom: 0px;

`
export const FAQP = styled.p`
 font-family: Mulish;
font-size: 18px;
font-weight: 400;
line-height: 32px;
letter-spacing: 0em;
text-align: center;

`

export const FAQP2 = styled.div`
 font-family: Mulish;
font-size: 18px;
font-weight: 400;
line-height: 32px;
letter-spacing: 0em;
text-align: left;



`
export const FAQContent1 = styled.div`
width: 688px;

`
export const FAQContent = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 564px;



`
export const Span = styled.div`
  font-family: Bitter;
font-size: 32px;
font-weight: 700;
line-height: 40px;
letter-spacing: 0em;
text-align: left;
color: #E16E4E;

`

export const FAQInnerContent = styled.div`
  width: 465px;
/* height: 440px; */


`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 235px;
    height: 56px;
    background-color: #E16E4E;
    margin-top: 40px;
@media screen and (max-width: 768px) {
  display: none; /* Hide on screens with a maximum width of 768px (mobile devices) */
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