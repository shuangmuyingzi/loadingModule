import load from './App.vue'

export default load;

//global 情况下 自动安装
    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.component('load', load);
    }
