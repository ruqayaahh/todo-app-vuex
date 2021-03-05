<template>
  <div>
    <b-container>
      <!-- <h1>{{ welcome_message }}</h1> -->
      <h1>Welcome to the new Todo VueX application</h1>
      <p>Here are a few of the tasks you have to do: </p>
      <!-- <button>+ New Todo</button> -->
      <b-list-group>
        <b-list-group-item class='item'
        v-for="todo in todos" :key="todo.id">
          <input type='checkbox' name=' id='>
          {{ todo.title }}
          <div class="actions">
            <b-button variant='primary' class="mr-1"
            @click='$router.push(`view-todo/${todo.id}`)'>View</b-button>
          <b-button class="mr-1">Edit</b-button>
          <b-button variant='danger' class="ml-1">Delete</b-button>
          </div>
        </b-list-group-item>
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      msg:
        'My name is Sirri, your Task Organiser. I will be helping you organise your tasks',
      showFace: true,
    };
  },
  computed: {
    ...mapGetters({
      todos: 'getTodoItems',
    }),
  },
  methods: {},
};
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
