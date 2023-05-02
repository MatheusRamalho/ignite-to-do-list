import styled from "styled-components";

export const ProgressTaskWrapper = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        font-weight: var(--font-bold);
        color: var(--blue-300);

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;

        &:last-child {
            color: var(--purple-300);
        }

        span {
            width: 2.5rem;
            height: 2rem;
            padding: 0.5rem;
            border-radius: 999px;
            background-color: var(--gray-400);

            font-size: var(--font-sm);
            color: var(--gray-200);

            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;
