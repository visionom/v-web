import Home from './Home'

/**
 * config
 * the config can access from the this.$route.meta
 * @type {{
 *        appid: string,      WebApplication Id
 *        menuName: string,   Menu Display Name
 *        menuIcon: string,
 *        apiBasePath: string QueryBasePath
 *        }}
 */

let config = {
  appid: 'resman',
  menuName: 'Dashboard',
  menuIcon: 'mdi-view-dashboard',
  apiBasePath: '/api/resman/v1'
}

/**
 * route config
 * the config is add to vue router
 * @type {*[]}
 */
let routers = [{
  path: '/',
  name: 'dashboard',
  display: 'Dashboard',
  component: Home
}]

/**
 * TODO: Need Coding
 */
let eventHandler = () => {
}

export default {
  config: config,
  routers: routers,
  eventHandler: eventHandler
}
