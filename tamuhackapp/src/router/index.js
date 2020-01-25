import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cooking from '@/components/Cooking'
import Auto from '@/components/Auto'
import Finance from '@/components/Finance'
import CookingLesson1 from '@/components/lessons/cooking/CookingLesson1'



Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/cooking',
            name: 'Cooking',
            component: Cooking
        },
        {
            path: '/auto',
            name: 'Auto',
            component: Auto
        },
        {
            path: '/finance',
            name: 'finance',
            component: Finance
        },
        {
            path: '/cooking/lesson1',
            name: 'CookingLesson1',
            component: CookingLesson1
        }
    ]
})