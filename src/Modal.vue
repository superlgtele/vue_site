<template>
  <div class="black-bg" v-if="BindHimodal == true">
    <div class="white-bg">
      <img :src = "Bindproducts[Bindclicktitle].image" style="width:100%">
      <h4>{{ Bindproducts[Bindclicktitle].title }}</h4>
      <p>{{ Bindproducts[Bindclicktitle].content }}</p>
      <p>{{ Bindproducts[Bindclicktitle].price }} 원</p>
      <!-- <h4>{{state.getMsg[0].content}}</h4> <- node.js에서 가져온 데이터 -->
      <!-- <button @click="BindHimodal = false">닫기</button> -->
    </div>
  </div>
</template>

<script>
export default {
    name : "Modal",
    props : {
        Bindproducts : Array,
        Bindclicktitle : Number,
        BindHimodal : Boolean
    }
}
</script>

<style>

</style>