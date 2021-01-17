import {
  LOAD_CAROUSEL_LIST,
  LOAD_MENU_LIST,
  LOAD_NAV_BAR,
  LOAD_LOCATION,
  LOAD_HOT_CITY,
  LOAD_CITY_LIST, LOAD_SORT_LIST, LOAD_SHOP_LIST
} from "../type";

export default {
  [LOAD_NAV_BAR](state, payload) {
    state.nav_bar = payload;
  },

  [LOAD_LOCATION](state, payload) {
    state.location = payload;
  },

  [LOAD_HOT_CITY](state, payload) {
    state.hot_city = payload;
  },

  [LOAD_CITY_LIST](state, payload) {
    state.city_list = payload;
  },

  [LOAD_CAROUSEL_LIST](state, payload) {
    state.carousel_list = payload;
  },

  [LOAD_MENU_LIST](state, payload) {
    state.menu_list = payload;
  },

  [LOAD_SORT_LIST](state, payload) {
    state.sort_list = payload;
  },

  [LOAD_SHOP_LIST](state, payload) {
    state.shop_list = payload;
  }
}
