<template>
  <div class="container-search">
    <div class="sub_tit">
      <strong>DKTechin 구인 현황</strong>
      <div class="wrap_search">
        <div class="bundle_inp">
          <input
            @input="$store.commit('inputfilter', $event.target.value)"
            type="text"
          />
          <button @click="$store.commit('searchfilter')" type="button">
            <span class="ir_pm">검색</span>
          </button>
        </div>
      </div>
      <p>
        검색 결과 <em>{{ $store.state.searchresult }}</em
        >건
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style></style>
