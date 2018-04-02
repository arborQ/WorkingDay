import Vue from "vue";
import { freeDays } from "./calendar";

var app = new Vue({
  el: '#body',
  data: {
    message: 'Hello Vue!',
    freeDays,
  },
  template: '<div>work?????!??{freeDays.length}</div>',
})