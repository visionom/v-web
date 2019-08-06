<template>
  <v-text-field
    v-model="search"
    flat
    solo-inverted
    hide-details
    label="Search"
    class="hidden-sm-and-down"
    prepend-inner-icon="mdi-magnify"
  />
</template>

<script>
export default {
  name: 'Search',
  data: () => ({
    search: '',
  })
}
</script>
