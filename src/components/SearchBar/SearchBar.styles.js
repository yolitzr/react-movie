import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    padding: 0 2rem;
    background-color: var(--darkGrey);
`;

export const Content = styled.div`
    position: relative;
    width: 100%;
    height: 45px;
    max-width: var(--maxWidth);
    border-radius: 40px;
    color: var(--white);
    background: var(--medGrey);

    img {
        position: absolute;
        left: 15px;
        top: 10px;
        width: 25px;
    }

    input {
        position: absolute;
        left: 0;
        width: 95%;
        height: 45px;
        margin: 0 auto;
        padding: 0 0 0 60px;
        font-size: 1.2rem;
        border: 0;
        color: var(--white);
        background: transparent;

        :focus {
            outline: none;
        }
    }


`;
