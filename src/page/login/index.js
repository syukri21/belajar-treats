import AsyncLoader from '@treats/component/async-loader';

const Login = AsyncLoader({ component: import('./login') });

export default Login;
