import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 1.2rem;
    border-radius: 20px;
    text-align: center;
    color: var(--white);
    background: var(--darkPurple);

    h3 {
        margin: 0.5rem 0;
        font-size: var(--fontMed);
    }

    p {
        font-size: var(--fontSmall);
    }

`;

export const Image = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
`;