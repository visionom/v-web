import Vue from 'vue'
import Router from 'vue-router'
import apps from '@/apploader'


let routers = []

let deepAddMeta = (router, meta) => {
  if (router.meta) {
    router.meta = Object.assign(router.meta, meta)
  } else {
    router.meta = meta
  }
  if (router.children && Array.isArray(router.children)) {
    router.children.forEach(child => {
      deepAddMeta(child, meta)
    })
  }
}

apps.forEach(app => {
  // add metadata to router
  app.routers.forEach(router => {
    deepAddMeta(router, app.config)
  })

  // load router
  routers = routers.concat(app.routers)
})


Vue.use(Router)
let router = {
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routers
}

export default new Router(router)
