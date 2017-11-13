<template>
    <div id="app">
        <q-layout ref="layout">
            <my-header />
            <todo-list v-bind:todos="todos"></todo-list>
            <create-todo v-on:create-todo="createTodo"></create-todo>
        </q-layout>
    </div>
</template>

<script>
  import TodoList from './components/TodoList';
  import CreateTodo from './components/CreateTodo';
  import Header from './components/header.vue'

  export default {
    name: 'app',
    components: {
      'my-header': Header,
      TodoList,
      CreateTodo,
    },
    data() {
      return {
        todos: [{
          title: '新刊1',
          space: '東6あa',
          price: 500,
          number: 1,
          done: true,
        }, {
          title: '再録A',
          space: '東6いb',
          price: 1000,
          number: 1,
          done: false,
        }, {
          title: '再録B',
          space: '東6いb',
          price: 1500,
          number: 1,
          done: false,
        }],
      };
    },
    methods: {
      createTodo(newTodo) {
        this.todos.push(newTodo);
      },
    },
  }
</script>

<style src="../node_modules/quasar-framework/dist/quasar.mat.css">
</style>