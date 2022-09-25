<template>
  <div v-if="notEmpty" class="row">
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </div>
  <div v-else class="empty">
    目前未持有任何期貨
    <img src="/src/assets/sorry.jpg" alt="No Stock in the portfolio">
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PortfolioStock from './PortfolioStock.vue';

export default {
  components: {
    appStock: PortfolioStock
  },
  computed: {
    ...mapGetters({
      stocks: 'portfolioStocks'
    }),
    notEmpty() {
      // if length is 0 then return false;
      return this.stocks.length;
    }
    // stocks() {
    //   return this.$store.getters.portfolioStocks;
    // }
  }
}
</script>

<style>
.empty {
  padding-top: 30px;
  text-align: center;
}
.empty img {
  width: 100px;
}
</style>

