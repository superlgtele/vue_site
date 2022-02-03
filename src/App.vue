<template>
  <div class="black-bg" v-if="$store.state.modal == true">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>내용</p>
      <button @click="$store.commit('CloseModal')">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="(menus, i) in $store.state.menus" :key="i">{{ menus }}</a>
  </div>

  <img alt="Vue logo" src="./assets/logo.png" />

  <div v-for="(products, i) in $store.state.products" :key="i">
    <img :src="require(`./assets/room${i}.jpg`)" class="room-img" />
    <h4 @click="$store.commit('OpenModal')">{{ products }}</h4>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
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
