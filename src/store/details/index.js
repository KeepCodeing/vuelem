import actions from "./actions";
import mutations from "./mutations";

export default {
  state: {
    product_details: {},
    cart_list: {
      total_pay: 0,
      total_count: 0,
    },
    product_drawer: false,
    comment_list: [],
  },
  actions,
  mutations,
}
