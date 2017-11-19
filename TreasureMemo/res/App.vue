<template>
    <div id="app">
        <q-layout ref="layout">
            <my-header />
            <item-list v-bind:items="items"></item-list>
            <create-item v-on:create-item="createItem"></create-item>
        </q-layout>
    </div>
</template>

<script>
  import ItemList from './components/ItemList';
  import CreateItem from './components/CreateItem';
  import Header from './components/header.vue'

  export default {
    name: 'app',
    components: {
      'my-header': Header,
      ItemList,
      CreateItem,
    },
    data() {
      return {
        items: [{
          title: 'さつまいも',
          space: 'スーパーA',
          price: 200,
          number: 1,
          done: false,
        }, {
          title: 'バター',
          space: 'スーパーA',
          price: 400,
          number: 1,
          done: false,
        }, {
          title: '豚肩ロース肉(薄切り)',
          space: '肉屋さん',
          price: 400,
          number: 1,
          done: false,
        }],
      };
    },
    methods: {
      createItem(newItem) {
        this.items.push(newItem);
      },
    },
  }
</script>

<style src="../node_modules/quasar-framework/dist/quasar.mat.css">
</style>