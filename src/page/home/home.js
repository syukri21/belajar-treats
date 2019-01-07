import React, { Component } from 'react';
import { Query } from '@treats/graphql';
import { graphql } from 'react-apollo';
import USERS from '@graphql/queries/user.graphql';

import List from './components/list/';
import style from './home.css';

class Home extends Component {
	render() {
		return (
			<div className={style.home}>
				<Query query={USERS}>
					{({ data, loading, error, refetch }) => {
						if (error) {
							return <span>Error! {error}</span>;
						}
						if (loading) {
							return <span>Loading...</span>;
						}
						return data.Users.map((item, key) => (
							<List item={item} key={key} />
						));
					}}
				</Query>
			</div>
		);
	}
}

export default graphql(USERS)(Home);
