import home from '@page/home';
import login from '@page/login';
import register from '@page/register';

import { HOME, LOGIN, REGISTER } from './path';

const module = {
	[HOME]: home,
	[LOGIN]: login,
	[REGISTER]: register
};

export default module;
