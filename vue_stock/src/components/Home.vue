<template>
  <div class="info"> 
    <h3>期貨交易模擬</h3>
    <h6>點擊 <span>結束當日交易</span> 以更新期貨價格</h6>
    <h6>使用右上角功能 <span>存取</span> 當前投資組合 & 期貨價格 </h6>
    <p>目前持有基金 : {{ funds | currency }}</p>
    <img src="/src/assets/stock.jpg" alt="stock">
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
}
</script>

<style>
.info {
  text-align: center;
  padding-top: 10px;
}
.info h3 {
  padding-bottom: 20px;
}
.info p {
  padding-top: 10px;
}
.info span {
  color: rgb(255, 166, 0);
  font-weight: bold;
}
.info img {
  margin-left: 20px;
  width: 200px;
}
</style>


