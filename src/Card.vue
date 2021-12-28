<template>
  <div>
    <img :src = "Bindroomdata.image" class="room-img">
    <h4 @click="SendCardeventToApp">{{Bindroomdata.title}}</h4>
    <p>{{Bindroomdata.price}}원</p>
  </div>
</template>

<script>
export default {
    name : "Card",
    props : {
        Bindroomdata : Object
    },
    methods : {
        SendCardeventToApp() {
            this.$emit('openmodal', this.Bindroomdata.id)
        }
    }
}
</script>

<style>

</style>