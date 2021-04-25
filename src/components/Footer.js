import React, { useContext } from 'react'
import { Context } from '../ContextProvider'

function Footer() {
	const count = useContext(Context)

	return (
		<div className='footer'>
			<p className='foot'>footer</p>
			<p className='yourclick'> You clicked {count} times</p>
		</div>
	)
}

export default Footer
