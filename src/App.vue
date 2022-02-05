<template>
  <ModalComponents />

  <div class="menu">
    <a v-for="(menus, i) in $store.state.menus" :key="i">{{ menus }}</a>
  </div>

  <img alt="Vue logo" src="./assets/logo.png" />

  <div v-for="(products, i) in $store.state.products" :key="i">
    <img
      :src="`https://codingapple1.github.io/vue/room${i}.jpg`"
      class="room-img"
    />
    <h4 @click="$store.commit('OpenModal', i)">{{ products.title }}</h4>
    <p>{{ products.price }}원</p>
  </div>
</template>

<script>
import ModalComponents from "./components/Modal.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  components: {
    ModalComponents,
  },
  computed: {
    CheckMonth() {
      return this.$store.state.MonthData;
    },
  },
  watch: {
    CheckMonth(data) {
      const regex = /^[0-9]+$/;
      if (!data.match(regex) || data > 9) {
        alert("0~9까지의 숫자만 입력해주세요!");
        // $store.state.MonthData 값 1로 초기화해야함!
      }
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 10px;
}

.menu a {
  color: white;
  padding: 10px;
}

.room-img {
  width: 100%;
  margin-top: 10px;
}
</style>
