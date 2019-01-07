import React, { Component } from 'react';
import classnames from 'classnames';
import { withRouter, Link } from '@treats/router';

import style from './header.css';

const nav = [ 'Dashboard', 'Trade', 'Wallet' ];

class Header extends Component {
	state = {
		active: 'Dashboard',
		left: 1
	};

	// handle active color on navbar
	handleActiveColor = (nav) => nav === this.state.active;

	// handle click on navbar
	handleClick = (nav) => () => {
		this.setState({
			active: nav
		});
		if (nav === 'Dashboard') {
			return this.props.history.push('/');
		}
	};

	handleClickLeftNav = (key) => () => {
		this.setState({
			left: key
		});
	};

	render() {
		const { location } = this.props;
		return (
			<div className={style.header}>
				<div>
					<h1>Rekeningku</h1>
				</div>
				<div className={style.navbar}>
					<ul>
						{nav.map((nav) => (
							<li
								key={nav}
								onClick={this.handleClick(nav)}
								className={classnames({
									[style.active]: this.handleActiveColor(nav)
								})}
							>
								{nav}
							</li>
						))}
					</ul>
					<ul>
						<Link
							href='/login'
							onClick={this.handleClickLeftNav(1)}
							className={classnames(style.button, {
								[style.btnActive]: location.pathname === '/login'
							})}
						>
							Masuk
						</Link>
						<Link
							href='/register'
							onClick={this.handleClickLeftNav(2)}
							className={classnames(style.button, {
								[style.btnActive]: location.pathname === '/register'
							})}
						>
							Daftar
						</Link>
					</ul>
				</div>
			</div>
		);
	}
}

export default withRouter(Header);
