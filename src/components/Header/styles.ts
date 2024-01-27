import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row ;
  align-items: center ;
  justify-content: space-between;
  max-height: 50px;
  font-family: 'Roboto';
  background-color: red;
  width:100% ;

  border-bottom: 20px solid blue;

img{
    max-width: 30px ;
  }
`;

export const ComparativeButton = styled.div`
img {
    border-radius: 100% ;
  }
  `