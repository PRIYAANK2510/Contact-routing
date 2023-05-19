/* eslint-disable react/prop-types */

import { Route, Routes } from 'react-router-dom';
import CreateContact from '../pages/CreateContact';
import Home from '../pages/Home';
import routes from './routes.json';

const PageRoutes = () => {
	return (
		<Routes>
			<Route
				path={routes.HOME}
				element={<Home />}
			/>
			<Route
				path={routes.CREATE_CONTACT}
				element={<CreateContact />}
			/>
		</Routes>
	);
};
export default PageRoutes;
