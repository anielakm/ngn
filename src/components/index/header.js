import React from "react"
import logo from '../../images/ngn-logo.png'
import arrow from '../../images/arrow-white.svg'
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from 'styled-components'
import { theme } from "../../utilis/theme"

const HeaderContainer = styled.header`

	width: 100vw;
	height: 100vh;
	background: ${theme.colors.beige};
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	img {
		width: 50%;
		max-width: 260px;

		@media (orientation: landscape) {
			
			@media (max-width: 1023px) {
				width: 30%;
			}
			@media (max-width: 820px) {
				width: 18%;
			}
			@media (min-width: 1024px) {
				width: 25%;
			}
			
			
		}

		@media (orientation: portrait) {
			@media (min-width: 768px) {
				width: 30%;
			}
			@media (min-width: 1200px) {
				width: 20%;
			}
		}

	}

	.arrow {
		width: 30px;
		height: 30px;
		position: absolute;
		bottom: 10px;

		padding: 12px 8px 8px;
		border-radius: 50%;
		cursor: pointer;

		@media (min-width: 768px) {
			width: 50px;
			height: 50px;
		}
		@media(max-width: 820px) and (orientation: landscape){
			margin-bottom: 10px;
		}

		@media (min-width: 920px) {
			width: 40px;
			height: 40px;
		}

	}

	.menu {
		width: 40px;
		height: 20px;
		border-radius: 50%;
		position: absolute;
		top: 30px;
		left: 30px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		flex-direction: column;
		cursor: pointer;

		@media (min-width: 768px) {
			top: 40px;
			left: 40px;
			width: 50px;
			height: 31px;
		}

		@media (min-width: 920px) {
			top: 40px;
			left: 40px;
			width: 40px;
			height: 20px;
		}


		&__item {
			width: 75%;
			height: 2px;
			background: white;
			display: block;
			//margin: 2.5px 0;
			@media (min-width: 768px) {
				height: 3px;
			}
			@media (min-width: 920px) {
				height: 2px;
			}

		}
	}

	.lang {
		color: white;
		font-family: $lato;
		position: absolute;
		top: 30px;
		right: 30px;
		font-weight: 600;
		font-size: 1em;

		@media (min-width: 768px) {
			top: 40px;
			right: 40px;
			font-size: 1.4em;
		}

		@media (min-width: 920px) {
			font-size: .75em;
		}


		.active {
			opacity: 0.6;
		}

		span {
			cursor: pointer;
			margin: 0 5px;

			&:nth-child(2) {
				margin-right: 0;
			}

			@media (min-width: 768px) {
				margin: 0 10px;

				&:nth-child(2) {
					margin-right: 0;
				}
			}

			&:hover {
				opacity: 0.6;
			}
		}

	}

`


const Header = ({ changeLang, lang, handleMenu }) => (
	<HeaderContainer className="header">

		<div className="menu" onClick={handleMenu}>
			<span className="menu__item"></span>
			<span className="menu__item"></span>
			<span className="menu__item"></span>
		</div>

		<div className="lang">
			<span className={lang === 'pl' ? null : 'active'} onClick={() => changeLang("pl")} >PL</span> | <span className={lang === 'en' ? null : 'active'} onClick={() => changeLang("en")}>EN</span>
		</div>

		<img src={logo} alt="" />
		<img className="arrow" src={arrow} alt="" onClick={() => {
			scrollTo('#about')
		}} />


	</HeaderContainer>
)

export default Header




