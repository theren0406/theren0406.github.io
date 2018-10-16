<template>
  <app-card :stock="stock">
    <app-input v-model.number="quantity" :insufficient="insufficient" />
    <button class="btn btn-success" @click="sellStock" :disabled="disableBtn">
      {{ insufficient ? '數量不足' : '賣出' }}
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
    insufficient() {
      return this.quantity > this.stock.quantity;
    },
    disableBtn() {
      return this.quantity <= 0 || this.insufficient;
    }
  },
  methods: {
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("sellStock", order);
      this.quantity = 0;
    }
  }
};
</script>

<style>
.btn {
  margin-top: 15px;
  float: right;
}
</style>

