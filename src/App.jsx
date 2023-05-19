import { DataProvider } from './context/DataContext';
import PageRoutes from './routes/PageRoutes';

function App() {
	return (
		<DataProvider>
			<PageRoutes />
		</DataProvider>
	);
}

export default App;
