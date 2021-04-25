import React, { useContext } from 'react'
import { UpdateContext } from '../ContextProvider'

function Sidebar() {
	const handleClick = useContext(UpdateContext)
	return (
		<div className='sidebar'>
			<p className='side'>sidebar</p>
			<button className='btn' onClick={handleClick}>
				Click here
			</button>
		</div>
	)
}

export default Sidebar
