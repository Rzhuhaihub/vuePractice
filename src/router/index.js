import Vue from 'vue'
import Router from 'vue-router'
import taskEdit from '@/components/taskEdit'
import MainPage from '@/components/MainPage'
import timerTasks from '@/components/timerTasks'
import todayTasks from '@/components/TodayTasks'
import fileComponent from '@/components/fileComponent'
import showClassFile from '@/components/showClassFile'
import deviceControl from '@/components/deviceControl'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/taskEdit',
      name: 'taskEdit',
      component: taskEdit
    },
    {
      path: '/timerTasks',
      name: 'timerTasks',
      component: timerTasks
    },
    {
      path: '/todayTasks',
      name: 'todayTasks',
      component: todayTasks
    },
    {
      path: '/fileComponent',
      name: 'fileComponent',
      component: fileComponent
    },
    {
      path: '/showClassFile',
      name: 'showClassFile',
      component: showClassFile
    },
    {
      path: '/deviceControl',
      name: 'deviceControl',
      component: deviceControl
    },
  ]
})
