import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;

        margin-bottom: 150px;
    } 
    main{
        display: flex;
        padding: 0 120px;
        @media(max-width: 768px){
            padding: 0;
            flex-direction: column;
        }
    }
    :root{
        --primary: #27AE60;
        --primary-50: #93D7AF;
        --secondary: #EB5757;

        --gray-1: #333333;
        --gray-2: #828282;
        --gray-3: #E0E0E0;
        --gray-4: #F5F5F5;

        --h1: 1.625rem
        --h2: 1.375rem
        --h3: 1.125rem
        --h4: 0.875rem
        --headline: 1rem
        --body: 0.875rem
        --caption: 0.75rem
    }
`