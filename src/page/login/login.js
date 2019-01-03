import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Header from '../../components/header';
import './login.css';
import { styles } from './styles';
class Login extends React.Component {
	state = {
		nama: '',
		email: '',
		password: '',
		konfirmasiPassword: '',
		checkbox: false
	};

	handleChange = (type) => (e) => {
		this.setState({
			[type]: e.target.value
		});
	};

	handleCheckBox = () => {
		this.setState({
			checkbox: !this.state.checkbox
		});
	};
	render() {
		const { classes } = this.props;
		return (
			<div>
				<div className={classes.loginRoot}>
					<Card className={classes.root}>
						<CardContent className={classes.content}>
							<TextField
								label='Email'
								value={this.state.nama}
								onChange={this.handleChange('email')}
								margin='normal'
							/>
							<TextField
								label='Password'
								value={this.state.nama}
								onChange={this.handleChange('password')}
								margin='normal'
							/>
							<Button
								variant='contained'
								className={classes.btnLogin}
								color='primary'
							>
								Login
							</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Login);
