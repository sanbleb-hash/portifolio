import React from 'react';
import { Link } from 'react-router-dom';

const NotfoundPage = () => {
	return (
		<div>
			sorry the page you request is not up and running please{' '}
			<Link to='/'>go back</Link> keep in touch
		</div>
	);
};

export default NotfoundPage;
