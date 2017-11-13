<template>
  <q-toolbar slot="header" color="secondary">
    <q-btn flat>
      <q-icon name="menu" />
    </q-btn>
    <q-toolbar-title :padding="1">
      宝メモ
    </q-toolbar-title>
    <q-btn flat>
      <q-icon name="more_vert" />
    </q-btn>
  </q-toolbar>
</template>

<script>
export default {
  name: 'header'
}
</script>