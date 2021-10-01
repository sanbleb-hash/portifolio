import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './HomePage';
import Portfolio from './Portfolio';
import Contact from './Contact';
import NotfoundPage from './NotfoundPage';

function App() {
	return (
		<Router>
			<main className=' w-screen bg-gray-100 text-red-400 font-genumu'>
				<NavBar />
				<Switch>
					<Route path='/' exact>
						<HomePage />
					</Route>
					<Route path='/portfolio'>
						<Portfolio />
					</Route>
					<Route path='/contact'>
						<Contact />
					</Route>
					<Route path='*'>
						<NotfoundPage />
					</Route>
				</Switch>
				<Footer />
			</main>
		</Router>
	);
}

export default App;
