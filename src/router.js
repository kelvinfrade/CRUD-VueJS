import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Listar from './views/Listar.vue'
import Adicionar from './views/Adicionar.vue'
//import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/listar',
      name: 'listar',
      component: Listar
    },
    {
      path: '/lista/adicionar',
      name: 'lista-adicionar',
      component: Adicionar
    },
    {
      path: '/lista/:id/editar',
      name: 'lista-editar',
      component: Adicionar
    },

  ]
})