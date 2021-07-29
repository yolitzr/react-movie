import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	max-width: 320px;
	height: 750px;
	padding: 2rem;
	color: var(--darkPurple);

	.form {
		width: 100%;
		margin: 0.9rem 0;

		label {
			display: block;
			font-size: 1.2rem;
			font-weight: 500;
			text-align: center;
		}
	}

	input {
		width: 100%;
		height: 40px;
		margin: 0.3rem 0;
		padding: 0.5rem 1rem;
		border: 0;
		border-radius: 20px;
		background: #f3f3f4;
	}

	input::placeholder {
        font-size: 0.9rem;
        letter-spacing: 0.05rem;
    }

    input:focus {
		border: 1px solid rgba(40, 15, 50, 0.4);
		border-radius: 20px;
		outline: none;
		box-shadow: 0 0 0 3px rgb(40 15 50 / 10%);
		transition: 0.1s;
		background-color: #fff;
	}

    .error {
        color: red;
    }
`;