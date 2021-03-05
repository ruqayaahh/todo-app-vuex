<template>
  <div>
    <b-list-group>
      <b-list-group-item v-for='todo in todos' :key='todo.id'>
        <input type='checkbox' name='' id='' />
        {{ todo.title }}
        <button>Edit</button>
        <button>Delete</button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'TodoLists',
  props: {
    showFace: {
      type: Boolean,
    },
    todos: {
      type: Array,
      required: true,
    },
  },
};
</script>
