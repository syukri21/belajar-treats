import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter } from '@treats/router';
import { Mutation } from '@treats/graphql';
import UPDATE_USER from '@graphql/mutations/updateUser.graphql';

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

	handleUpdate = (updateUser) => () => {
		const { id, email } = this.props.history.location.state;
		const user = updateUser({
			variables: {
				id,
				email: this.state.email
			}
		});
	};

	componentDidMount() {
		if (this.props.history.location.state) {
			const { email, password } = this.props.history.location.state;
			this.setState({
				email,
				password
			});
		}
	}

	render() {
		const { classes } = this.props;
		return (
			<div>
				<div className={classes.loginRoot}>
					<Card className={classes.root}>
						<CardContent className={classes.content}>
							<TextField
								label='Email'
								value={this.state.email}
								onChange={this.handleChange('email')}
								margin='normal'
							/>
							<TextField
								label='Password'
								value={this.state.password}
								onChange={this.handleChange('password')}
								margin='normal'
							/>
							<Mutation mutation={UPDATE_USER}>
								{(updateUser) => {
									return (
										<Button
											variant='contained'
											className={classes.btnLogin}
											color='primary'
											onClick={this.handleUpdate(updateUser)}
										>
											Login
										</Button>
									);
								}}
							</Mutation>
						</CardContent>
					</Card>
				</div>
			</div>
		);
	}
}

const withRouterLogin = withRouter(Login);

export default withStyles(styles)(withRouterLogin);
