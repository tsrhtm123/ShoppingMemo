<template>
    <div class="p05">
        <q-btn flat round color="red" v-on:click="openForm" v-show="!isCreating">
            <q-icon name="add_circle" />
        </q-btn>
        <q-card v-show="isCreating">
            <q-card-main>
                <q-input v-model="titleText" stack-label="Title" />
                <q-input v-model="spaceText" stack-label="Space" />
                <q-input v-model="priceText" type="number" prefix="&yen;" float-label="Price" />
                <q-input v-model="numberText" type="number" float-label="Number" />
            </q-card-main>
            <q-card-separator />
            <q-card-actions align="around">
                <q-btn flat round small color="red" v-on:click="sendForm()">
                    <q-icon name="add_circle" />
                </q-btn>
                <q-btn flat round small color="faded" v-on:click="closeForm">
                    <q-icon name="cancel" />
                </q-btn>
            </q-card-actions>
        </q-card>
    </div>
</template>

<script>
  export default {
    name: 'createTodo',
    data() {
      return {
        titleText: '',
        spaceText: '',
        priceText: '',
        numberText: '',
        isCreating: false,
      };
    },
    methods: {
      openForm() {
          this.isCreating = true;
        },
        closeForm() {
          this.isCreating = false;
        },
        sendForm() {
          console.log("sendForm");
          console.log(this.priceText);
          if (this.titleText.length > 0 && this.spaceText.length > 0 && this.priceText > 0 && this.numberText > 0) {
            const title = this.titleText;
            const space = this.spaceText;
            const price = this.priceText;
            const number = this.numberText;
            this.$emit('create-todo', {
              title,
              space,
              price,
              number,
              done: false,
            });
            this.titleText = '';
            this.spaceText = '';
            this.priceText = '';
            this.numberText = '';
            this.isCreating = false;
          }
        },
    },
  };
</script>

<style scoped>
.p05 {
  padding: 0rem 2rem;
}
</style>

