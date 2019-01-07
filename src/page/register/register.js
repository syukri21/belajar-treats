import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Mutation, Query } from '@treats/graphql';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import './register.css';
import Header from '../../components/header';
import { styles } from './styles';
import style from './register.css';
import addUser from '@graphql/mutations/addUser.graphql';
import user from '@graphql/queries/user.graphql';

const showusers = gql`
	query USERS {
		Users {
			id
			username
			password
			email
		}
	}
`;

class Register extends Component {
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

	handleSubmit = (add, refetch) => async () => {
		await add({
			variables: {
				username: this.state.nama,
				email: this.state.email,
				password: this.state.password
			}
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<div>
				<div style={{ padding: 10 }}>
					<Card className={classes.root}>
						<CardContent className={classes.content}>
							<TextField
								id='standard-name'
								label='Nama'
								value={this.state.nama}
								onChange={this.handleChange('nama')}
								margin='normal'
							/>
							<TextField
								id='standard-name'
								label='Email'
								value={this.state.email}
								onChange={this.handleChange('email')}
								margin='normal'
							/>
							<TextField
								id='standard-name'
								label='Password'
								value={this.state.password}
								onChange={this.handleChange('password')}
								type='password'
								margin='normal'
							/>
							<TextField
								id='standard-name'
								value={this.state.konfirmasiPassword}
								label='Konfirmasi Password'
								onChange={this.handleChange('konfirmasiPassword')}
								margin='normal'
								type='password'
							/>
							<div className={classes.checkBox}>
								<Checkbox
									color='primary'
									checked={this.state.checkbox}
									onChange={this.handleCheckBox}
									value={this.state.checkbox}
								/>
								<Typography>
									Saya menyetujui Syarat dan Ketentuan
								</Typography>
							</div>

							<Mutation
								mutation={addUser}
								update={(cache, { data: { addUsers } }) => {
									const cached = cache.readQuery({
										query: user
									});
									console.log('​Register -> render -> cached', cached);

									console.log(addUsers);
									cache.writeQuery({
										query: user,
										data: {
											Users: [ ...cached.Users, addUsers ]
										}
									});
								}}
							>
								{(adduser) => {
									return (
										<Button
											variant='contained'
											className={classes.btnLogin}
											color='primary'
											onClick={this.handleSubmit(adduser)}
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

export default withStyles(styles)(Register);
