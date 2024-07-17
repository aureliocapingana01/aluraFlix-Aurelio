import styled from "styled-components";

export const HeaderLogo = styled.header `
padding: 2em 10em;
display: flex;
justify-content: space-between;

& nav {
  display: flex;
  gap: 25px;
  color: red;

  a {
    text-decoration: none;
    color: var(--branco);
  }
} 
`