import React from 'react'
import styled from 'styled-components'
// import { theme } from '../../utilis/theme'


const SidebarContainer = styled.aside`
	background: white;
	width: 28%;
	
`

const Sidebar = () => (
	<SidebarContainer>
		<section>
			kategorie wpisów
		</section>
		<section>
			tagi
		</section>
		<section>
			fb
		</section>
		<section>
			ig
		</section>
		<section>
			yt
		</section>
	</SidebarContainer>
)

export default Sidebar;