import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'HS-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/HS-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}


body{
    background: linear-gradient(to right, #c7efff, #ffccf6);
    font-family: 'HS-Regular';
}

button{
    background-color: transparent;
    cursor: pointer;
    font-family: 'HS-Regular';
    border-radius: 10px;
}

button:hover {
    transform: scale(1.1);
    }
`;

export default GlobalStyle;
