<template>
    <div class="layout-padding">
        <p class="tasks">完了: {{items.filter(item => {return item.done === true}).length}}</p>
        <p class="tasks">残り: {{items.filter(item => {return item.done === false}).length}}</p>
        <item v-on:delete-item="deleteItem" v-on:complete-item="completeItem" v-for="item in items" :item.sync="item"></item>
    </div>
</template>

<script>
import Item from './Item';
export default {
  props: ['items'],
  components: {
    Item,
  },
  methods: {
    deleteItem(item) {
    const itemIndex = this.items.indexOf(item);
        this.items.splice(itemIndex, 1);
    },
    completeItem(item) {
      const itemIndex = this.items.indexOf(item);
      this.items[itemIndex].done = true;
    },
  },
};
</script>

<style scoped>
p.tasks {
  text-align: center;
}
</style>