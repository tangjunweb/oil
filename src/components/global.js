// 全局组件注册

import Title from './title'
import Button from './button'
import SearchForm from './searchForm'
// import render from "./Render";


const global = {
  // render,
  Title,
  Button,
  SearchForm
};

const install = function (Vue, opts = {}) {
  // Vue.component(render.name, Title)
  Vue.component('Title', Title)
  Vue.component('Button', Button)
  Vue.component('SearchForm', SearchForm)
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default Object.assign(global, { install });

