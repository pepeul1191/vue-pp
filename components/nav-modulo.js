Vue.component('nav-modulo', {
  props:  {
    url: { type: String, required: true },
    nombre: { type: String, required: true },
    base_url:{ type: String, required: false},
    active:{ type: String, required: false, default: ''},
  },
  template: `
    <a v-bind:href="base_url + url" v-if="nombre === active" class="nav-active">{{nombre}}</a>
    <a v-bind:href="base_url + url" v-else>{{nombre}}</a>
  `
})

//<a href="BASE_URLmodulo['url']"class="nav-active">modulo['nombre']</a>
//<a v-bind:href="base_url + url" v-bind:class="[clases,]">{{text}}</a>
