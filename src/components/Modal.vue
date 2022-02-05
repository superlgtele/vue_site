<template>
  <div class="black-bg" v-if="$store.state.modal == true">
    <div class="white-bg">
      <img
        :src="$store.state.products[$store.state.ModalIndex].image"
        style="width: 100%"
      />
      <h4>{{ $store.state.products[$store.state.ModalIndex].content }}</h4>
      <input @input="$store.commit('UserMonth', $event.target.value)" />
      <p>
        {{ $store.state.MonthData }}개월 :
        {{
          $store.state.MonthData *
          $store.state.products[$store.state.ModalIndex].price
        }}원
      </p>
      <button @click="$store.commit('CloseModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
};
</script>

<style>
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
</style>
