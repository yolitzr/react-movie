import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    height: 75vh;
    background: linear-gradient(
        to bottom, rgb(225, 225, 225, 0.2)
        5%, rgb(40,15,50,0.95)
        100%
    ),
    url(${({ image }) => image}), var(--darkGrey);
    background-size: 100%, cover;
    background-position: center;
    background-repeat: no-repeat;
    animation: animateHeroImg 1s;

    @keyframes animateHeroImg {
        from {
             opacity: 0.5;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    padding: 2rem;
    margin: 0 auto;
`;

export const Text = styled.div`
    position: absolute;
    bottom: 60px;
    max-width: 720px;
    min-height: 100px;
    margin-right: 20px;
    color: var(--white);
    z-index: 100;

    h1 {
        margin-bottom: 25px;
        font-size: var(--fontSuperBig);

        @media screen and (max-width: 720px) {
            font-size: var(--fontBig);
        }
    }

    p {
        font-size: var(--fontMed);

        @media screen and (max-width: 720px) {
            font-size: var(--fontSmall);
        }
    }

    @media screen and (max-width: 720px) {
        max-width: 100%;
    }
`;