<template>
  <main class="doc-main">
    <section class="inner-main">
      <h2 class="screen_out">채용 데모 페이지 본문</h2>
      <div class="main-content">
        <article id="mainContent" class="content-article">
          <h3 class="screen_out">채용 목록</h3>
          <ul class="list_job">
            <div
              v-for="(a, i) in $store.state.joblistdata[0]?.jobList"
              :key="i"
            >
              <li class="new">
                <div class="title_job">
                  <a href="#none" class="link_title">
                    <strong
                      >{{ $store.state.joblistdata[0].jobList[i].title
                      }}<em>{{
                        $store.state.joblistdata[0].jobList[i].type
                      }}</em></strong
                    >
                  </a>
                  <span class="bundle_badge">
                    <a
                      v-for="(a, i) in $store.state.joblistdata[0].jobList[i]
                        .keywords"
                      :key="i"
                      href="#none"
                      >{{ a }}</a
                    >
                  </span>
                </div>
                <div class="desc_job">
                  <span class="badge_type">{{
                    $store.state.joblistdata[0].jobList[i].job
                  }}</span>
                  <div class="wrap_txt">
                    <span class="txt_day">{{
                      $store.state.joblistdata[0].jobList[i].createdAt
                    }}</span>
                    <span class="txt_location">{{
                      $store.state.joblistdata[0].jobList[i].location
                    }}</span>
                  </div>
                </div>
              </li>
            </div>
          </ul>
        </article>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
