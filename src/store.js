import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      joblistdata: [],
      searchresult: "",
    };
  },
  mutations: {
    getajax(state, payload) {
      state.joblistdata.push(payload);
    },
    // searchfilter(state, payload) {
    //   const OriginData = state.joblistdata[0]?.jobList;
    //   console.log(payload);
    //   const FilterData = OriginData.filter((titles) => {
    //     return titles.title == payload;
    //   });
    //   state.joblistdata[0].jobList = FilterData;
    // },
    searchfilter(state, payload) {
      const OriginData = state.joblistdata[0]?.jobList;
      const FilterData = OriginData.filter(function (data) {
        if (payload === "ㅍ") {
          return data.title.includes("프론트");
        } else if (payload === "ㅂ") {
          return data.title.includes("백");
        } else if (payload === "ㅇ") {
          return data.title.includes("웹");
        } else {
          return data.title.includes("Q");
        }
      });
      state.searchresult = FilterData.length;
      state.joblistdata[0].jobList = FilterData;
    },
  },
  actions: {
    ajax(context) {
      axios.get("http://localhost:3001/rest/v1/jobs").then((result) => {
        context.commit("getajax", result.data);
      });
    },
  },
});

export default store;
