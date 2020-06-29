import React from 'react'
import logo from '../../images/ngn-logo.png'
import styled from 'styled-components'
import { theme } from '../../utilis/theme'

const HeaderContainer = styled.header`

	background-color: ${theme.colors.beige};
	text-align: center;
	padding: 40px 0 20px;

	img {
		max-width: 170px;
	}

`


const Header = () => (
	<HeaderContainer className="blog-header">
		<img src={logo} />
	</HeaderContainer>
)

export default Header;