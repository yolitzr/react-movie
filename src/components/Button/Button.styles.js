import styled from "styled-components";

export const Wrapper = styled.button`
    display: block;
    width: 25%;
    min-width: 200px;
    height: 45px;
    margin: 20px auto;
    border: 0;
    border-radius: 30px;
    font-size: var(--fontMed);
    color: var(--white);
    background: var(--darkPurple);
    outline: none;
    transition: all 0.3s;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`

