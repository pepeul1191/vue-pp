Vue.component('header-menu', {
  props:  {
    url: { type: String, required: true },
    clases: { type: String,required: false },
    text: { type: String, required: true },
    base_url:{ type: String, required: false, default: ''},
  },
  template: `
    <a v-bind:href="base_url + url" v-bind:class="[clases,]">{{text}}</a>
  `
})
