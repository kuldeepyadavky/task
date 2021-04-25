import React, { useContext } from 'react'
import { listcontext } from '../ContextProvider'

function Content() {
	const list = useContext(listcontext)
	return (
		<div className='content'>
			{list.map((item) => {
				return (
					<p>
						You clicked at {item.hour}:{item.min}:{item.sec}
					</p>
				)
			})}
		</div>
	)
}

export default Content
