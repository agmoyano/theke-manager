import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Account from '@/components/Account/Base'
import AccountState from '@/components/Account/State'
import AccountPayment from '@/components/Account/Payment'
import AccountHistory from '@/components/Account/History'
import Admin from '@/components/Admin/Base'
import AdminKohas from '@/components/Admin/Kohas'
import AdminDuePayment from '@/components/Admin/DuePayment'
import AdminHistory from '@/components/Admin/History'
import AdminTasks from '@/components/Admin/Tasks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/account/:id',
      name: 'Account',
      component: Account,
      children: [
        {
          path: '',
          name: 'State',
          component: AccountState
        },
        {
          path: 'payment',
          name: 'Payment',
          component: AccountPayment
        },
        {
          path: 'history',
          name: 'History',
          component: AccountHistory
        }
      ]
    },
    {
      path: '/admin/:id',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: '',
          name: 'Tasks',
          component: AdminTasks
        },
        {
          path: 'due',
          name: 'DuePayment',
          component: AdminDuePayment
        },
        {
          path: 'history',
          name: 'AdminHistory',
          component: AdminHistory
        },
        {
          path: 'kohas',
          name: 'Kohas',
          component: AdminKohas
        }
      ]
    }
  ]
})
