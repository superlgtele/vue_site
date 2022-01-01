<template>
  <div class="discount">
    <h4>지금 결제하면 {{ discountnumber }}% 할인</h4>
  </div>
</template>

<script>
export default {
    name: "Discount",
     data() {
      return {
        discountnumber : 20,
        setIntervaltime : 1000
      }
    },

    mounted() {
    const discounttime = setInterval(() => {
        this.discountnumber -= 1
      }, this.setIntervaltime);

    setTimeout(() => {
        clearInterval(discounttime)
      }, this.setIntervaltime * this.discountnumber)  ;
   }
}

</script>

<style>

</style>