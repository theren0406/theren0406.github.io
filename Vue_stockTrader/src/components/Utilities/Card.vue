<template>
  <div class="col-sm-6 col-md-4 stock">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ stock.name }}
          <small v-if="stock.quantity">( Price : {{ price }} ) &emsp; 持有數量 : 
            <span>{{ stock.quantity }}</span>  
          </small>
          <small v-else>( Price: <span :class="{shine: isShine}">{{ price }}</span> )</small>
        </h5>
        <div class="row">
          <div class="col-6">
            <img :src="image" :alt="this.stock.id">
          </div>
          <div class="col-6">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  computed: {
    price() {
      return this.stock.price.toFixed(1);
    },
    image() {
      return `Vue_stockTrader/src/assets/${this.stock.id}.jpg`;
    },
    isShine() {
      return this.$store.getters.shine;
    }
  }
};
</script>

<style>
.shine {
  color: white;
}
.stock {
  margin: 10px 0;
}
.stock span {
  font-weight: bold;
}
.card img {
  width: 100%;
}
@media only screen and (max-width: 576px) {
  .card img {
    width: 140px;
  }
}
</style>




