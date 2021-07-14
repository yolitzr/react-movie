import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 2rem 2.5rem;

    h2 {
        margin-top: 2rem;
        font-size: var(--fontSuperBig);
        color: var(--medGrey);

        @media screen and (max-width: 768px) {
            font-size: var(--fontSuperBig);
        }
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Responsive Option */
    grid-gap: 2rem;
    padding-top: 2rem;
`;