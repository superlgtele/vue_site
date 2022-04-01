import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      joblistdata: [],
      spread: "",
      searchresult: "",
      inputdata: "",
    };
  },
  mutations: {
    getajax(state, payload) {
      const AjaxData = payload.jobList;
      const orderedDate = AjaxData.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      state.joblistdata.push({ jobList: orderedDate });
      state.spread = [...state.joblistdata];
    },
    inputfilter(state, payload) {
      state.inputdata = payload;
    },
    searchfilter(state) {
      state.joblistdata = state.spread;
      const OriginData = state.joblistdata[0]?.jobList;
      const FilterData = OriginData.filter((data) => {
        return data.title.includes(state.inputdata);
      });
      state.searchresult = FilterData.length;
      state.joblistdata[0].jobList = FilterData;
    },
    // createdatEvent(state) {
    //   let today = new Date();
    //   let todayDay = today.getDay();

    //   () => {
    //     let day = new Date(state.joblistdata[0]?.jobList.createdAt);
    //     day.setDate(day.getDate() + 7);
    //     if (today.getTime() > day.getTime()) {
    //       day.setDate(day.getDate() - 7);
    //       return (
    //         day.getFullYear() +
    //         "." +
    //         (day.getMonth() + 1) +
    //         "." +
    //         day.getDay() +
    //         1
    //       );
    //     } else {
    //       console.log(day.getDay(), todayDay);

    //       return day.getDay() - todayDay === 0
    //         ? "Today"
    //         : Math.abs(day.getDay() - todayDay) + "days ago";
    //     }
    //   };
    // },
  },
  actions: {
    ajax(context) {
      axios
        .get("http://localhost:3001/rest/v1/jobs")
        .then((result) => {
          context.commit("getajax", result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

export default store;
