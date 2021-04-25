import React, { createContext, useState } from 'react'

export const UpdateContext = createContext()
export const Context = createContext()
export const listcontext = createContext()

function ContextProvider({ children }) {
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
		const newlist = [d, ...list]
		setlist(newlist)
	}

	return (
		<Context.Provider value={count}>
			<listcontext.Provider value={list}>
				<UpdateContext.Provider value={handleClick}>
					{children}
				</UpdateContext.Provider>
			</listcontext.Provider>
		</Context.Provider>
	)
}

export default ContextProvider
