import React from 'react'
import Footer from './Footer'
import Content from './Content'
import SideBar from './Sidebar'

function Body() {
	return (
		<div className='body'>
			<SideBar />
			<div className='con'>
				<Content />
				<Footer />
			</div>
		</div>
	)
}

export default Body
