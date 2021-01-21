import {
  LOAD_PRODUCT_DETAILS,
  LOAD_COMMENT_LIST,
} from "../type";

export default {
  [LOAD_PRODUCT_DETAILS](state, payload) {
    state.product_details = payload;
  },

  [LOAD_COMMENT_LIST](state, payload) {
    state.comment_list = payload;
  }
}
