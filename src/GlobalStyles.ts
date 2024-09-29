import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&display=swap');

    body {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }
`;

export default GlobalStyle;