import { createGlobalStyle } from "styled-components";

 const GlobalStyle = createGlobalStyle`
    :root{
        --primary-color: #1cbbd0;
        --secondary-color:#6c757d;
        --background-dark-color: #10121A;
        --background-grey-color: #191D2B;
        --border-color: #2e344e;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127,255,.3);
        --white-color: #FFF;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191D2B;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383839;
    }

    .light-theme{
        --primary-color: #007bff;
        --secondary-color:#6c757d;
        --background-dark-color: #10121A;
        --background-grey-color: #191D2B;
        --border-color: #2e344e;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127,255,.3);
        --white-color: #151515;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #E4E4E4;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383839;
    }
    .dark-theme{
        --primary-color: #1cbbd0;
        --secondary-color:#6c757d;
        --background-dark-color: #10121A;
        --background-grey-color: #191D2B;
        --border-color: #2e344e;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127,255,.3);
        --white-color: #FFF;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191D2B;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383839;
    }

    *{
        padding: 0 ;
        margin: 0 ;
        box-sizing: border-box;
        list-style: none ;
        text-decoration: none ;
        font-family: 'Nunito', sans-serif;
        font-size: 1.2rem;
    }

    body{
        background-color: var(--background-dark-color);
        color: var(--font-light-color);
    }
    body::-webkit-scrollbar{
        width: 9px;
        background-color: #383838;
    }
    body::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: #6b6b6b;
    }
    body::-webkit-scrollbar-track{
        border-radius: 10px;
        background-color: #383838;
    }
    a{
        font-family: inherit;
        color: inherit;
        font-size: inherit;
    }
    h1{
        font-size: 3rem;
        color: var(--white-color);
        padding-bottom: 5px;
        font-style: italic;
        span{
            font-size: 3rem;
            color: var(--primary-color);
        }
    }

    //Floating toggler
    .light-dark-mode{
        position: fixed;
        right: 0;
        top: 16%;
        background-color: var(--primary-color);
        opacity: .6;
        width: 6rem;
        height: 2.3rem;
        display: flex;
        z-index: 15;
        align-items: center;
        padding-left: .8rem;
        justify-content: space-between;
        svg{
            display: flex;
            align-items: center;
            font-size: 1.8rem;
            color: var(--white-color);
        }
    }
 `;
 export default GlobalStyle;