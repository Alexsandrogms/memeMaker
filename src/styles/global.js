import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Robot', sans-serif;
  }

  button, 
  input {
    outline: 0;
  }

  button {
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    height: 10px;
  }

`;
