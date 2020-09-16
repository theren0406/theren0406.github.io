<template>
  <header>
    <nav class="navbar navbar-expand-lg my-nav">
      <router-link to="/vue_stock" exact class="navbar-brand">Stock Trader</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation"
        @click="collapse = !collapse">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" :class="{show: collapse}" id="navbarContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/vue_stock/portfolio" class="nav-link" active-class="active">我的投資組合</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/vue_stock/stocks" class="nav-link" active-class="active">購買期貨</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav">
          <li class="my-link endDay" @click="endDay">結束當日交易</li>
          <li class="nav-item dropdown">
            <a class="my-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" :aria-expanded="false" href="#">
              存取紀錄
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#" @click="saveData">儲存紀錄</a>
              <a class="dropdown-item" href="#" @click="fetch">讀取紀錄</a>
            </div>
          </li>
        </ul>
        <strong class="navbar-text">持有基金: {{ funds | currency }}</strong>
      </div>
    </nav>
    <app-Modal :showModal="saveModal" content="saveData" size="modal-xs"/>
    <app-Modal :showModal="loadModal" content="loadData" size="modal-m"
      @closeModal="closeModal" />
  </header>
</template>

<script>
import Modal from './Utilities/Modal.vue';
import { mapActions } from "vuex";
import axios from 'axios';
 
export default {
  components: {
    appModal: Modal
  },
  data() {
    return { 
      collapse: false,
      saveModal: false,
      loadModal: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: "fetchData",
      switchShine: "switchShine"
    }),
    endDay() {
      this.switchShine();
      this.randomizeStocks();
    },
    saveData() {
      this.saveModal = true;
      setTimeout(() => {
        this.saveModal = false;
      }, 1500);

      const { funds, portfolioStocks, stocks } = this.$store.getters;
      const data = {
        funds,
        portfolioStocks,
        stocks
      }
      axios.delete('/data.json', data);
      axios.post('/data.json', data);
    },
    fetch() {
      this.fetchData();
      this.loadModal = true;
    },
    closeModal() {
      this.loadModal = false;
    }
  }
};
</script>

<style>
nav {
  margin: 30px 0;
}
li {
  cursor: pointer;
}
.my-nav .navbar-toggler {
  outline: none;
  margin-right: 10px;
  border-color: rgba(255, 255, 255, 0.7);
}
.my-nav .navbar-toggler-icon {
  outline: none;
  background-image: url("data:image/svg+xml;charset=utf8,<svg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'><path stroke='rgba(255, 255, 255, 0.9)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/></svg>");
}
.my-nav {
  background-color: var(--blue);
  padding: 0;
}
.my-nav a {
  color: white;
}
.my-nav .navbar-brand, .my-nav .navbar-text {
  color: var(--main-color);
  padding: 0.5rem 1rem;
}
.my-nav .navbar-nav .nav-link {
  padding: 0.8rem 1rem;
  /* color: white; */
}
.nav-link.active, .nav-link:hover {
  font-weight: bold;
  color: var(--light-black);
  background-color: rgba(255, 255, 255, 0.5);
}
.my-nav .navbar-text {
  color: var(--main-color);
}
.my-link {
  display: block;
  padding: 0.8rem 1rem;
  color: white;
}
.my-link:hover {
  text-decoration: none;
}
.dropdown:hover .dropdown-menu {
  display: block;
  margin-top: 0;
}
.dropdown-menu, .dropdown-menu:active {
  border-color: white;
  border-width: 1px 0;
  border-radius: 0;
  background-color: var(--blue);
}
.dropdown-item:hover, .dropdown-item:focus {
  background-color: rgba(255, 255, 255, 0.4);
  font-weight: bold;
  color: var(--light-black);
}
.endDay:hover {
  color: #EDF060;
  text-decoration: underline;
}
</style>

