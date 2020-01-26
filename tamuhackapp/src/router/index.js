import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cooking from '@/components/Cooking'
import Auto from '@/components/Auto'
import Finance from '@/components/Finance'
import CookingLesson1 from '@/components/lessons/cooking/CookingLesson1'
import CookingLesson2 from '@/components/lessons/cooking/CookingLesson2'
import CookingLesson3 from '@/components/lessons/cooking/CookingLesson3'
import CookingLesson4 from '@/components/lessons/cooking/CookingLesson4'
import CookingLesson5 from '@/components/lessons/cooking/CookingLesson5'
import CookingLesson6 from '@/components/lessons/cooking/CookingLesson6'
import AutoLesson1 from '@/components/lessons/automotive/AutoLesson1'
import AutoLesson2 from '@/components/lessons/automotive/AutoLesson2'
import AutoLesson3 from '@/components/lessons/automotive/AutoLesson3'
import AutoLesson4 from '@/components/lessons/automotive/AutoLesson4'
import FinanceLesson1 from '@/components/lessons/finance/FinanceLesson1'
import FinanceLesson2 from '@/components/lessons/finance/FinanceLesson2'
import FinanceLesson3 from '@/components/lessons/finance/FinanceLesson3'
import FinanceLesson4 from '@/components/lessons/finance/FinanceLesson4'



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
        },
        {
            path: '/cooking/lesson2',
            name: 'CookingLesson2',
            component: CookingLesson2
        },
        {
            path: '/cooking/lesson3',
            name: 'CookingLesson3',
            component: CookingLesson3
        },
        {
            path: '/cooking/lesson4',
            name: 'CookingLesson4',
            component: CookingLesson4
        },
        {
            path: '/cooking/lesson5',
            name: 'CookingLesson5',
            component: CookingLesson5
        },
        {
            path: '/cooking/lesson6',
            name: 'CookingLesson6',
            component: CookingLesson6
        },
        {
            path: '/auto/lesson1',
            name: 'AutoLesson1',
            component: AutoLesson1
        },
        {
            path: '/auto/lesson2',
            name: 'AutoLesson2',
            component: AutoLesson2
        },
        {
            path: '/auto/lesson3',
            name: 'AutoLesson3',
            component: AutoLesson3
        },
        {
            path: '/auto/lesson4',
            name: 'AutoLesson4',
            component: AutoLesson4
        },
        {
            path: '/finance/lesson1',
            name: 'FinanceLesson1',
            component: FinanceLesson1
        },
        {
            path: '/finance/lesson2',
            name: 'FinanceLesson2',
            component: FinanceLesson2
        },
        {
            path: '/finance/lesson3',
            name: 'FinanceLesson3',
            component: FinanceLesson3
        },
        {
            path: '/finance/lesson4',
            name: 'FinanceLesson4',
            component: FinanceLesson4
        },


    ]
})