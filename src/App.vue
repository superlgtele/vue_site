<template>
  <ModalComponents />

  <div class="menu">
    <a v-for="(menus, i) in $store.state.menus" :key="i">{{ menus }}</a>
  </div>

  <div class="buttons">
    <button class="ani-button" @click="$store.commit('SortPrice')">
      가격정렬
    </button>
    <button class="ani-button">이름정렬</button>
    <button class="ani-button">되돌리기</button>
  </div>

  <div>
    <!-- <router-link to="/home">Home 페이지</router-link> -->
    <router-view></router-view>
  </div>

  <img alt="Vue logo" src="./assets/logo.png" />

  <div v-for="(products, i) in $store.state.products" :key="i">
    <img :src="$store.state.products[i].image" class="room-img" />
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

.ani-button {
  background: skyblue;
  padding: 5px 15px;
  border: none;
  margin: 10px auto;
  border-radius: 10px;
  color: white;
  font-size: 15px;
  width: 20%;
}

.buttons {
  display: flex;
}

.ani-button:hover {
  animation-name: Shake;
  animation-duration: 1.5s;
}

@keyframes Shake {
  0% {
    transform: rotate(0px);
  }
  33% {
    transform: rotate(-10deg);
  }
  66% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0px);
  }
}
</style>
