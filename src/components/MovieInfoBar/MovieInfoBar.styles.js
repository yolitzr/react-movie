import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    min-height: 95px;
    padding: 0 2rem;
    background: var(--darkGrey);
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	max-width: var(--maxWidth);
	margin: 0 auto;
	color: var(--white);

	.column {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
		margin: 0 1rem;
		padding: 0.8rem;
		border-radius: 20px;
		background: var(--medGrey);

		::first-child {
			margin-left: 0;
		}

		::last-child {
			margin-right: 0;
		}
	}

	@media screen and (max-width: 768px) {
		display: block;

		.column {
			margin: 1.2rem 0;
		}
	}
`;