/* eslint-disable react/prop-types */

import { Route, Routes } from 'react-router-dom';
import CreateContact from '../pages/CreateContact';
import Home from '../pages/Home';

const PageRoutes = ({
	contacts,
	handleSubmit,
	handleDelete,
	handleEdit,
	isEdit,
	setIsEdit,
}) => {
	return (
		<Routes>
			<Route
				path={'/'}
				element={
					<Home
						contacts={contacts}
						handleDelete={handleDelete}
						handleEdit={handleEdit}
						isEdit={isEdit}
						setIsEdit={setIsEdit}
					/>
				}
			/>
			<Route
				path={'/create-contact'}
				element={<CreateContact handleSubmit={handleSubmit} />}
			/>
		</Routes>
	);
};
export default PageRoutes;
