<template>
    <q-card>
        <q-card-title v-show="!isEditing">
            {{ todo.title }}
            <span slot="subtitle">{{ todo.space }}</span>
        </q-card-title>
        <q-card-main v-show="!isEditing">
            &yen; {{ todo.price }} (数量 {{ todo.number }} )
        </q-card-main>
        <q-card-main v-show="isEditing">
            <q-input v-model="todo.title" stack-label="Title" />
            <q-input v-model="todo.space"" stack-label="Space" />
            <q-input v-model="todo.price" type="number" prefix="&yen;" float-label="Price" />
            <q-input v-model="todo.number" type="number" float-label="Number" />
        </q-card-main>
        <q-card-separator />
        <q-card-actions align="around">
            <q-btn flat round small color="primary" v-show="!isEditing &&todo.done" disabled>
                <q-icon name="check_box" />
            </q-btn>
            <q-btn flat round small color="primary" v-on:click="completeTodo(todo)" v-show="!isEditing && !todo.done">
                <q-icon name="check_box_outline_blank" />
            </q-btn>
            <q-btn flat round small color="secondary" v-on:click="hideForm" v-show="isEditing">
                <q-icon name="close" />
            </q-btn>
            <q-btn flat round small color="secondary" v-on:click="showForm" v-show="!isEditing">
                <q-icon name="edit" />
            </q-btn>
            <q-btn flat round small color="faded" v-on:click="deleteTodo(todo)">
                <q-icon name="delete" />
            </q-btn>
        </q-card-actions>
    </q-card>
</template>

<script>
  export default {
    props: ['todo'],
    data() {
      return {
        isEditing: false,
      };
    },
    methods: {
      completeTodo(todo) {
          this.$emit('complete-todo', todo);
        },
        deleteTodo(todo) {
          this.$emit('delete-todo', todo);
        },
        showForm() {
          this.isEditing = true;
        },
        hideForm() {
          this.isEditing = false;
        },
    },
  };
</script>