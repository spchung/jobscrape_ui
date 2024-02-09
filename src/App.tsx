import Search from './pages/search';
import NotFound from './pages/shared/not-found';
import LandingPage from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/default-layout';

const App: React.FC = () => (
	<BrowserRouter>
		<DefaultLayout>
			<Routes>

				<Route path="/search" element={<Search />} />
				<Route path="/" element={<LandingPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</DefaultLayout>
	</BrowserRouter>
);

export default App
