const state = {
  funds: 1000,
  stocks: []
};

const getters = {
  portfolioStocks: (state, getters) => {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(item => item.id === stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    });
  },
  funds: state => {
    return state.funds;
  }
}

const mutations = {
  'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(item => item.id === stockId);
    if (record) {
      record.quantity += quantity
    } else {
      state.stocks.push({
        id: stockId,
        quantity,
      });
    }
    state.funds -= stockPrice * quantity; 
  },
  'SELL_STOCK'(state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(item => item.id === stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  },
  'SET_PORTFOLIO' (state, portfolio) {
    const { funds, portfolioStocks } = portfolio;
    state.funds = funds;
    state.stocks = portfolioStocks ? portfolioStocks : [];
  }
};

const actions = {
  buyStock: ({commit}, order) => {
    commit('BUY_STOCK', order);
  },
  sellStock: ({commit}, order) => {
    commit('SELL_STOCK', order);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}