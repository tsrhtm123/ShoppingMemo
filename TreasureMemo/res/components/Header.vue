<template>
  <q-toolbar slot="header" color="secondary">
    <q-btn flat>
      <q-icon name="menu" />
    </q-btn>
    <q-toolbar-title :padding="1">
      お買物メモ
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