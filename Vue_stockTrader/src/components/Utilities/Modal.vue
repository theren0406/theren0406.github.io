<template>
  <div class="modal fade" :class="{show: showModal}" tabindex="-1" role="dialog">
    <div class="modal-dialog" :class="[size]">
      <div class="modal-content">
        <div v-if="content === 'saveData'">
          <div class="modal-body saved">
            紀錄已儲存
            <img src="Vue_stockTrader/src/assets/ok.jpg" alt="ok" class="ok">
          </div>
        </div>
        <div v-else>
          <div class="modal-header">
            <h5 class="modal-title">是否要讀取此紀錄</h5>
            <button @click="closeModal" type="button" class="close" aria-label="Close">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body row">
            <div class="col-6">
              <p class="title">我的投資組合</p>
              <p v-for="stock in portfolio.portfolioStocks" :key="stock.id">
                {{ stock.name }}
                <span> x {{ stock.quantity }}</span>
              </p>
              <p>持有基金: <span>{{ portfolio.funds | currency }}</span></p>
            </div>
            <div class="col-6">
              <p class="title">期貨價格</p>
              <p v-for="stock in stocks" :key="'port_'+ stock.id">
                {{ stock.name }}
                <span>&ensp;{{ stock.price.toFixed(1) }}</span>
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <button @click="loadData" type="button" class="btn btn-custom">確定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["showModal", "size", "content"],
  computed: {
    ...mapGetters({
      stocks: "tempStocks",
      portfolio: "tempPortfolio"
    })
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    loadData() {
      this.closeModal();
      this.$store.dispatch("loadData");
    }
  }
};
</script>

<style>
.modal-dialog {
  margin: 6rem auto;
}
.modal-xs {
  max-width: 200px;
}
.modal-m {
  max-width: 400px;
}
.modal.show {
  display: block;
  transition: opacity 0.2s;
}
.modal-title {
  margin-top: 10px;
  margin-left: 15px;
}
.modal-header, .modal-footer {
  border: none;
}
.modal-body .col-6 {
  padding-left: 25px;
  padding-right: 5px; 
}
.modal-footer {
  padding-top: 0;
}
.saved {
  line-height: 30px;
  text-align: center;
  letter-spacing: 1px;
  padding: 1.2rem 1rem;
}
.ok {
  width: 30px;
  vertical-align: top;
}
.title {
  color: rgb(255, 166, 0);
  font-weight: bold;
  font-size: 17px;
}
</style>

