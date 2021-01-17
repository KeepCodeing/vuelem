import request from "../../network/request";
import {GET_PRODUCT_DETAILS, LOAD_PRODUCT_DETAILS} from "../type";

export default {
  [GET_PRODUCT_DETAILS](context) {
    request({
      url: '/data/product_details.json'
    }).then(res => context.commit(LOAD_PRODUCT_DETAILS, res.data));
  },

}
