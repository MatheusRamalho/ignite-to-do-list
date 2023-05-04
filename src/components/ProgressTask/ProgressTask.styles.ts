import styled from "styled-components";

export const ProgressTaskWrapper = styled.div`
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
            padding: 0.3rem 0.8rem;
            border-radius: 999px;
            background-color: var(--gray-400);

            font-size: var(--font-md);
            color: var(--gray-200);

            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
    }
`;
