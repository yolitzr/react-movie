import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 0 20px;
	background: var(--darkPurple);
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: var(--maxWidth);
	padding: 1rem;
	margin: 0 auto;
	color: var(--white);

		a {
			color: var(--white);
			text-decoration: none;
		}
`;

export const LogoImg = styled.img`
	width: 200px;

	@media screen and (max-width: 500px) {
		width: 150px;
	}
`;

export const TMDBLogoImg = styled.img`
	width: 100px;

	@media screen and (max-width: 500px) {
		width: 75px;
	}
`;

