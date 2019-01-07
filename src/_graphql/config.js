// src/_graphql/config.js
import { RetryLink } from 'apollo-link-retry';

const customConfig = {
	queryDeduplication: true,
	link: [
		// using provided apollo-link-error
		{
			type: 'error',
			callback: ({ graphQLErrors, networkError }) => {
				console.log(graphQLErrors);
			}
		},
		//using provided apollo-link-batch-http
		{
			type: 'http',
			uri: 'http://localhost:8080/graphql/'
		},
		//using custom installed RetryLink
		new RetryLink({
			delay: {
				initial: 300,
				max: Infinity,
				jitter: true
			},
			attempts: {
				max: 5,
				retryIf: (error, _operation) => !!error
			}
		})
	]
};

export default customConfig;
