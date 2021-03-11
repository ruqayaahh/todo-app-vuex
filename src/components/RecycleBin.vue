<template>
  <div>
    <b-container>
      <!-- <h1>{{ welcome_message }}</h1> -->
      <h1>Here are the tasks you deleted</h1>
      <hr>
      <p>Click the restore button to add them to your todos once again</p>
      <!-- <button>+ New Todo</button> -->
      <b-list-group>
        <b-list-group-item class='item'
        v-for="todo in todos" :key="todo.id">
          <div>
            <!-- <input class="mr-5" type='checkbox' name=' id='> -->
          {{ todo.title }}
          </div>
          <div class="actions">
            <b-button variant='primary' class="mr-1"
            @click='$router.push(`view-todo/${todo.id}`)'>View</b-button>
          <b-button class="mr-1">Restore</b-button>
          <b-button variant='danger' class="ml-1" @click="deleteItem(todo)">Delete</b-button>
          </div>
        </b-list-group-item>
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'RecycleBin',
  computed: {
    ...mapGetters({
      todos: 'getDeletedTodos',
    }),
  },
  methods: {
    ...mapActions(['restoreTodoItems']),
  },
};
</script>

<style scoped>

</style>
