import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    //RESET CSS
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    //FIM RESET CSS

    * {
        box-sizing: border-box;

        --cor-fundo-tela: #333333;
        --cor-vermelho: #AC0000;
        --cor-branco: #FFFFFF;
        --cor-preto: #151515;
        --cor-post: #171717;

        --cor-text: #FFFFFF;
        --cor-hashtag: #B7B7B7;
        --cor-button: #1877F2;
        --cor-placeholder: #EFEFEF;

        --display-none: none;
        --display-flex: flex;
        --display-block: block;
        --display-initial: initial;
    }

    a {
        text-decoration: none;
    }

    .root {
        width: 100%;
    }

    main {
        width: 100%;
        height: fit-content;
        background-color: var(--cor-fundo-tela);
        padding-bottom: 40px;
    }

    main::-webkit-scrollbar {
        display: none;
    }

    .boxInputs {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .boxInputs > input {
        width: 100%;
        max-width: 430px;
        height: 65px;
        padding: 0 18px;
        margin-bottom: 14px;
        background: var(--cor-branco);
        border: 0;
        border-radius: 6px;
    }

    input {
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        line-height: 40px;
        color: var(--cor-preta);
    }

    input::placeholder {
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        line-height: 40px;
        color: #9F9F9F;
        opacity: 1;
    }

    button {
        background: var(--cor-button);
        border: 0;
        border-radius: 6px;
    }

    button > p {
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        line-height: 40px;
        text-align: center;
        color: var(--cor-branco);
    }

    button:hover {
        filter: brightness(0.8);
    }

    img {
        object-fit: cover;
    }

    @keyframes scale-in {
        0% {
            -webkit-transform: scale(0);
                    transform: scale(0);
        }
        100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
        }
    }

    @keyframes growDown {
        0% {
            transform: scaleY(0)
        }
        80% {
            transform: scaleY(1.1)
        }
        100% {
            transform: scaleY(1)
        }
    }
`;

export default GlobalStyle;
