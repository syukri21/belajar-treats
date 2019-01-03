import React, { Component } from 'react';
import Header from '../../components/header';
import { Helmet } from '@treats/helmet';

import style from './home.css';

class Home extends Component {
	render() {
		return (
			<div className={style.home}>
				<h1>Home</h1>
			</div>
		);
	}
}

export default Home;
