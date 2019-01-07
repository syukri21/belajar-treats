import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import REMOVE_USER from '@graphql/mutations/remove.graphql';
import UPDATE_USER from '@graphql/mutations/updateUser.graphql';
import USERS from '@graphql/queries/user.graphql';
import { Mutation } from '@treats/graphql';
import { graphql } from 'react-apollo';
import Button from '@material-ui/core/Button';
import { withRouter } from '@treats/router';

import styles from './styles';

class List extends React.Component {
	handleDelete = (removeUser) => async () => {
		await removeUser({
			variables: {
				id: this.props.item.id
			}
		});
		return this.props.data.refetch(USERS);
	};

	handleUpdate = () => {
		const { id, email, password } = this.props.item;
		this.props.history.push({
			pathname: '/login',
			state: {
				id,
				email,
				password
			}
		});
	};

	render() {
		const { item, key, classes } = this.props;
		return (
			<Card key={key} className={classes.root}>
				<CardHeader title={item.nama} />
				<CardContent>
					<Grid container>
						<Grid item xs={6}>
							<Typography variant='subtitle2'>Email</Typography>
						</Grid>
						<Grid item xs={6}>
							<Typography variant='subtitle2'>{item.email}</Typography>
						</Grid>
					</Grid>
				</CardContent>
				<CardActions>
					<Mutation mutation={REMOVE_USER}>
						{(removeUser) => {
							return (
								<Button onClick={this.handleDelete(removeUser)}>
									Delete
								</Button>
							);
						}}
					</Mutation>
					<Button variant='contained' onClick={this.handleUpdate}>
						Update
					</Button>
				</CardActions>
			</Card>
		);
	}
}

const withApolloList = graphql(USERS)(List);
const withRouterList = withRouter(withApolloList);
export default withStyles(styles)(withRouterList);
