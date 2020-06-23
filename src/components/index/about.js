import React from 'react'
import styled from 'styled-components'
import img from '../../images/about-ngn.jpg';

const AboutContainer = styled.section`

		height: 100%;
		
		@media(orientation: landscape){
			padding: 40px 0;

			@media(min-width: 820px){
				padding: 110px 0 200px;
			}
			@media(min-width: 1200px){
				padding: 180px 0 200px;
			}

		}

		@media (orientation: portrait){

			@media(min-width: 768px) {
				padding: 30px 0 0;
			}

			@media(min-width: 920px) {
				padding: 110px 0 200px;
			}
		

		}
		
		
	
	
		.container {
			display: flex;
			height: 100%;
			flex-wrap: wrap;

	
			@media (orientation:landscape){
				align-items: center;
				@media (min-width: 1024px){
					flex-wrap: nowrap;
					align-items: flex-end;
				}
			}
	
	
			.col-1 {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 50%;
				position: relative;
	
	
				@media (orientation:landscape){
					width: 50%;
					height: 100%;
					
					@media (min-width: 1024px){
						width: 50%;
						height: 100%;
					}
				}

				@media (orientation:portrait){
					@media(min-width: 768px){

					}
				}

	
				.about__img {
					background-image: url(${img});
				
					width: calc(100% + 60px);
					margin: 0 -30px;
					height: 260px;
					background-size: cover;
					background-position: 20%;
					position: relative;
					box-shadow: 5px 5px 5px rgba(0,0,0,.025);
	
					@media (orientation: portrait){
						@media (min-width: 768px){
							height: 350px;
							width: 90%;
						}
						@media (min-width: 920px){
							height: 400px;
							width: 80%;
						}
						@media (min-width: 1024px){
							height: 400px;
							width: 590px;
						}
					}

					@media (orientation:landscape) {
						width: 90%;
						height: 300px;
						@media (min-width: 1024px) {
							height: 310px;
							width: 100%;
						}
					}
	
					
	
					@media (min-width: 1366px) {
						width: 430px;
						height: 490px;
						
					}
					
	
				}

				.white_block {
					margin-bottom: -90px;

					@media(max-width: 767.9px){
						display: none;
					}

					@media(min-width:768px){
						margin-bottom: -60px;
						height: 65%;
					}
					@media(min-width:920px){
						height: 35%
					}
				}
		

				
	
	
			}
	
			.col-2 {
				width: 100%;
				display: flex;
				align-items: center;
				//justify-content: center;
				height: 50%;

				@media(max-width: 767.9px){
					background: white;
					margin: 40px 0;
					padding: 20px 20px 10px 0;
					position: relative;

					&:before {
						content:'';
						display: block;
						background: white;
						margin-left: -50px;
						width: 100%;
						height: 100%;
						position: absolute;
						left: 0;
						top:0;
						z-index:-1;
					}
				}
	
	
				@media (orientation:landscape){
					margin-top: 50px;
					width: 50%;
					height: 100%;
			
					@media (min-width: 1024px){
						width: 50%;
						height: 100%;
					}
				}

				@media (orientation:portrait){

					@media(min-width: 768px){
						margin-top: 120px;
					}

					@media(min-width: 920px){
						margin-top: 0;
					}

				}
	
				.about__text {
					
					padding-bottom: 20px;

					
	
				}
	
	
			}
		}

`

const About = ({ dictionary, lang }) => (

	<AboutContainer className="section about " id="about">
		<div className="container">
			<div className="col-1">
				<div className="about__img rellax" data-rellax-speed="-0.5" ></div>
				<div className="white_block" ></div>
			</div>
			<div className="col-2">
				<div className="about__text">
					<h2>{lang === 'pl' ? dictionary.pl.about_title : dictionary.en.about_title}.</h2>
					<p>{lang === 'pl' ? dictionary.pl.about : dictionary.en.about}</p>
				</div>
			</div>
		</div>
	</AboutContainer>
)

export default About;