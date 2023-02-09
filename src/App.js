import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './app/Server/AuthConfig';
import ProtectedRoute from './app/Components/ProtectedRoute';
import Account from './app/Components/Account';
import Signin from './app/Components/SignIn';
import Signup from './app/Components/SignUp';
import Home from './app/Pages/Home';
import Main from './app/Components/Main';

function App() {
	return (
		<div>
			<AuthContextProvider>
        <Main />
				<Routes>
          <Route path='/' element={<Home />} />
					<Route path='/signin' element={<Signin />} />
					<Route path='/signup' element={<Signup />} />
					<Route
						path='/account'
						element={
							<ProtectedRoute>
								<Account />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</AuthContextProvider>
		</div>
	);
}

export default App;
