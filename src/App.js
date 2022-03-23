import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './HomePage';
import Portfolio from './Portfolio';
import Contact from './Contact';
import NotfoundPage from './NotfoundPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<>
			<main className=' w-screen bg-gray-100 text-blue-800 font-genumu'>
				<NavBar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='*' element={<NotfoundPage />} />
				</Routes>
				<Footer />
				<ToastContainer />
			</main>
		</>
	);
}

export default App;
