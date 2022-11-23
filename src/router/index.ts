import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Cart from '@/views/Cart.vue'
import ProductDetail from '@/views/ProductDetail.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            title: 'About'
        }
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart,
        meta: {
            title: 'Cart'
        }
    },
    {
        path: '/product/:id',
        name: 'ProductDetail',
        component: ProductDetail,
        meta: {
            title: 'Product Deatail'
        }
    },
]


const router = createRouter({
    history: createWebHistory(import.meta.env.URL),
    routes
})

router.beforeEach((to, _, next) => {

    if(typeof(to.meta.title) == 'string'){
        document.title = to.meta.title
    }

    next()
})

export default router