import styled from 'styled-components';

export const Box = styled.div`
padding: 5px 5px;
background: gray;
width: 100%;
@media (max-width: 800px) {
	padding: 10px 5px;
}
`;

export const Container = styled.div`
	display: flex;
	width: 600px;
	flex-direction: column;
	justify-content: space-around;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 40px;
margin-right: 10px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;
@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
font-size: 15px;
text-decoration: none;
&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 20px;
color: #fff;
margin-bottom: 3px;
font-weight: bold;
`;