import initStocks from '../../data/stocks';
import { setTimeout } from "timers";

const state = {
  stocks: [],
  priceShine: false
};

const getters = {
  stocks: state => {
    return state.stocks;
  },
  shine: state => {
    return state.priceShine;
  }
};

const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks;
  },
  'RND_STOCKS' (state) {
    state.stocks.forEach(stock => {
      // range of price change -1 to 1
      // * 1 to convert to number
      stock.price = stock.price + (Math.random() - 0.5 ).toFixed(1) * 1; 
    });
  },
  'SWITCH_SHINE': (state) => {
    state.priceShine = true;
    setTimeout(() => {
      state.priceShine = false;
    }, 250);
  }
};

const actions = {
  initStocks: ({commit}) => {
    commit('SET_STOCKS', initStocks);
  },
  randomizeStocks: ({commit}) => {
    commit('RND_STOCKS');
  },
  switchShine: ({ commit }) => {
    commit('SWITCH_SHINE');
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}