import actions from "./actions";
import mutations from "./mutations";

export default {
  state: {
    nav_bar: [],
    location: {},
    hot_city: [],
    city_list: [],
    carousel_list: [],
    menu_list: [],
    drawer: false,
    sort_list: [],
    shop_list: [],
  },
  actions,
  mutations,
}
