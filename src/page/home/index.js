import AsyncLoader from '@treats/component/async-loader';

const Welcome = AsyncLoader({ component: import('./home') });

export default Welcome;
