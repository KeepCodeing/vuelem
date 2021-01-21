import request from "../../network/request";
import {GET_PRODUCT_DETAILS, LOAD_PRODUCT_DETAILS} from "../type";
import {GET_COMMENT_LIST, LOAD_COMMENT_LIST} from "../type";

export default {
  [GET_PRODUCT_DETAILS](context) {
    request({
      url: '/data/product_details.json'
    }).then(res => context.commit(LOAD_PRODUCT_DETAILS, res.data));
  },

  [GET_COMMENT_LIST](context) {
    request({
      url: '/data/comment_list.json'
    }).then(res => context.commit(LOAD_COMMENT_LIST, res.data));
  }
}
