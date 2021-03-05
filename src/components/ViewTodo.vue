<template>
  <b-container>
    <h1>Todo Title:{{ currentTodo.title }}</h1>
    <hr>
    <p>{{ currentTodo.description }}</p>
    <small>
        {{ currentTodo.isCompleted ? 'Done' : 'In Progress'}}
    </small>
    <div class="d-flex">
      <b-button variant='primary' class="mr-1">Edit</b-button>
      <b-button variant='danger' class="ml-1">Delete</b-button>
    </div>
  </b-container>
</template>

<script>

// import { mapGetters } from 'vuex';

export default {
  name: 'viewTodo',
  computed: {
    currentTodo() {
      const { params } = this.$route;
      // debugger;
      return this.$store.getters.getTodoById(Number(params.id));
    },
  },
  // methods: {
  //   ...mapGetters(['getTodoById']),
  // },
};
</script>

<style scoped>

</style>
