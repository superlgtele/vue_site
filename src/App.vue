<template>

  <div class="menu">
    <a v-for="(a,i) in menus" :key="i"> {{ a }} </a>
  </div>

  <div class="black-bg" v-if="Himodal == true">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>내용</p>
      <button @click="Himodal = false">닫기</button>
    </div>
  </div>

  <div>
    <img src="./assets/room0.jpg" class="room-img">
    <h4 @click="Himodal = true" :style="styles"> {{products[0].title}} </h4>
    <p>{{ products[0].price }}원</p>
    <button @click="increase">허위매물신고</button> <span>신고수: {{report[0]}}</span>
  </div>
  <div>
    <img src="./assets/room1.jpg" class="room-img">
    <h4 :style="styles"> {{products[1].title}} </h4>
    <p>{{ products[1].price }}원</p>
    <button @click="increase1">허위매물신고</button> <span>신고수: {{report[1]}}</span>
  </div>
  <div>
    <img src="./assets/room2.jpg" class="room-img">
    <h4 :style="styles"> {{products[2].title}} </h4>
    <p>{{ products[2].price }}원</p>
    <button @click="increase2">허위매물신고</button> <span>신고수: {{report[2]}}</span>
  </div>
</template>

<script>

import {roomdata} from "./assets/oneroom.js"

export default {
  name: 'App',
  data(){
    return {
      report : [0,0,0],
      styles : "color: green",
      products : roomdata,
      menus : ["Home", "Shop", "About"],
      Himodal : false
    }
  },

  methods: {
    increase(){
      this.report[0] += 1;
    },
    increase1(){
      this.report[1] += 1;
    },
    increase2(){
      this.report[2] += 1;
    }
  },

  components: {
    
  }
}
</script>

<style>
body {
  margin :0
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
.room-img {
  width: 100%;
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
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

</style>
