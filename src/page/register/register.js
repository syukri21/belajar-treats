import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './register.css';
import Header from '../../components/header';
import { styles } from './styles';
import style from './register.css';

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
								value={this.state.nama}
								onChange={this.handleChange('email')}
								margin='normal'
							/>
							<TextField
								id='standard-name'
								label='Password'
								value={this.state.nama}
								onChange={this.handleChange('password')}
								margin='normal'
							/>
							<TextField
								id='standard-name'
								value={this.state.nama}
								label='Konfirmasi Password'
								onChange={this.handleChange('konfirmasiPassword')}
								margin='normal'
							/>
							<div className={classes.checkBox}>
								<Checkbox
									color='primary'
									checked={this.state.checkbox}
									onChange={this.handleCheckBox}
									value={true}
								/>
								<Typography>
									Saya menyetujui Syarat dan Ketentuan
								</Typography>
							</div>
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

export default withStyles(styles)(Register);
