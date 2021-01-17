import request from "../../network/request";
import {GET_NAV_BAR, LOAD_NAV_BAR} from '../type'
import {GET_LOCATION, LOAD_LOCATION} from "../type";
import {GET_HOT_CITY, LOAD_HOT_CITY} from "../type";
import {GET_CITY_LIST, LOAD_CITY_LIST} from "../type";
import {GET_CAROUSEL_LIST, LOAD_CAROUSEL_LIST} from "../type";
import {GET_MENU_LIST, LOAD_MENU_LIST} from "../type";
import {GET_SORT_LIST, LOAD_SORT_LIST} from "../type";
import {GET_SHOP_LIST, LOAD_SHOP_LIST} from "../type";

export default {
  [GET_NAV_BAR](context) {
    request({
      url: '/data/nav_bar.json'
    }).then(res => context.commit(LOAD_NAV_BAR, res.data));
  },

  [GET_LOCATION](context) {
    AMap.plugin('AMap.Geolocation', function() {
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
      });

      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, 'complete', onComplete);
      AMap.event.addListener(geolocation, 'error', onError);

      function onComplete (data) {
        // data是具体的定位信息
        context.commit(LOAD_LOCATION, data);
      }

      function onError (data) {
        // 定位出错
        // console.log(data);
      }
    });
  },

  [GET_HOT_CITY](context) {
    request({
      url: '/data/hot_city.json'
    }).then(res => context.commit(LOAD_HOT_CITY, res.data));
  },

  [GET_CITY_LIST](context) {
    request({
      url: '/data/city_list.json'
    }).then(res => context.commit(LOAD_CITY_LIST, res.data));
  },

  [GET_CAROUSEL_LIST](context) {
    request({
      url: '/data/carousel_list.json'
    }).then(res => context.commit(LOAD_CAROUSEL_LIST, res.data));
  },

  [GET_MENU_LIST](context) {
    request({
      url: '/data/menu_list.json'
    }).then(res => context.commit(LOAD_MENU_LIST, res.data));
  },

  [GET_SORT_LIST](context) {
    request({
      url: '/data/sort_list.json'
    }).then(res => context.commit(LOAD_SORT_LIST, res.data));
  },

  [GET_SHOP_LIST](context) {
    request({
      url: '/data/shop_list.json'
    }).then(res => context.commit(LOAD_SHOP_LIST, res.data));
  }
}
