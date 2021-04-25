import React, { useState, useEffect, usePrevious } from 'react'

function File() {
	var [count, setcount] = useState(0)
	var date = new Date()
	const [list, setlist] = useState([])

	const handleClick = () => {
		setcount(count + 1)
		var d = {
			hour: date.getHours(),
			min: date.getMinutes(),
			sec: date.getUTCSeconds(),
		}
		pushlist(d)
	}

	const pushlist = (d) => {
		const newlist = [d, ...list]
		setlist(newlist)
		console.log(list)
	}

	return (
		<div>
			<button
				onClick={handleClick}
				type='button'
				className='btn btn-outline-danger'
			>
				Click here
			</button>
			<p>You clicked {count} times</p>
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

export default File
