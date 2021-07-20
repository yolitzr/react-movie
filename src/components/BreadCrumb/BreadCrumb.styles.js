import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 65px;
	background: #280f324a;
	color: var(--white);
`;

export const Content = styled.div`
	display: flex;
	width: 100%;
	max-width: var(--maxWidth);
	padding: 0 2rem;

	h3 {
		font-size: var(--fontSmall);
        font-weight: 400;
		color: var(--white);

		@media screen and (max-width: 768px) {
			font-size: 0.8rem;
		}
	}

	span {
		padding-right: 0.8rem;
		font-size: var(--fontSmall);
		color: var(--white);

		@media screen and (max-width: 768px) {
			font-size: 0.8rem;
		}
	}
`;