import { HOME, LOGIN, REGISTER } from './path';

const route = [
	{
		name: 'home',
		path: HOME,
		exact: true,
		disabled: true
	},
	{
		name: 'login',
		path: LOGIN,
		exact: true,
		disabled: true
	},
	{
		name: 'register',
		path: REGISTER,
		exact: true,
		disabled: true
	}
];

export default route;
