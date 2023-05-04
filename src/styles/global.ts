import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --font-family: 'Inter', sans-serif;
        --font-lh: 140%;
        --font-base: 400;
        --font-bold: 700;
        --font-sm: 0.75rem;
        --font-md: 0.875rem;
        --font-base: 1rem;

        --rounded-sm: 0.125rem;
        --rounded-md: 0.375rem;
        --rounded-base: 0.25rem;
        --rounded-lg: 0.5rem;

        --blue-300: #4EA8DE;
        --blue-500: #1E6F9F;
        --purple-300: #8284FA;
        --purple-500: #5E60CE;
        --red-500: #E25858;
        --white: #FFFFFF;
        --gray-100: #F2F2F2;
        --gray-200: #D9D9D9;
        --gray-300: #808080;
        --gray-400: #333333;
        --gray-500: #262626;
        --gray-600: #1A1A1A;
        --gray-700: #0D0D0D;
    }

    ::-webkit-scrollbar {
        width: 1rem;
        padding-right: 0.25rem;
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 0.125rem;
        background-color: var(--gray-500);
    }

    :focus {
        outline: transparent;
        box-shadow: 0 0 0 2px var(--blue-500);
    }

    @media (max-width: 768px) {
        html {
            font-size: 87.5%;
        }
    }

    html, body {
        scroll-behavior: smooth;
        background-color: var(--gray-600);

        color: var(--gray-200);
        -webkit-font-smoothing: antialised;
    }

    body, input, textarea, button, span, p {
        font-family: var(--font-family);
        font-size: var(--font-base);
        line-height: var(--font-lh);
        color: var(--gray-200);
    }

    .app {
        width: 100%;
        min-height: 100vh;
    }

    .app-wrapper {
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .app-main {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        padding: 8rem 1rem 1rem;

        flex: 1;
    }

    .app-content {
        margin-top: 2rem;
    }
`;
