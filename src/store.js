import { createStore } from "vuex";
import { ProductsData } from "./assets/oneroom";

const store = createStore({
  state() {
    return {
      modal: false,
      menus: ["Home", "Shop", "About"],
      products: ProductsData,
      ModalIndex: 0,
      MonthData: 0,
      Conserve: [...ProductsData],
    };
  },
  mutations: {
    OpenModal(state, payload) {
      state.modal = true;
      state.ModalIndex = payload;
    },
    CloseModal(state) {
      state.modal = false;
    },
    UserMonth(state, payload) {
      state.MonthData = payload;
    },
    SortPrice(state) {
      state.products.sort(function (a, b) {
        return a.price - b.price;
      });
    },
    SortName(state) {
      const FilterData = state.products.filter((a) => a.price <= 500000);
      state.products = FilterData;
    },
    BackSort(state) {
      state.products = [...state.Conserve];
    },
  },
  actions: {},
});

export default store;
