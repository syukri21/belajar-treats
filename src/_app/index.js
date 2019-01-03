import React, { Component } from 'react';
import { Helmet } from '@treats/helmet';
import { Route, Switch } from '@treats/router';
import routes from '@treats/route';
import Header from '@components/header';
import theme from './theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

class App extends Component {
	render() {
		const { language } = this.props;
		return (
			<div id='my-custom-app'>
				<Helmet>
					<html lang={language} />
				</Helmet>
				<MuiThemeProvider theme={theme}>
					<Header />
					<Switch>
						{routes.map((entry) => <Route key={entry.path} {...entry} />)}
					</Switch>
				</MuiThemeProvider>
			</div>
		);
	}
}

export default App;
