import styled from "styled-components";

export const TaskWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.5rem;

    padding: 1.5rem;
    margin-bottom: 0.75rem;
    border: 0.063rem solid var(--gray-400);
    border-radius: var(--rounded-lg);
    background-color: var(--gray-500);

    input[type="checkbox"] {
        position: relative;

        cursor: pointer;
        width: 0px;
        height: 0px;
        margin-right: 1rem;

        &:focus {
           box-shadow: none;
        }

        &::before {
            content: "";

            position: absolute;
            top: 0;
            left: 0;

            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            border: 0.125rem solid var(--blue-500);
            background-color: transparent;
        }

        &:checked::before {
            border-color: var(--purple-500);
            background-color: var(--purple-500);
        }

        &:checked::after {
            content: "";

            position: absolute;
            top: 5px;
            left: 9px;

            width: 0.313rem;
            height: 0.625rem;
            border: solid var(--white);
            border-width: 0 3px 3px 0;
            transform: rotate(45deg);
        }

        &:hover:checked::before {
            border-color: var(--purple-300);
            background-color: var(--purple-300);
        }
    }

    p {
        flex: 1;
        
        font-size: var(--font-base);
        color: var(--gray-100);
        line-height: 160%;
    }

    .line-through {
        text-decoration: line-through;
        color: var(--gray-300)
    }

    button {
        cursor: pointer;

        padding: 0.3rem 0.2rem;
        border: none;
        border-radius: var(--rounded-md);
        background-color: transparent;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background-color: var(--gray-400);

            svg {
                stroke: var(--red-500);
                fill: var(--red-500);
            }
        }
    }
`;
