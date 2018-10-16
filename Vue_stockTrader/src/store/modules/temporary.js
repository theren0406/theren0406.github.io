import axios from 'axios';

const state = {
  stocks: [],
  portfolio: [],
};

const getters = {
  tempStocks: state => {
    return state.stocks;
  },
  tempPortfolio: state => {
    return state.portfolio;
  }
}

const mutations = {
  'FETCH_DATA': (state) => {
    axios.get('/data.json').then(response => {
      if (response.data) {
        const key = Object.keys(response.data);
        const { stocks, funds, portfolioStocks } = response.data[key];

        state.stocks = stocks;
        state.portfolio = {
          portfolioStocks,
          funds
        };
        console.log(state.portfolio);
      }
    });
  }
}

const actions = {
  fetchData: ({ commit }) => {
    commit('FETCH_DATA');
  },
  loadData: ({ commit }) => {
    commit('SET_STOCKS', state.stocks);
    commit('SET_PORTFOLIO', state.portfolio);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}