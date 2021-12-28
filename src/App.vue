<template>

  <div class="menu">
    <a v-for="(a,i) in menus" :key="i"> {{ a }} </a>
  </div>

  <DiscountDiv/>
  <UseModal v-bind:Bindproducts="products" 
  v-bind:Bindclicktitle="clicktitle"
  v-bind:BindHimodal="Himodal" />

  <!-- <div class="black-bg" v-if="Himodal == true">
    <div class="white-bg">
      <img :src = "products[clicktitle].image" style="width:100%">
      <h4>{{ products[clicktitle].title }}</h4>
      <p>{{ products[clicktitle].content }}</p>
      <p>{{ products[clicktitle].price }} 원</p> -->
      <!-- <h4>{{state.getMsg[0].content}}</h4> <- node.js에서 가져온 데이터 -->
      <!-- <button @click="Himodal = false">닫기</button>
    </div>
  </div> -->

  <UseCard @openmodal="Himodal = true; clicktitle = $event" v-bind:Bindroomdata="products[i]" v-for="(a,i) in products" :key="i"/>
  
  <!-- <div v-for="(a,i) in products" :key="i">
    <img :src = "a.image" class="room-img">
    <h4 @click = "Himodal = true; clicktitle = i ">{{a.title}}</h4>
    <p>{{a.price}}원</p>
  </div> -->

</template>

<script>

import {roomdata} from "./assets/oneroom.js"
import Discount from "./Discount.vue"
import Modal from "./Modal.vue"
import Card from "./Card.vue"
// import {onMounted, reactive} from "vue" <- node.js 연동
// import axios from "axios" <- node.js 연동

export default {
  name: 'App',
  data(){

  // node.js 연동 ----------

  // const state = reactive ({
  //     getMsg: '',
  //     postMsg: ''
  //  })

  //  onMounted(() => {
  //     try {
  //       let urlGet = '/api/getTest';
  //       axios.get(urlGet, {
  //       })
  //       .then(function (response) {
  //         state.getMsg = response.data.msg
  //       })
  //       .catch(function (error) {
  //         alert(error);
  //       });
        

  //       let urlPost = '/api/postTest';
  //       axios.post(urlPost, {
  //         name: " Connect Node.js+Vue.js"
  //       }).then(function (response) {
  //         state.postMsg = response.data.msg
  //       })
  //       .catch(function (error) {
  //         alert(error);
  //       });
  //    } catch (err) {
  //       console.log(err);
  //     }
  //   });
  //   -------------------

    return {
      clicktitle : 0,
      report : [0],
      styles : "color: green",
      products : roomdata,
      menus : ["Home", "Shop", "About"],
      Himodal : false
      // state <- node.js 연동,
    }
  },

  methods: {
    
  },

  components: {
    DiscountDiv : Discount,
    UseModal : Modal,
    UseCard : Card
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

.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
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
