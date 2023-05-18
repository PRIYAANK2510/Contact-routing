/* eslint-disable react/prop-types */

import { Route, Routes } from 'react-router-dom';
import CreateContact from '../pages/CreateContact';
import Home from '../pages/Home';

const PageRoutes = ({ contacts, handleSubmit }) => {
	return (
		<Routes>
			<Route
				path={'/'}
				element={<Home contacts={contacts} />}
			/>
			<Route
				path={'/create-contact'}
				element={<CreateContact handleSubmit={handleSubmit} />}
			/>
		</Routes>
	);
};
export default PageRoutes;
