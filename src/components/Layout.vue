<template>
  <v-app id="keep">
    <v-app-bar
      app
      clipped-left
      color="amber"
    >
      <v-app-bar-nav-icon @click="menuVisible = !menuVisible"></v-app-bar-nav-icon>
      <slot name="toolbar-start"/>
      <slot name="toolbar-center"/>
      <v-spacer></v-spacer>
      <slot name="toolbar-end"/>
    </v-app-bar>

    <v-navigation-drawer
      v-model="menuVisible"
      app
      clipped
      color="grey lighten-4"
    >

      <slot name="navigation"/>
    </v-navigation-drawer>

    <v-content>
      <v-container
        fluid
        fill-height
        class="grey lighten-4"
      >
        <slot name="content"/>
      </v-container>
    </v-content>
  </v-app>
</template>

<style>
#keep .v-navigation-drawer__border {
  display: none
}
</style>

<script>
export default {
  name: 'Layout',
  data: () => ({
    menuVisible: false,
  }),
  computed: {
    platform () {
      return this.$store.state.platform
    },
    showProgress () {
      return this.platform.transProBar
    }
  }
}
</script>
