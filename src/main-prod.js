//导入vue
import Vue from 'vue'
//导入app根组件
import App from './App.vue'
//导入路由组件
import router from './router'
// //导入element组件
// import './plugins/element.js'
//导入axios
import axios from 'axios'
//导入字体图标
import './assets/fonts/iconfont.css'
//导入全局样式表
import './assets/css/global.css'
//导入tree table 组件
import TreeTable from 'vue-table-with-tree-grid'
// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// // 导入富文本编辑器对应的样式
// import 'quill/dist/quill.core.css' // import styles
// import 'quill/dist/quill.snow.css' // for snow theme
// import 'quill/dist/quill.bubble.css' // for bubble theme

import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'

//配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  // console.log(config);
  NProgress.start()
  config.headers.Authorization = window.sessionStorage.getItem('token');
  //固定写法 return config
  return config;
})
axios.interceptors.response.use(config =>{
  NProgress.done()
  return config
})
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.component('tree-table', TreeTable)
Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)
  const y=dt.getFullYear()
  const m= (dt.getMonth()+1+'').padStart(2,'0')
  const d = (dt.getDate()+'').padStart(2,'0')
  const hh = (dt.getHours() +'').padStart(2,'0')
  const mm =(dt.getMinutes() +'').padStart(2,'0')
  const ss = (dt.getSeconds()+'').padStart(2,'0')
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
Vue.use(VueQuillEditor)

// 新建vue 挂载路由 加载根组件
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
