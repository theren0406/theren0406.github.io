<template>
  <div class="container">
    <app-header />
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";

export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch("initStocks");
  }
};
</script>

<style>
:root {
  --main-color: #00394E;
  --light-black: #005574;
  --blue: #30AAD6;
}
body {
  color: var(--main-color);
  font-family: Microsoft JhengHei, sans-serif;
}
h1, h2, h3, h4, h5, h6 {
  color: var(--main-color);
}
.btn-custom {
  background-color: var(--blue);
  color: white;
}
.btn-custom:hover {
  font-weight: bold;
  color: var(--light-black);
  background-color: rgba(48, 170, 214, 0.7);
}

.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>


