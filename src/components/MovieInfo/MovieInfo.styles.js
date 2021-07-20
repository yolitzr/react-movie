import styled from "styled-components";
//Image
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
	padding: 3rem 2rem;
	background: ${({ backdrop }) =>
		backdrop
			? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})`
			: '#000'};
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	animation: animateMovieInfo 1s;

	@keyframes animateMovieInfo {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    margin: 0 auto;
    background: rgba(40, 25, 70, 0.5);
    border-radius: 25px;

    @media screen and (max-width: 768px) {
        display: block;
        max-height: none;
    }
`;

export const Text = styled.div`
	width: 100%;
	padding: 4rem;
	color: var(--white);
	overflow: hidden;

    h2 {
        margin: 1.5rem 0;
    }

    h4 {
        margin: 0 0 1rem 0;
    }

	.rating-directors {
        display: flex;
        justify-content: flex-start;
        margin: 1.5rem 0;
	}

    .score {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        margin: 0.4rem 0 0 0 ;
        font-weight: 800;
        background: #fff;
        color: #000;
        border-radius: 50%;
    }

    .director {
        margin: 0 0 0 2rem;
        
        p {
            margin: 0;
        }
    }

    h2 {
        @media screen and (max-witdh: 768px) {
            font-size: var(--fontBig);
        }
    }
`;
