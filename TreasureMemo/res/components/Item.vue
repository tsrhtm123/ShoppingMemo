<template>
    <q-card>
        <q-card-title v-show="!isEditing">
            {{ item.title }}
            <span slot="subtitle">{{ item.space }}</span>
        </q-card-title>
        <q-card-main v-show="!isEditing">
            &yen; {{ item.price }} (数量 {{ item.number }} )
        </q-card-main>
        <q-card-main v-show="isEditing">
            <q-input v-model="item.title" stack-label="Title" />
            <q-input v-model="item.space"" stack-label="Space" />
            <q-input v-model="item.price" type="number" prefix="&yen;" float-label="Price" />
            <q-input v-model="item.number" type="number" float-label="Number" />
        </q-card-main>
        <q-card-separator />
        <q-card-actions align="around">
            <q-btn flat round small color="primary" v-show="!isEditing &&item.done" disabled>
                <q-icon name="check_box" />
            </q-btn>
            <q-btn flat round small color="primary" v-on:click="completeTodo(item)" v-show="!isEditing && !item.done">
                <q-icon name="check_box_outline_blank" />
            </q-btn>
            <q-btn flat round small color="secondary" v-on:click="hideForm" v-show="isEditing">
                <q-icon name="close" />
            </q-btn>
            <q-btn flat round small color="secondary" v-on:click="showForm" v-show="!isEditing">
                <q-icon name="edit" />
            </q-btn>
            <q-btn flat round small color="faded" v-on:click="deleteTodo(item)">
                <q-icon name="delete" />
            </q-btn>
        </q-card-actions>
    </q-card>
</template>

<script>
  export default {
    props: ['item'],
    data() {
      return {
        isEditing: false,
      };
    },
    methods: {
      completeTodo(item) {
          this.$emit('complete-item', item);
        },
        deleteTodo(item) {
          this.$emit('delete-item', item);
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