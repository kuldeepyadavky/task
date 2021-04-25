import React, { useEffect, useState } from 'react'

function Header() {
	const [timer, setTimer] = useState(new Date())
	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(new Date())
		}, 300000) // 5mins = 5 * 60 * 1000
		return () => clearInterval(interval)
	}, [])
	return (
		<div className='header'>
			<div className='logo'>
				<img src='images/logo.jpeg' alt='logo' />
			</div>
			<div className='nav'>
				<p className='head'>header</p>
				<p className='current__time'>
					Current time is {timer.getHours()}:{timer.getMinutes()}:
					{timer.getUTCSeconds()}
				</p>
			</div>
		</div>
	)
}

export default Header
