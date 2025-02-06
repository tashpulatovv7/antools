import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header/Header';
import './index.css';
import Main from './main/main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<div className='container'>
		<React.StrictMode>
			<Header />
			<Main />
		</React.StrictMode>
	</div>
);
