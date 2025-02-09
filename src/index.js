import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './footer/Footer';
import Header from './header/Header';
import './index.css';
import Main from './main/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<div className='container'>
		<React.StrictMode>
			<Header />
			<Main />
			<Footer />
		</React.StrictMode>
	</div>
);
