import Vue from 'vue'
import Router from 'vue-router'

import Catalog from '../containers/Catalog'
import Cart from '../containers/Cart'
import vMainPage from '../components/main-page/v-main-page'

Vue.use(Router)

let router = new Router({
    routes:[
        {
            path:"/",
            name: 'mainPage',
            component: vMainPage

        },
        {
           path: '/catalog',
           name: 'catalog',
           component: Catalog 
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
            props: true
        }
    ]
})

export default router