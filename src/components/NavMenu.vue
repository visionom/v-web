<template>
  <v-list 
    dense
    class="grey lighten-4">
    <template v-for="item in menus">
      <v-list-group
        v-if="item.submenus"
        v-model="item.model"
        :key="item.name"
        :prepend-icon="item.icon"
        class="grey--text"
      >
        <v-list-item slot="activator">
          <v-list-item-content >
            <v-list-item-title class="grey--text">
              {{ item.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="child in item.submenus"
          :key="child.path"
          :to="child.path"
        >
          <v-list-item-action v-if="child.icon">
            <v-icon>{{ child.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="grey--text">
              {{ child.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-item
        v-else
        :key="item.path"
        :to="item.path"
        class="grey--text"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="grey--text">
            {{ item.name }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
import apps from '@/apploader'

let menus = []

apps.forEach(app => {
  let submenus = null
  let menuPath = ''

  if (app.menus) {
    menus.push(app.menus)
  } else {
    // load sub menu
    if (Array.isArray(app.routers)) {
      menuPath = app.routers[0].path
      if (app.routers.length > 1) {
       submenus = []
        app.routers.forEach(router => {
          submenus.push({
            name: router.display,
            path: router.path
          })
        })
      }
    }

    // load menu
    menus.push({
      name: app.config.menuName,
      icon: app.config.menuIcon,
      path: menuPath,
      submenus: submenus
    })
  }
})

export default {
  name: 'NavMenu',
  data: () => ({
    menus: menus
  })
}
</script>

<style>
</style>
