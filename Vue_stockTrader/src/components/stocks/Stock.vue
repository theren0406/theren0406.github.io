<template>
  <app-card :stock="stock">
    <app-input v-model.number="quantity" :insufficient="insufficientFunds" />
    <button class="btn btn-success" @click="buyStock" :disabled="disableBtn">
      {{ insufficientFunds ? '基金不足' : '購買' }}
    </button>
  </app-card>
</template>

<script>
import Card from "../Utilities/Card.vue";
import Input from "../Utilities/Input.vue";

export default {
  props: ["stock"],
  components: {
    appCard: Card,
    appInput: Input
  },
  data() {
    return { quantity: 0 };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
    disableBtn() {
      return this.quantity <= 0 || this.insufficientFunds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>



