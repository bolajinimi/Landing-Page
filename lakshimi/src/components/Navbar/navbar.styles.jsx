import styled from 'styled-components';



export const NavbarContainer = styled.div`
    background-color: white;
    width: 100%;
    height: 80px;

  
    
`;
export const NavbarInnerContainer = styled.div`
    background-color: #FFFAFF;
    padding: 10px 20px 0px 10px;
    margin: 0px 100px 0px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* display: flex;
    justify-content: space-between;
    margin-left: 20px; */
    
`;


export const NavImage = styled.div`


@media screen and (max-width: 768px) {
    width: 100%;
  }

`;

export const NavLeft = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 20px;
@media screen and (max-width: 768px) {
    display: none; 
  }
`;

export const NavRight = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 20px;
@media screen and (max-width: 768px) {
    display: none; 
  }
`;

export const Span01 = styled.div`
font-family: Mulish;
font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
color: #333333;

`;



