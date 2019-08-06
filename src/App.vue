<template>
  <layout>
    <span
      slot="toolbar-start"
      class="title ml-3 mr-5">
      {{ title }}
    </span>
    <search slot="toolbar-center" />
    <div slot="toolbar-end">
      <menu-notifications />

      <menu-more />

      <menu-avator />
    </div>
    <nav-menu slot="navigation" />
    <router-view slot="content" />
  </layout>
</template>
<script>
import Layout from './components/Layout'
import NavMenu from './components/NavMenu'
import Search from './components/Search'
import MenuMore from './components/MenuMore'
import MenuAvator from './components/MenuAvatar'
import MenuNotifications from './components/MenuNotifications'

export default {
  name: 'App',
  components: {
    Layout,
    NavMenu,
    Search,
    MenuMore,
    MenuAvator,
    MenuNotifications
  },
  data: () => ({
    title: 'Vision'
  })
}
</script>
