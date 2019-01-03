import AsyncLoader from '@treats/component/async-loader';
import AsyncComponent from '@treats/component/async-component';
import Header from './header';

// const Header = AsyncLoader({ component: import('./header') });

export default AsyncComponent(module, Header);
