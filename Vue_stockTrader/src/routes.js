import Home from './components/Home.vue';
import Portfolio from './components/portfolio/portfolio.vue';
// import Stocks from './components/stocks/stocks';

const Stocks = resolve => {
  require.ensure(['./components/stocks/stocks.vue'], () => {
      resolve(require('./components/stocks/stocks.vue'));
  });
};

// const User = resolve => {
//   require.ensure(['./components/user/User.vue'], () => {
//       resolve(require('./components/user/User.vue'));
//   }, 'user');
// };

export const routes = [
  { path: '', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/stocks', component: Stocks }
];