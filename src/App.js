import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import ContextProvider from './ContextProvider'

function App() {
	return (
		<ContextProvider>
			<div className='App'>
				<Header />
				<Body />
			</div>
		</ContextProvider>
	)
}

export default App
