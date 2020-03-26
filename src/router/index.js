import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Layout from '../views/layout'
import Home from '../views/home'

import Table from '../views/tables/table'
import Echarts from '../views/charts/echarts'
import BasicForm from '../views/forms/basicForm'
import SLD from '../views/sld'

import Button from '../views/components/button'
import ButtonHover from '../views/components/button_hover'
import Select from '../views/components/select'

import Button1 from '../views/components/buttons/button1'
import Button2 from '../views/components/buttons/button2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: Layout,
      name: 'Layout',
      redirect: 'home',
      children: [{
        path: 'home',
        component: Home,
        name: 'home',
        meta: { title: 'Home', icon: 'home', noCache: true }
      }]
    },
    {
      path: '/tables',
      name: 'Tables',
      component: Layout,
      redirect: 'noredirect',
      meta: {
        title: 'Tables',
        icon: 'Tables'
      },
      children: [
        {path: '/table', name: 'table', component: Table, meta: { title: 'Table' }},
        {path: '/sld', name: 'sld', component: SLD, meta: { title: 'SLD' }}
      ]
    },
    {
      path: '/charts',
      name: 'charts',
      component: Layout,
      redirect: 'noredirect',
      meta: {
        title: 'Charts',
        icon: 'charts',
        noCache: true
      },
      children: [
        {path: '/echarts', name: 'echarts', component: Echarts, meta: { title: 'Echarts' }}
      ]
    },
    {
      path: '/forms',
      name: 'forms',
      component: Layout,
      redirect: 'noredirect',
      meta: {
        title: 'Forms',
        icon: 'forms',
        noCache: true
      },
      children: [
        {path: '/basicForm', name: 'basicForm', component: BasicForm, meta: { title: 'BasicForm' }}
      ]
    },
    {
      path: '/components',
      name: 'components',
      component: Layout,
      redirect: 'noredirect',
      meta: {
        title: 'Components',
        icon: 'components',
        noCache: true
      },
      children: [
        {
          path: '/button', name: 'button', component: Button, meta: { title: 'Button' }
        },
        {path: '/button-hover', name: 'button_hover', component: ButtonHover, meta: { title: 'Button-hover' }},
        {path: '/select', name: 'select', component: Select, meta: { title: 'Select' }},
        {path: '/button1', name: 'button1', component: Button1, meta: { title: 'Button1' }},
        {path: '/button2', name: 'button2', component: Button2, meta: { title: 'Button2' }},
        {path: '/buttons',
          name: 'buttons',
          component: import('../views/components/buttons/main'),
          // redirect: 'noredirect',
          meta: {
            title: 'Buttons'
          },
          children: [
            {path: '/button1', name: 'button1', component: Button1, meta: { title: 'Button1' }},
            {path: '/button2', name: 'button2', component: Button2, meta: { title: 'Button2' }}
          ]
        }
      ]
    }
  ]
})
