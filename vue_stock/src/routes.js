import Home from './components/Home.vue';
import Portfolio from './components/portfolio/portfolio.vue';
import Stocks from './components/stocks/stocks.vue';

// const Stocks = resolve => {
//   require.ensure(['./components/stocks/stocks.vue'], () => {
//       resolve(require('./components/stocks/stocks.vue'));
//   });
// };

export const routes = [
  { path: '/vue_stock', component: Home },
  { path: '/vue_stock/portfolio', component: Portfolio },
  { path: '/vue_stock/stocks', component: Stocks }
];