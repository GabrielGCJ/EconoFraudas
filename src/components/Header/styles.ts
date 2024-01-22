import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row ;
  align-items: center ;
  justify-content: space-between;
  max-height: 50px;

  background-color: red;

  width:100% ;

  img{
    max-width: 30px ;
  }

  h1 {
    font-family: 'Roboto';
  }
`;

export const ImageLogo = styled.header`
  /* img {
    width: 15%;
  } */
`;

export const ComparativeButton = styled.div`
img {
     /* width: 15%; */
    border-radius: 100% ;
  }
  `