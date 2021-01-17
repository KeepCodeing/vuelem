import {
  LOAD_PRODUCT_DETAILS,
} from "../type";

export default {
  [LOAD_PRODUCT_DETAILS](state, payload) {
    state.product_details = payload;
  },

}
