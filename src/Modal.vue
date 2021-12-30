<template>
  <div class="black-bg" v-if="BindHimodal == true">
    <div class="white-bg">
      <img :src = "Bindproducts[Bindclicktitle].image" style="width:100%">
      <h4>{{ Bindproducts[Bindclicktitle].title }}</h4>
      <p>{{ Bindproducts[Bindclicktitle].content }}</p>
      <input v-model.number="month">
      <p> {{ month }}개월 선택함 : {{ Bindproducts[Bindclicktitle].price * month }} 원</p>
      <!-- <h4>{{state.getMsg[0].content}}</h4> <- node.js에서 가져온 데이터 -->
      <!-- <button @click="BindHimodal = false">닫기</button> -->
      <button @click="Sendclosemodal">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
    name : "Modal",
    data() {
      return {
        month : 1
      }
    },
    // beforeUpdate() {
    //   if(this.month == 2) {
    //     alert("2개월은 너무 적어요. 더사세요!");
    //   }
    // },
    watch : {
      month(userinput) {
        if (isNaN(userinput)) {
          alert("숫자를 입력해주세요!");
          userinput = 1;
        } 
      }
    },
    props : {
        Bindproducts : Array,
        Bindclicktitle : Number,
        BindHimodal : Boolean
    },
    methods : {
        Sendclosemodal() {
            this.$emit('closemodal')
        }
    }
}
</script>

<style>

</style>