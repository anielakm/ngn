import React from 'react'
import styled from 'styled-components'
import { theme } from '../../utilis/theme'


const NavContainer = styled.nav`
	padding: 20px;
	box-shadow: 3px 3px 10px rgba(0,0,0,.1);
	background: white;

	ul {
		display: flex;
		
		li{

			margin: 0 10px 0 0;

			a{
				font-size: .6em;
				line-height:.6em;
				font-family: ${theme.fonts.lato};
				text-transform: uppercase;
				padding: 7px 10px;
				color: ${theme.colors.gray};

				
				
				&:hover {
					background-color: ${theme.colors.beige};
					color: white;
				}
			}
		}
	}
`

const Nav = () => (
	<NavContainer className="menu-blog">
		<ul className="container-fixed container">
			<li><a href="">Stron Główna</a></li>
			<li><a href="">Manicure Hybrydowy</a></li>
			<li><a href="">Manicure Zelowy</a></li>
			<li><a href="">Zdobienia</a></li>
			<li><a href="">Inne</a></li>
		</ul>
	</NavContainer>
)

export default Nav;