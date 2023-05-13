import {createGlobalStyle} from 'styled-components'
import Poppins from "./assets/Poppins-Regular.ttf"

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @font-face {
      font-family:"Poppins";
      src: url(${Poppins}) format("ttf");
    }
  }
`
