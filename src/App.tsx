import './App.css'
import Search from './pages/search'
import NotFound from './pages/not-found'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Search />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	</BrowserRouter>
);

export default App
