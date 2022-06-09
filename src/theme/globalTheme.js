import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --primary: #0B0D17;
        --secondary: #D0D6F9;
        --white: #FFFFFF;
    }
    *,*::after, *::before{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .heading_one, 
    .heading_two, 
    .heading_three, 
    .heading_four{
        font-family: 'Bellefair', serif;
        color: var(--white);
    }
    .heading_one{
        font-size: 150px;
    }
    .heading_two{
        font-size: 100px;
    }
    .heading_three{
        font-size: 56px;
    }
    .heading_four{
        font-size: 32px;
    }
    .heading_five{
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 28px;
        color: var(--secondary);
        letter-spacing: 4.75px;
    }
    .sub_heading_one{
        font-family: 'Bellefair', serif;
        font-size: 28px;
        color: var(--white);
    }
    .sub_heading_two{
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 14px; 
        color: var(--white);
        letter-spacing: 2.35px;
    }
    .nav_text{
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 16px; 
        color: var(--white);
        letter-spacing: 2.7px;
    }
    
`;
