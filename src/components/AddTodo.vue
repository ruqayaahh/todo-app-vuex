<template>
  <b-container>
    <b-form @submit.prevent="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Task Title"
        label-for="input-1"
        description="Short name for the task you want to complete."
      >
        <b-form-input
          id="input-1"
          type="text"
          placeholder="Enter task title"
          v-model="todo.title"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Task Description"
        label-for="input-1"
        description="Long description for the task you want to complete.">
        <b-form-textarea
      id="textarea"
      v-model="todo.description"
      placeholder="Enter task description"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
      </b-form-group>

    <b-button type="submit" variant="primary">Submit</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddTodoForm',
  data() {
    return {
      todo: {
        title: '',
        description: '',
      },
    };
  },
  methods: {
    ...mapActions(['addTodoItem']),
    onSubmit() {
      const { todo } = this;
      this.addTodoItem(todo);
      this.todo = {
        title: '',
        description: '',
      };
    },
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
