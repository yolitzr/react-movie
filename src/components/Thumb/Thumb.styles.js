import styled from "styled-components";

export const Image = styled.img`
	width: 100%;
	height: 100%;
	max-width: 720px;
	border-radius: 20px;
	box-shadow: 2px 2px 12px #805f8ef2;
	object-fit: cover;
	transition: all 0.2s ease-in-out;
	animation: animateThumb 0.5s;

	:hover {
		opacity: 0.6;
	}

	@keyframes animateThumb {
		from {
			opacity: 0;
		}
		top {
			opacity: 1;
		}
	}
`;