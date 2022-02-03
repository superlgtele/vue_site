import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      modal: false,
      menus: ["Home", "Shop", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
    };
  },
  mutations: {
    OpenModal(state) {
      state.modal = true;
    },
    CloseModal(state) {
      state.modal = false;
    },
  },
  actions: {},
});

export default store;
