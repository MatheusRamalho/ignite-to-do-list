import styled from "styled-components";

export const NewTaskWrapper = styled.div`
    position: relative;

    width: 100%;
    height: 12.5rem;
    background-color: var(--gray-700);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > img, svg {
        width: 10rem;
    }

    .new-task-wrapper {
        position: absolute;
        bottom: -44px;

        width: 100%;
        max-width: 1024px;
        height: 5.5rem;
        padding: 1rem;
        border-radius: var(--rounded-lg);
    }

    .new-task-form {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .new-task-form input {
        flex: 1;

        height: 3.25rem;
        padding: 0 1rem;
        background-color: var(--gray-500);
        border-radius: var(--rounded-lg);
        border: none;

        &::placeholder {
            font-size: var(--font-md);
        }
    }

    .new-task-form button {
        cursor: pointer;

        width: 6.5rem;
        height: 3.25rem;
        padding: 1rem;
        background-color: var(--blue-500);
        border-radius: var(--rounded-lg);
        border: none;

        font-weight: var(--font-bold);
        color: var(--white);

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        transition: background-color 2s;

        &:hover {
            background-color: var(--blue-300);
        }
    }
`;
