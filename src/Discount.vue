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
        discountnumber : 10
      }
    },

    mounted() {
    setInterval(() => {
        this.discountnumber -= 1
      }, 1000);
    }
}

</script>

<style>

</style>